import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Google Apps Script Web App URL (you'll replace this with your deployed URL)
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzT4Os2VormB4zR_ukFDcwx5imr4zebGGHogugS6gvn0fPXm_L6KuQvxdFaFwyJUDA9/exec";

    if (!GOOGLE_SCRIPT_URL) {
      console.error("Google Script URL not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    // Send data to Google Sheets via Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "N/A",
        message,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit to Google Sheets");
    }

    const result = await response.json();

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
        data: result,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
        details: error.message,
      },
      { status: 500 },
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
