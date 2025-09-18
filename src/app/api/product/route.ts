import { NextRequest, NextResponse } from "next/server";

const data = [
    {
      id: 1,
      title: "Baju Baru",
      price: 250000,
      image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/a80d1905-5296-4aa9-855a-1d617e3c98f6/air-force-1-low-retro-shoes-2uCuGnVm.png"
    },
    {
      id: 2,
      title: "Baju Lama",
      price: 300000,
      image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/ab9e6fa9-4f2f-4aa1-ad84-774c20ad0ba4/air-force-1-low-retro-shoes-2uCuGnVm.png"
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