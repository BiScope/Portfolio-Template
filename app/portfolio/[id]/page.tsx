"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  company: string;
  intro: string;
  description: string | null;
  image_url: string | null;
  project_url: string | null;
  role: string | null;
  responsibilities: string[] | null;
  technologies: string[] | null;
}

interface ProjectImage {
  id: string;
  image_url: string;
  order_index: number;
}

export default function PortfolioDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [projectImages, setProjectImages] = useState<ProjectImage[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", params.id)
        .single();

      if (data) {
        setProject(data);
        
        // Fetch project images
        const { data: images } = await supabase
          .from("project_images")
          .select("*")
          .eq("project_id", params.id)
          .order("order_index");
        
        if (images) {
          setProjectImages(images);
        }
      } else if (error) {
        console.error("Error fetching project:", error);
      }
      setLoading(false);
    }

    if (params.id) {
      fetchProject();
    }
  }, [params.id]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Get images array with selected image at the top
  const getOrderedImages = () => {
    if (projectImages.length === 0) return [];
    const ordered = [...projectImages];
    const selected = ordered.splice(selectedImageIndex, 1)[0];
    return [selected, ...ordered];
  };

  const orderedImages = getOrderedImages();

  if (loading) {
    return (
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p>Project not found</p>
          <Link
            href="/portfolio"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-slate-700 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            {orderedImages.length > 0 ? (
              <>
                {/* Main/Selected Image */}
                <div className="relative w-full rounded-xl overflow-hidden shadow-lg cursor-pointer">
                  <img
                    src={orderedImages[0].image_url}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Thumbnail Grid */}
                {orderedImages.length > 1 && (
                  <div className="grid grid-cols-3 gap-4">
                    {orderedImages.slice(1).map((img, idx) => {
                      const originalIndex = projectImages.findIndex(pi => pi.id === img.id);
                      return (
                        <div
                          key={img.id}
                          onClick={() => handleImageClick(originalIndex)}
                          className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-500"
                        >
                          <img
                            src={img.image_url}
                            alt={`${project.title} ${idx + 2}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            ) : project.image_url ? (
              <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : null}
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Title with Link */}
            <div className="flex items-center gap-2">
              <h1 className="text-4xl font-bold text-slate-900">
                {project.title}
              </h1>
              {project.project_url && (
                <a
                  href={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-slate-700 leading-relaxed">
              {project.intro && (
                <p className="text-lg">{project.intro}</p>
              )}
              {project.description && (
                <>
                  {project.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-lg">{paragraph}</p>
                  ))}
                </>
              )}
            </div>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Technologies:</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Role and Responsibilities */}
            {project.role && (
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Role:</h3>
                <p className="text-lg text-slate-700 mb-4">{project.role}</p>
              </div>
            )}

            {project.responsibilities && project.responsibilities.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Responsibilities:</h3>
                <ul className="space-y-2 list-disc list-inside text-slate-700">
                  {project.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-lg">{responsibility}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
