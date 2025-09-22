import Link from "next/link";
import { getDataProduct } from "@/services/products";

const ProductPageWithInterception = async () => {
  const products = await getDataProduct("http://localhost:3000/api/product");

  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {products.data.map((product: any) => (
        <Link
          href={`/product-with-interception/detail/${product.id}`}
          key={product.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <img
              className="p-8 rounded-t-lg h-100 w-full"
              src={product.image}
              alt="product image"
            />
          <div className="px-5 pb-5">
              <h5
                className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate"
              >
                {product.title}
              </h5>
            <div className="flex items-center justify-between">
              <span
                className="text-3xl font-bold text-gray-900 dark:text-white"
              >
                IDR {product.price}
              </span>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductPageWithInterception