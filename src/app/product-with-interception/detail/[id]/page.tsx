import { getDataProduct } from "@/services/products";

const DetailProductPageWithInterception = async ({
  params
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = await getDataProduct("http://localhost:3000/api/product/?id=" + id);

  return (
    <div className="container max-w-md mx-auto my-10">
      <div className="border border-gray-700">
        <img
          src={product.data.image}
          alt={product.data.title}
          className="w-full object-cover aspect-square col-span-2"
        />
        <div className="bg-white py-4 px-6">
          <h3>{product.data.title}</h3>
          <p>Price: Rp {product.data.price}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailProductPageWithInterception;