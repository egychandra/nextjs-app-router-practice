interface ProductPageProps {
  params: {
    slug: string[]
  }
}

const ProductPage = (props: ProductPageProps ) => {
  const { params: { slug } } = props;

  return (
    <div>
      <h1>{slug ? "Detail Product Page" : "Product Page"}</h1>
      {slug && (
        <>
          <p>Category: {slug[0]}</p>
          <p>Gender: {slug[1]}</p>
          <p>Id: {slug[2]}</p>
        </>
      )}
    </div>
  )
}

export default ProductPage