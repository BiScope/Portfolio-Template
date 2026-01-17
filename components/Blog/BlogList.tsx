"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  image_url: string | null;
  url: string;
  platform: string | null;
  written_by: string;
}

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      const { data } = await supabase
        .from("blogs")
        .select("*")
        .order("order_index");
      
      if (data) {
        setBlogs(data);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 uppercase">
            My Blogs
          </h1>
        </div>
        
        {blogs.length > 0 ? (
          <div className="space-y-6">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <div className="flex-shrink-0 w-full md:w-64 h-48 relative rounded-lg overflow-hidden">
                  {blog.image_url ? (
                    <img
                      src={blog.image_url}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                      <span className="text-6xl">📝</span>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {blog.description}
                    </p>
                    {blog.keywords && blog.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.keywords.map((keyword, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-gray-600 font-semibold">
                      {blog.written_by || "Written by me"}
                    </p>
                    {blog.platform && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {blog.platform}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 py-12">
            No blogs available at the moment.
          </p>
        )}
      </div>
    </section>
  );
}
