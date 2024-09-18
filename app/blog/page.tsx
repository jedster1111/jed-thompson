import { getAllPosts } from "@/src/lib/Posts/api";
import Link from "next/link";
import { to } from "./blogRoutes";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="grow flex flex-col justify-center items-center self-center prose prose-zinc dark:prose-invert">
      <div>
        <h1>Welcome to my blog</h1>

        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={to.ABlog(post.slug)}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
