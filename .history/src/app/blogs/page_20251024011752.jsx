
"use client";

import Link from "next/link";

// Fake blog data
const blogs = [
  {
    _id: "1",
    title: "Understanding React Hooks",
    description: "A deep dive into React Hooks, how they work, and best practices for using them in modern React applications.",
    date: "2025-10-01",
    readTime: "5 min read",
    tags: ["React", "Hooks", "JavaScript"],
  },
  {
    _id: "2",
    title: "Next.js 14 Features",
    description: "An overview of the new features in Next.js 14 and how to leverage them for faster, more scalable web apps.",
    date: "2025-09-20",
    readTime: "7 min read",
    tags: ["Next.js", "React", "SSR"],
  },
  {
    _id: "3",
    title: "TailwindCSS Tips and Tricks",
    description: "Improve your UI development with these TailwindCSS tips, including utility-first patterns and responsive design tricks.",
    date: "2025-09-10",
    readTime: "6 min read",
    tags: ["TailwindCSS", "CSS", "Design"],
  },
];

export default function BlogsPage() {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="py-20 px-4 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">All Blog Posts</h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Explore my thoughts on web development, React, and modern web technologies.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog._id}
              className="blog-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group bg-white text-black"
            >
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="blog-tag px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-800 opacity-90 mb-4 line-clamp-3">
                  {blog.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{formatDate(blog.date)}</span>
                  <span>{blog.readTime}</span>
                </div>

                {/* Read More Button */}
                <Link
                  href={`/blogs/${blog._id}`}
                  className="inline-flex items-center text-purple-600 hover:opacity-80 font-medium transition-colors group-hover:translate-x-1 duration-200"
                >
                  Read More
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* No blogs fallback */}
        {blogs.length === 0 && (
          <p className="text-center text-gray-400 py-10">No blog posts found.</p>
        )}
      </div>
    </div>
  );
}
