import { useRouter } from 'next/dist/client/router';

function ReviewId() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h1>
      review {reviewId} for product {productId}
    </h1>
  );
}

export default ReviewId;
