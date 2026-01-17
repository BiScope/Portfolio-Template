"use client";

import Link from "next/link";
import { Code2, Palette, Smartphone } from "lucide-react";

const services = [
  {
    id: "website",
    title: "Web Site",
    icon: Code2,
    intro: "Professional website development services tailored to your business needs. From responsive design to full-stack applications, I deliver modern, scalable web solutions that drive results.",
    imagePlaceholder: "🌐",
  },
  {
    id: "web-design",
    title: "Web Design",
    icon: Palette,
    intro: "Creative and user-centric web design that captures your brand identity. I craft intuitive interfaces and engaging user experiences that convert visitors into customers.",
    imagePlaceholder: "🎨",
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: Smartphone,
    intro: "Native and cross-platform mobile application development. I build performant, feature-rich mobile apps for iOS and Android that provide seamless user experiences.",
    imagePlaceholder: "📱",
  },
];

export default function ServiceSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-slate-900 mb-16 uppercase">
          My Service
        </h1>
        <div className="space-y-32">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={service.id}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {service.intro}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/portfolio?category=${service.title === 'Web Site' ? 'Website' : service.title}`}
                    className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl uppercase tracking-wide"
                  >
                    View my work
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors uppercase tracking-wide"
                  >
                    Request a demo
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-9xl">{service.imagePlaceholder}</div>
                  {/* You can replace this with an actual image */}
                  {/* {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  )} */}
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
