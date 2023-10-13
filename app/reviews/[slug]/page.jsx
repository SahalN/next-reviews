/** @format */

import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  console.log("[ReviewPage] rendering", slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className='flex items-baseline gap-3'>
        <p className='pb-2 italic'>{review.date}</p>
        <ShareLinkButton />
      </div>

      <img
        src={review.image}
        alt=''
        width='640'
        height='360'
        className='mb-2 rounded'
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className='max-w-screen-sm prose prose-slate'
      />
    </>
  );
}

// => http://localhost:3000/
