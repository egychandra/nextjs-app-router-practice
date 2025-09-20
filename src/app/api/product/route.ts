import { NextRequest, NextResponse } from "next/server";

const data = [
    {
      id: 1,
      title: "Nike Air Force 1 Low Retro Premium",
      price: 2199000,
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a80d1905-5296-4aa9-855a-1d617e3c98f6/AIR+FORCE+1+LOW+RETRO+PRM.png"
    },
    {
      id: 2,
      title: "Air Jordan 1 Low SE",
      price: 1939000,
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a2fcd201-82f3-43e4-a268-7f0d26f2a8e8/AIR+JORDAN+1+LOW+SE.png"
    },
    {
      id: 3,
      title: "Nike Vaporfly 4",
      price: 3789000,
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21f56016-2e59-4392-b80f-c9440573f798/ZOOMX+VAPORFLY+NEXT%25+4.png"
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