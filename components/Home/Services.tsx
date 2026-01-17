"use client";

import Link from "next/link";
import { Code2, Palette, Smartphone } from "lucide-react";

const services = [
  {
    title: "Websites",
    icon: Code2,
    href: "/portfolio?category=Website",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Web Design",
    icon: Palette,
    href: "/portfolio?category=Web Design",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Mobile",
    icon: Smartphone,
    href: "/portfolio?category=Mobile",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-slate-900 mb-12 uppercase">
          Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="relative p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${service.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                    Professional {service.title.toLowerCase()} development
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
