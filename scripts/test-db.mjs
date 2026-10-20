import dns from "node:dns";
import { Agent, setGlobalDispatcher } from "undici";
import { neon } from "@neondatabase/serverless";

// Ensure IPv4 resolution on systems without active IPv6 routes
const agent = new Agent({
  connect: {
    lookup: (hostname, options, callback) => {
      dns.lookup(hostname, { ...options, family: 4 }, (err, addresses, family) => {
        if (err) return callback(err, "", 4);
        if (options.all) return callback(null, addresses, 4);
        return callback(null, addresses, family);
      });
    },
  },
});
setGlobalDispatcher(agent);

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("❌ DATABASE_URL is not defined in environment.");
  process.exit(1);
}

const sql = neon(url);

async function testConnection() {
  console.log("Connecting to Neon Postgres...");
  try {
    const timeRes = await sql`SELECT NOW() as server_time, current_database() as db_name, version() as pg_version;`;
    console.log("✅ Successfully connected to Neon!");
    console.log("   Database:", timeRes[0].db_name);
    console.log("   Server Time:", timeRes[0].server_time);
    console.log("   PostgreSQL Version:", timeRes[0].pg_version.split(" ")[0]);

    const tableRes = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name = 'contact_inquiries';
    `;

    if (tableRes.length > 0) {
      console.log("✅ 'contact_inquiries' table exists in public schema.");
      const countRes = await sql`SELECT COUNT(*) as total FROM contact_inquiries;`;
      console.log(`   Current total inquiries: ${countRes[0].total}`);

      const rows = await sql`SELECT id, name, email, service, status, created_at FROM contact_inquiries ORDER BY id DESC LIMIT 5;`;
      console.log("   Recent inquiries:", JSON.stringify(rows, null, 2));
    } else {
      console.warn("⚠️ 'contact_inquiries' table was not found in public schema.");
    }
  } catch (err) {
    console.error("❌ Connection test failed:", err);
    process.exit(1);
  }
}

testConnection();
