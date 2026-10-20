import { NextRequest, NextResponse } from "next/server";
import { submitContactInquiry } from "@/app/actions/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = await submitContactInquiry(null, body);

    if (!result.success) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request payload or server error.",
      },
      { status: 500 }
    );
  }
}
