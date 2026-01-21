"use client";

import Link from "next/link";
import { Code2, Palette, Smartphone } from "lucide-react";
import Image from "next/image";
const services = [
  {
    id: "website",
    title: "Web Site",
    img: "/assets/services/website.jpg",
    intro: "With a strong foundation in web development, I've specialized in full-stack technologies including React, Next.js, Node.js and Python. My expertise extends to database management with both SQL and NoSQL, ensuring optimized solutions. My commitment to delivering high-performance products swiftly sets me apart as an ideal choice for website development needs. I also have extensive experience in cloud computing platforms with AWS and MS Azure, enabling scalable and resilient DevOps solutions to the team.",
    imagePlaceholder: "🌐",
  },
  {
    id: "web-design",
    title: "Web Design",
    img: "/assets/services/design.png",
    intro: "My portfolio in web design spans various sectors, where I have transformed client visions into engaging, user-friendly web interfaces. I am proficient in various designing tools like Adobe XD, Figma and Axure, as well as project architecturing platforms such as Jira, ClickUp, Trello, etc. My proficiency in creating wireframes, mockups, and prototypes facilitates seamless collaboration with UX designers and developers, ensuring clear communication and project alignment throughout the design process.",
    imagePlaceholder: "🎨",
  },
  {
    id: "mobile",
    title: "Mobile",
    img: "/assets/services/mobile.png",
    intro: "I have engaged in several software development life cycles, encompassing both web and mobile platforms, with a specialized focus on Android and iOS and hybird mobile experience leveraged by React Native, demonstrating proficiency across various stages from ideation to deployment. My mobile development experience emphasizes performance optimization, ensuring smooth and responsive user experiences through efficient coding practices and thorough performance testing.",
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
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={service.id}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
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
                <div className="relative w-96 h-96 flex items-center justify-center overflow-hidden">
                  <div className="text-9xl">{service.imagePlaceholder}</div>
                  {/* You can replace this with an actual image */}
                  {service.img && (
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  )}
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
