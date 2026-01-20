"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { getCachedData, setCachedData } from "@/lib/cache";
import LoadingSpinner from "@/components/LoadingSpinner";

interface Skill {
  id: string;
  category: string;
  name: string;
  logo_url: string | null;
  url: string | null;
}

// Common technology URLs mapping (fallback if URL not in database)
const getTechUrl = (name: string): string => {
  const urlMap: { [key: string]: string } = {
    'React': 'https://react.dev',
    'Next.js': 'https://nextjs.org',
    'Angular': 'https://angular.io',
    'Vue.js': 'https://vuejs.org',
    'TypeScript': 'https://www.typescriptlang.org',
    'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'HTML5': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    'CSS3': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    'Tailwind CSS': 'https://tailwindcss.com',
    'Material-UI': 'https://mui.com',
    'Redux': 'https://redux.js.org',
    'Svelte': 'https://svelte.dev',
    'Node.js': 'https://nodejs.org',
    'Python': 'https://www.python.org',
    'Java': 'https://www.java.com',
    'Ruby on Rails': 'https://rubyonrails.org',
    '.NET': 'https://dotnet.microsoft.com',
    'PHP': 'https://www.php.net',
    'Go': 'https://go.dev',
    'Express.js': 'https://expressjs.com',
    'Django': 'https://www.djangoproject.com',
    'Flask': 'https://flask.palletsprojects.com',
    'PostgreSQL': 'https://www.postgresql.org',
    'MongoDB': 'https://www.mongodb.com',
    'MySQL': 'https://www.mysql.com',
    'Redis': 'https://redis.io',
    'GraphQL': 'https://graphql.org',
    'AWS': 'https://aws.amazon.com',
    'Azure': 'https://azure.microsoft.com',
    'Google Cloud': 'https://cloud.google.com',
    'Docker': 'https://www.docker.com',
    'Kubernetes': 'https://kubernetes.io',
    'Jenkins': 'https://www.jenkins.io',
    'GitHub Actions': 'https://github.com/features/actions',
    'Terraform': 'https://www.terraform.io',
    'Ansible': 'https://www.ansible.com',
    'Nginx': 'https://www.nginx.com',
    'Linux': 'https://www.linux.org',
    'Firebase': 'https://firebase.google.com',
    'Git': 'https://git-scm.com',
    'Bash': 'https://www.gnu.org/software/bash',
  };
  return urlMap[name] || '#';
};

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkills() {
      // Check cache first
      const cachedSkills = getCachedData<Skill[]>("skills");
      if (cachedSkills) {
        setSkills(cachedSkills);
        setLoading(false);
        return;
      }

      // Fetch from Supabase
      const { data } = await supabase
        .from("skills")
        .select("*")
        .eq("is_active", true)
        .order("order_index");
      
      if (data) {
        setSkills(data);
        setCachedData("skills", data);
      }
      setLoading(false);
    }
    fetchSkills();
  }, []);

  const categories = ["Frontend", "Backend", "DevOps"];

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-slate-900 mb-12 uppercase">
            Top Skills
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
          Top Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            return (
              <div
                key={category}
                className="flex flex-col items-center"
              >
                <h3 className="text-3xl font-bold mb-8 text-center text-blue-900 uppercase">
                  {category}
                </h3>
                {categorySkills.length > 0 ? (
                  <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                    {categorySkills.slice(0, 6).map((skill) => {
                      const skillUrl = skill.url || getTechUrl(skill.name);
                      const handleClick = (e: React.MouseEvent) => {
                        if (skillUrl && skillUrl !== '#') {
                          e.preventDefault();
                          window.open(skillUrl, '_blank', 'noopener,noreferrer');
                        }
                      };
                      
                      return (
                        <div
                          key={skill.id}
                          onClick={skillUrl && skillUrl !== '#' ? handleClick : undefined}
                          className={`aspect-square bg-white rounded-full flex items-center justify-center p-4 transition-all overflow-hidden ${
                            skillUrl && skillUrl !== '#' 
                              ? 'cursor-pointer hover:scale-105' 
                              : ''
                          }`}
                        >
                          {skill.logo_url ? (
                            <img
                              src={skill.logo_url}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                              style={{ maxWidth: '100%', maxHeight: '100%' }}
                              onError={(e) => {
                                // Fallback to text if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent && !parent.querySelector('span')) {
                                  const fallback = document.createElement('span');
                                  fallback.className = 'text-xs font-medium text-gray-700 text-center';
                                  fallback.textContent = skill.name;
                                  parent.appendChild(fallback);
                                }
                              }}
                            />
                          ) : (
                            <span className="text-xs font-medium text-gray-700 text-center">
                              {skill.name}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">Loading...</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
