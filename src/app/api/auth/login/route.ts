import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const reqData = await request.json();

  return NextResponse.json({ status: 200, message: "Success", data: reqData });
}