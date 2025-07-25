import Link from "next/link";
import { CalendarDays, Eye } from "lucide-react";

interface Post {
  _id: string;
  title: string;
  slug: string;
  author: string;
  tags: string[];
  views: number;
  createDate: string;
  thumbnail?: string;
  excerpt?: string;
  content?: string;
}


function stripHtml(html: string, limit = 150): string {
  return html?.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().slice(0, limit) + "...";
}

export default async function PostListPage() {
  let posts: Post[] = [];

  try {
    const res = await fetch(`http://localhost:4000/api/posts`, { cache: "no-store" });
    const data = await res.json();
    posts = Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Failed to fetch posts:", err);
  }

  return (
    <div className="">
      {/* Banner đầu trang sản phẩm */}
      <section className="relative h-[300px] md:h-[200px] w-full">
        <img
          src="/images/slides/15.jpg" // ← thay bằng ảnh bạn upload hoặc đúng path
          alt="Banner sản phẩm"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold uppercase tracking-wider">
            Tin tức Thép Tây Đô
          </h1>
        </div>
      </section>
      <section className="bg-white py-16 px-6">
        {posts.length === 0 && (
          <p className="text-gray-500 text-center">Hiện chưa có bài viết nào.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post._id} className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
              <Link href={`/post/${post.slug}`}>
                <div>
                  <img
                    src={post.thumbnail || "/default-thumbnail.jpg"}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-[17px] font-semibold text-[#222] leading-snug mb-1 line-clamp-2">
                      {post.title}
                    </h2>

                    <div className="w-8 h-[2px] bg-blue-700 my-2" />

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt || (post.content ? stripHtml(post.content) : "")}
                    </p>

                    <div className="flex justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <CalendarDays size={14} />
                        {new Date(post.createDate).toLocaleDateString("vi-VN")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {post.views} Lượt xem
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
