import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (!tag) {
    return NextResponse.json({ status: 400, revalidated: false, message: "Tag is required" }, { status: 400 });
  }

  if (secret !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ status: 401, revalidated: false, message: "Unauthorized" }, { status: 401 });
  }

  revalidateTag(tag);

  return NextResponse.json({ status: 200, revalidated: true, message: "Success", date: new Date() });
}