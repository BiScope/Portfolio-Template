"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

interface ContactInfo {
  id: string;
  type: string;
  label: string;
  value: string;
  icon: string | null;
}

export default function Footer() {
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);

  useEffect(() => {
    async function fetchContactInfo() {
      const { data } = await supabase
        .from("contact_info")
        .select("*")
        .order("order_index");
      
      if (data) {
        setContactInfo(data);
      }
    }
    fetchContactInfo();
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="w-5 h-5" />;
      case "phone":
        return <Phone className="w-5 h-5" />;
      case "location":
        return <MapPin className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const defaultContactInfo = [
    { type: "email", label: "Email", value: "contact@example.com" },
    { type: "phone", label: "Phone", value: "+1 (555) 123-4567" },
    { type: "location", label: "Location", value: "San Francisco, CA" },
  ];

  const displayContactInfo = contactInfo.length > 0 ? contactInfo : defaultContactInfo;

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {displayContactInfo.map((info, idx) => (
                <div key={info.id || idx} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 text-blue-400">
                    {getIcon(info.type)}
                  </div>
                  {info.type === "email" ? (
                    <a href={`mailto:${info.value}`} className="text-white hover:text-blue-400 transition-colors break-all">
                      {info.value}
                    </a>
                  ) : info.type === "phone" ? (
                    <a href={`tel:${info.value}`} className="text-white hover:text-blue-400 transition-colors">
                      {info.value}
                    </a>
                  ) : info.type === "location" ? (
                    <p className="text-white">{info.value}</p>
                  ) : (
                    <a href={info.value} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors break-all">
                      {info.value}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.6077135767265!2d-97.74305782346109!3d30.284652974804795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59b2584cfb7%3A0x8131ee4f174a21de!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-lg"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-400">
            © 2024 Portfolio - Senior/Lead Software Engineer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
