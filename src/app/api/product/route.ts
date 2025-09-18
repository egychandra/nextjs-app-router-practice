import { NextRequest, NextResponse } from "next/server";

const data = [
    {
      id: 1,
      name: "Baju Baru",
      price: 250000
    },
    {
      id: 2,
      name: "Baju Lama",
      price: 300000
    }
  ]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  
  if(id) {
    const productById = data.find((item) => item.id === Number(id));

    if(productById) {
      return NextResponse.json({ status: 200, message: "Success", data: productById });
    }
    
    return NextResponse.json({ status: 400, message: "Not Found", data: {} });
  }

  return NextResponse.json({ status: 200, message: "Success", data });
}