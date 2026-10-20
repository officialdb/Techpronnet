import dns from "node:dns";
import { Agent, setGlobalDispatcher } from "undici";
import { neon } from "@neondatabase/serverless";

// Ensure IPv4 resolution on systems without active IPv6 routes to prevent connect timeouts
if (typeof window === "undefined") {
  try {
    const agent = new Agent({
      connect: {
        lookup: (hostname, options, callback) => {
          dns.lookup(hostname, { ...options, family: 4 }, (err, addresses, family) => {
            if (err) {
              return callback(err, "" as any, 4);
            }
            if (options.all) {
              return callback(null, addresses as any, 4);
            }
            return callback(null, addresses as any, family);
          });
        },
      },
    });
    setGlobalDispatcher(agent);
  } catch (e) {
    // Non-fatal if runtime does not support custom dispatcher
    console.debug("Global dispatcher setup skipped:", e);
  }
}

function getDatabaseUrl(): string {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not defined in environment variables. Please check your .env.local file."
    );
  }
  return url;
}

export function getDbClient() {
  const url = getDatabaseUrl();
  return neon(url);
}

// Default Neon SQL query instance
export const sql = neon(process.env.DATABASE_URL || "");

/**
 * Health check helper to verify Neon database connectivity
 */
export async function checkDatabaseConnection(): Promise<{
  ok: boolean;
  timestamp?: string;
  error?: string;
}> {
  try {
    const client = getDbClient();
    const result = await client`SELECT NOW() as current_time;`;
    return {
      ok: true,
      timestamp: (result[0] as { current_time: string })?.current_time,
    };
  } catch (error) {
    console.error("Neon DB connection check failed:", error);
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown database error",
    };
  }
}
