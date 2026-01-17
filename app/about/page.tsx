import AboutSections from "@/components/About/AboutSections";
import Recommendations from "@/components/About/Recommendations";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-slate-900 text-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">ABOUT ME</h1>
        </div>
      </div>
      <AboutSections />
      <Recommendations />
    </div>
  );
}
