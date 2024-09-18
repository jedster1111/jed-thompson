import markdownToHtml from "@/src/lib/markdownToHtml";
import { getPostBySlug } from "@/src/lib/Posts/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} by Jed Thompson`;

  return {
    title,
  };
}

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = markdownToHtml(post.content);

  return (
    <div className="grow flex justify-center">
      <article
        className="min-w-0 max-w-192 w-full prose prose-zinc dark:prose-invert border-2 border-white p-4"
        dangerouslySetInnerHTML={{ __html: content }}
      ></article>
    </div>
  );
}
