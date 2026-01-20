"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { getCachedData, setCachedData } from "@/lib/cache";
import LoadingSpinner from "@/components/LoadingSpinner";

interface Project {
  id: string;
  title: string;
  company: string;
  intro: string;
  image_url: string | null;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      // Check cache first
      const cachedProjects = getCachedData<Project[]>("home_projects");
      if (cachedProjects) {
        setProjects(cachedProjects);
        setLoading(false);
        return;
      }

      // Fetch from Supabase
      const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("is_active", true)
        .order("order_index")
        .limit(6);
      
      if (data) {
        setProjects(data);
        setCachedData("home_projects", data);
      }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-5xl font-bold text-slate-900 uppercase">Some of My Work</h2>
            <Link
              href="/portfolio"
              className="bg-slate-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-800 transition-colors uppercase tracking-wide"
            >
              View All
            </Link>
          </div>
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 uppercase">Some of My Work</h2>
          <Link
            href="/portfolio"
            className="bg-slate-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-800 transition-colors uppercase tracking-wide"
          >
            View All
          </Link>
        </div>
        {projects.length > 0 ? (
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-horizontal space-x-6 p-4">
              {[...projects, ...projects].map((project, idx) => (
                <div
                  key={`${project.id}-${idx}`}
                  className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  {project.image_url && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-sm text-blue-600 font-semibold mb-2">
                      {project.company}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{project.intro}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading projects...</p>
        )}
      </div>
      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-horizontal {
          animation: scroll-horizontal 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
