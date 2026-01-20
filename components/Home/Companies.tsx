"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { getCachedData, setCachedData } from "@/lib/cache";
import LoadingSpinner from "@/components/LoadingSpinner";

interface Company {
  id: string;
  name: string;
  logo_url: string | null;
  website_url: string | null;
}

export default function Companies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCompanies() {
      // Check cache first
      const cachedCompanies = getCachedData<Company[]>("companies");
      if (cachedCompanies) {
        setCompanies(cachedCompanies);
        setLoading(false);
        return;
      }

      // Fetch from Supabase
      const { data } = await supabase
        .from("companies")
        .select("*")
        .eq("is_active", true)
        .order("order_index");
      
      if (data) {
        setCompanies(data);
        setCachedData("companies", data);
      }
      setLoading(false);
    }
    fetchCompanies();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-slate-900 mb-12 uppercase">
            I Worked With
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
          I Worked With
        </h2>
        {companies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {companies.map((company) => {
              const handleClick = (e: React.MouseEvent) => {
                if (company.website_url) {
                  e.preventDefault();
                  window.open(company.website_url, '_blank', 'noopener,noreferrer');
                }
              };
              
                return (
                  <div
                    key={company.id}
                    onClick={company.website_url ? handleClick : undefined}
                    className={`w-64 h-40 bg-white rounded-lg overflow-hidden transition-all flex items-center justify-center mx-auto ${
                      company.website_url ? 'cursor-pointer hover:scale-105' : ''
                    }`}
                  >
                  {company.logo_url ? (
                    <img
                      src={company.logo_url}
                      alt={company.name}
                      className="w-full h-full object-contain p-3"
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-3">
                      <span className="text-sm font-semibold text-gray-700 text-center">
                        {company.name}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading companies...</p>
        )}
      </div>
    </section>
  );
}
