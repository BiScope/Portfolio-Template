"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";

interface ContactInfo {
  id: string;
  type: string;
  label: string;
  value: string;
  icon: string | null;
}

export default function ContactForm() {
  const router = useRouter();
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service_type: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([formData]);

      if (error) throw error;

      setSubmitted(true);
      setFormData({ name: "", email: "", service_type: "", message: "" });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleScheduleMeeting = () => {
    // In a real app, this could open a calendar link or a modal
    alert("Meeting scheduling feature coming soon!");
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="w-5 h-5" />;
      case "phone":
        return <Phone className="w-5 h-5" />;
      case "location":
        return <MapPin className="w-5 h-5" />;
      case "social":
        return <Linkedin className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const defaultContactInfo = [
    { type: "email", label: "Email", value: "contact@example.com" },
    { type: "phone", label: "Phone", value: "+1 (555) 123-4567" },
    { type: "location", label: "Location", value: "San Francisco, CA" },
  ];

  const displayContactInfo =
    contactInfo.length > 0 ? contactInfo : defaultContactInfo;

  const serviceTypes = [
    "Website Development",
    "Web Design",
    "Mobile App Development",
    "Other",
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-slate-900 mb-12 uppercase">
          Contact Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0">
          {/* Contact Info - Dark Panel */}
          <div className="bg-slate-800 text-white p-12 lg:rounded-l-xl shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact me directly!
            </p>
            <div className="space-y-6">
              {displayContactInfo.map((info, idx) => (
                <div key={info.id || idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                    {getIcon(info.type)}
                  </div>
                  <div>
                    {info.type === "email" ? (
                      <a
                        href={`mailto:${info.value}`}
                        className="text-white hover:text-blue-400 transition-colors break-all"
                      >
                        {info.value}
                      </a>
                    ) : info.type === "phone" ? (
                      <a
                        href={`tel:${info.value}`}
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form - White Panel */}
          <div className="bg-white p-12 lg:rounded-r-xl shadow-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 uppercase">
              Contact Me
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Looking to create something extraordinary? Just send me a message! I will get back to you within 24 hours.
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder=""
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder=""
                />
              </div>

              <div>
                <label
                  htmlFor="service_type"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  What kind of service do you want?
                </label>
                <select
                  id="service_type"
                  required
                  value={formData.service_type}
                  onChange={(e) =>
                    setFormData({ ...formData, service_type: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Text your message...
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
                >
                  {submitting ? "Submitting..." : "Submit Message"}
                </button>
                <button
                  type="button"
                  onClick={handleScheduleMeeting}
                  className="flex-1 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors uppercase tracking-wide"
                >
                  Schedule a Meeting
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
