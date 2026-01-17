-- Example Skills Data for Portfolio Website
-- Run this SQL in your Supabase SQL Editor after creating the schema
-- Make sure to run add_skill_url_column.sql first to add the URL column

-- Frontend Skills
INSERT INTO skills (category, name, icon, url, order_index) VALUES
('Frontend', 'React', '⚛️', 'https://react.dev', 1),
('Frontend', 'Next.js', '▲', 'https://nextjs.org', 2),
('Frontend', 'Angular', '🅰️', 'https://angular.io', 3),
('Frontend', 'Vue.js', '🟢', 'https://vuejs.org', 4),
('Frontend', 'TypeScript', '📘', 'https://www.typescriptlang.org', 5),
('Frontend', 'JavaScript', '📜', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', 6),
('Frontend', 'HTML5', '🌐', 'https://developer.mozilla.org/en-US/docs/Web/HTML', 7),
('Frontend', 'CSS3', '🎨', 'https://developer.mozilla.org/en-US/docs/Web/CSS', 8),
('Frontend', 'Tailwind CSS', '💨', 'https://tailwindcss.com', 9),
('Frontend', 'Material-UI', '📦', 'https://mui.com', 10),
('Frontend', 'Redux', '🔄', 'https://redux.js.org', 11),
('Frontend', 'Svelte', '🔥', 'https://svelte.dev', 12);

-- Backend Skills
INSERT INTO skills (category, name, icon, url, order_index) VALUES
('Backend', 'Node.js', '🟢', 'https://nodejs.org', 1),
('Backend', 'Python', '🐍', 'https://www.python.org', 2),
('Backend', 'Java', '☕', 'https://www.java.com', 3),
('Backend', 'Ruby on Rails', '💎', 'https://rubyonrails.org', 4),
('Backend', '.NET', '🔷', 'https://dotnet.microsoft.com', 5),
('Backend', 'PHP', '🐘', 'https://www.php.net', 6),
('Backend', 'Go', '🐹', 'https://go.dev', 7),
('Backend', 'Express.js', '🚂', 'https://expressjs.com', 8),
('Backend', 'Django', '🎸', 'https://www.djangoproject.com', 9),
('Backend', 'Flask', '🧪', 'https://flask.palletsprojects.com', 10),
('Backend', 'PostgreSQL', '🐘', 'https://www.postgresql.org', 11),
('Backend', 'MongoDB', '🍃', 'https://www.mongodb.com', 12),
('Backend', 'MySQL', '🗄️', 'https://www.mysql.com', 13),
('Backend', 'Redis', '⚡', 'https://redis.io', 14),
('Backend', 'GraphQL', '🔷', 'https://graphql.org', 15);

-- DevOps Skills
INSERT INTO skills (category, name, icon, url, order_index) VALUES
('DevOps', 'AWS', '☁️', 'https://aws.amazon.com', 1),
('DevOps', 'Azure', '🔷', 'https://azure.microsoft.com', 2),
('DevOps', 'Google Cloud', '☁️', 'https://cloud.google.com', 3),
('DevOps', 'Docker', '🐳', 'https://www.docker.com', 4),
('DevOps', 'Kubernetes', '⚓', 'https://kubernetes.io', 5),
('DevOps', 'Jenkins', '🤖', 'https://www.jenkins.io', 6),
('DevOps', 'GitHub Actions', '🔄', 'https://github.com/features/actions', 7),
('DevOps', 'CI/CD', '⚙️', 'https://www.redhat.com/en/topics/devops/what-is-ci-cd', 8),
('DevOps', 'Terraform', '🏗️', 'https://www.terraform.io', 9),
('DevOps', 'Ansible', '🤖', 'https://www.ansible.com', 10),
('DevOps', 'Nginx', '🌐', 'https://www.nginx.com', 11),
('DevOps', 'Linux', '🐧', 'https://www.linux.org', 12),
('DevOps', 'Firebase', '🔥', 'https://firebase.google.com', 13),
('DevOps', 'Git', '📚', 'https://git-scm.com', 14),
('DevOps', 'Bash', '💻', 'https://www.gnu.org/software/bash', 15);
