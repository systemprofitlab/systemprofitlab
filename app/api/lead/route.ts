import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // TEMP: log email (you can replace this with database later)
    console.log("New lead captured:", email);

    return NextResponse.json(
      { success: true, message: "Lead captured" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}