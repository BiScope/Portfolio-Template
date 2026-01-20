"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Briefcase, Building2, Handshake, Users, Brain, TrendingUp } from "lucide-react";
import { getCachedData, setCachedData } from "@/lib/cache";
import LoadingSpinner from "@/components/LoadingSpinner";

interface AboutSection {
  id: string;
  title: string;
  content: string;
  order_index: number;
}

export default function AboutSections() {
  const [sections, setSections] = useState<AboutSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSections() {
      // Check cache first
      const cachedSections = getCachedData<AboutSection[]>("about_sections");
      if (cachedSections) {
        setSections(cachedSections);
        setLoading(false);
        return;
      }

      // Fetch from Supabase
      const { data } = await supabase
        .from("about_sections")
        .select("*")
        .eq("is_active", true)
        .order("order_index");
      
      if (data) {
        setSections(data);
        setCachedData("about_sections", data);
      }
      setLoading(false);
    }
    fetchSections();
  }, []);

  const sectionIcons = [
    <Briefcase key="briefcase" className="w-12 h-12 text-gray-400" />,
    <Building2 key="building" className="w-12 h-12 text-gray-400" />,
    <Handshake key="handshake" className="w-12 h-12 text-orange-400" />,
    <Users key="users" className="w-12 h-12 text-orange-400" />,
    <Brain key="brain" className="w-12 h-12 text-blue-600" />,
    <TrendingUp key="trending" className="w-12 h-12 text-purple-600" />,
  ];

  const defaultSections = [
    {
      title: "IT Professional with 10 Years of Diverse Experience",
      content: "With my technical experience in the dynamic IT industry, I have partnered with a multitude of companies and clients, fueling both my career growth and their business development. My specialty lies in advanced Software development, encompassing both web and mobile platforms, where I excel in transforming complex concepts into user-friendly solutions.",
    },
    {
      title: "Expert in Enterprise-Level Software Development",
      content: "As a software engineer, my contributions have been pivotal in developing enterprise-level software products. My portfolio spans multiple sectors, including software, healthcare, and manufacturing, reflecting my ability to adapt and excel in various environments. Collaborating with diverse clients, I have a proven track record in delivering robust applications that meet and exceed expectations.",
    },
    {
      title: "Adherent to Agile Development Principles",
      content: "My approach to software development is grounded in Test Driven Development (TDD) and Business Driven Development (BDD), allowing me to consistently deliver high-quality results. Whether working as an individual or as part of a team, I am known for my flexibility, dedication to meeting tight deadlines, and making significant contributions under various working conditions.",
    },
    {
      title: "Innovator in Design and Collaboration",
      content: "Creativity and innovation are at the heart of my product design philosophy. I continuously seek new and effective ways to enhance team collaboration and streamline the development process, ensuring that each project is not only successful but also a benchmark in software architecture.",
    },
    {
      title: "Proficient in AI and ML Integration",
      content: "Expanding my technical horizon, I am adept at incorporating AI and Machine Learning into applications. My expertise includes working with algorithms like KNN and developing web applications with NLP features, all powered by cutting-edge AI technology. This skill set allows me to create intelligent, responsive, and user-centric applications.",
    },
    {
      title: "Stay Up-To-Date with Industry Trends",
      content: "Dedication to lifelong learning is key to my professional ethos. I regularly engage with technical discussions through Social Media and Developer forums like StackOverflow, Medium, and GitHub to refine my problem-solving skills and stay abreast of the latest industry trends and technologies.",
    },
  ];

  const displaySections = sections.length > 0 ? sections : defaultSections.map((section, idx) => ({
    id: `default-${idx}`,
    title: section.title,
    content: section.content,
    order_index: idx,
  }));

  if (loading) {
    return (
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-5xl mx-auto space-y-12">
        {displaySections.map((section, idx) => (
          <div
            key={section.id}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                {sectionIcons[idx % sectionIcons.length]}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
