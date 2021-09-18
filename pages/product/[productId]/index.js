const { useRouter } = require('next/dist/client/router');

console.log("im inside productid page")
function ProductDetail() {
  const router = useRouter();
   const productId = router.query.productId

    return <h1>Details about product {productId}</h1>;
}

export default ProductDetail