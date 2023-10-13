/** @format */

import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";

/** @format */

export const metadata = {
  title: "Reviews",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className='flex flex-row flex-wrap gap-3'>
        {reviews.map((review) => (
          <li
            key={review.slug}
            className='bg-white border rounded shadow w-80 hover:shadow-xl'>
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt=''
                width='320'
                height='180'
                className='rounded-t'
              />
              <h2 className='py-1 font-semibold text-center font-orbitron'>
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// => http://localhost:3000/
