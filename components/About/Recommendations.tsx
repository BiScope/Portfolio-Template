"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Star } from "lucide-react";
import { getCachedData, setCachedData } from "@/lib/cache";
import LoadingSpinner from "@/components/LoadingSpinner";

interface Testimonial {
  id: string;
  client_name: string;
  company: string;
  content: string;
  rating: number | null;
  avatar_url: string | null;
}

export default function Recommendations() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      // Check cache first
      const cachedTestimonials = getCachedData<Testimonial[]>("testimonials");
      if (cachedTestimonials) {
        setTestimonials(cachedTestimonials);
        setLoading(false);
        return;
      }

      // Fetch from Supabase
      const { data } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_active", true)
        .order("order_index");
      
      if (data) {
        setTestimonials(data);
        setCachedData("testimonials", data);
      }
      setLoading(false);
    }
    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-slate-900 mb-12 uppercase">
            Recommendations
          </h2>
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-slate-900 mb-12 uppercase">
          Recommendations
        </h2>
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {testimonial.avatar_url ? (
                    <img
                      src={testimonial.avatar_url}
                      alt={testimonial.client_name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.client_name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.client_name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                {testimonial.rating && (
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                )}
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading recommendations...</p>
        )}
      </div>
    </section>
  );
}
