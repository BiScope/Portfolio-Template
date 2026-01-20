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

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Determine items per view based on screen size
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 768 ? 2 : 1);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerView);
        const nextIndex = prevIndex + itemsPerView;
        return nextIndex > maxIndex ? 0 : nextIndex;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length, itemsPerView]);

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-slate-900 mb-12 uppercase">
            What Clients Say
          </h2>
          <LoadingSpinner />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-slate-900 mb-12 uppercase">
          What Clients Say
        </h2>
        {testimonials.length > 0 ? (
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-all duration-700 ease-in-out"
              style={{
                gap: '1rem',
                transform: `translateX(calc(-${currentIndex} * ((100% - ${itemsPerView === 2 ? '1rem' : '0rem'}) / ${itemsPerView} + ${'1rem'})))`,
              }}
            >
              {testimonials.map((testimonial, idx) => {
                const isVisible = idx >= currentIndex && idx < currentIndex + itemsPerView;
                return (
                  <div
                    key={`${testimonial.id}-${currentIndex}`}
                    className={`flex-shrink-0 w-full md:w-[calc((100%-1rem)/2)] bg-gray-50 rounded-xl shadow-lg p-6 transition-all ${
                      isVisible ? 'animate-fade-in' : ''
                    }`}
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
                );
              })}
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx * itemsPerView)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    Math.floor(currentIndex / itemsPerView) === idx
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading testimonials...</p>
        )}
      </div>
      <style jsx>{`
        @keyframes fadeInSlide {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
