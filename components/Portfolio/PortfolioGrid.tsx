"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface Project {
  id: string;
  title: string;
  category: string;
  company: string;
  intro: string;
  image_url: string | null;
}

export default function PortfolioGrid() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam || "Website"
  );
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(
        categoryParam === "Web Design" ? "Web Design" : categoryParam
      );
    }
  }, [categoryParam]);

  useEffect(() => {
    async function fetchProjects() {
      let query = supabase.from("projects").select("*").order("order_index");

      if (selectedCategory !== "All") {
        query = query.eq("category", selectedCategory);
      }

      const { data } = await query;

      if (data) {
        setProjects(data);
      }
    }
    fetchProjects();
  }, [selectedCategory]);

  const categories = ["Website", "Web Design", "Mobile"];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-slate-900 mb-12 uppercase">
          Portfolio
        </h1>
        
        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.id}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {project.image_url && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                {!project.image_url && (
                  <div className="h-48 w-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <span className="text-6xl">📁</span>
                  </div>
                )}
                <div className="p-6">
                  <p className="text-sm text-blue-600 font-semibold mb-2">
                    {project.company}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {project.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 py-12">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
