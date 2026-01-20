"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Websites",
    image: "/assets/home/web.jpg",
    href: "/portfolio?category=Website",
  },
  {
    title: "Web Design",
    image: "/assets/home/design.jpg",
    href: "/portfolio?category=Web Design",
  },
  {
    title: "Mobile",
    image: "/assets/home/mobile.jpg",
    href: "/portfolio?category=Mobile",
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
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-sm bg-white shadow-lg hover:shadow-2xl transition-all duration"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:opacity-70 transition-all duration-300"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-gray-700">
                    {service.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
