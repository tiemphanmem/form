import { notFound } from "next/navigation";
import ShareButtons from "./ShareButtons";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:4000"}/api/posts/slug/${params.slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return { title: "Không tìm thấy bài viết" };
  }

  const post = await res.json();

  return {
    title: post.title,
    description: post.excerpt || post.title,
    openGraph: {
      images: [post.thumbnail || "/default-thumbnail.jpg"],
    },
  };
}



export default async function PostDetail({ params }: { params: { slug: string } }) {
  const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  const res = await fetch(`${baseURL}/api/posts/slug/${params.slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  const post = await res.json();

  return (
    <section className="bg-white py-12 px-4 text-[#444]">
      <div className="max-w-3xl mx-auto">
        <img
          src={post.thumbnail || "/default-thumbnail.jpg"}
          alt={post.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <p className="text-sm text-gray-500 italic mb-2">
          {new Date(post.createDate).toLocaleDateString("vi-VN")}
        </p>
        {post.content && typeof post.content === "string" ? (
          <div
            className="leading-relaxed text-base"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : (
          <p className="text-sm italic text-gray-500">Không có nội dung hiển thị.</p>
        )}

        <div className="mt-12 border-t pt-6">
          <ShareButtons />
        </div>
      </div>
    </section>
  );
}
