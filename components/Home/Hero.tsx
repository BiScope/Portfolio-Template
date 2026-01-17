"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Hero() {
  const [aboutIntro, setAboutIntro] = useState<string>("");

  useEffect(() => {
    async function fetchAboutIntro() {
      const { data } = await supabase
        .from("about_sections")
        .select("content")
        .eq("order_index", 0)
        .single();
      
      if (data) {
        setAboutIntro(data.content);
      }
    }
    fetchAboutIntro();
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            ABOUT ME
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            {aboutIntro || "I am an IT Professional with 10 years of diverse experience. With my technical expertise in the dynamic IT industry, I have partnered with a multitude of companies and clients, fueling both my career growth and their business development."}
          </p>
          <Link
            href="/about"
            className="inline-block bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl uppercase tracking-wide"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
