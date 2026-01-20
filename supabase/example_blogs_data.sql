-- Example Blogs Data for Portfolio Website
-- Run this SQL in your Supabase SQL Editor after creating the schema

INSERT INTO blogs (title, description, keywords, image_url, url, platform, written_by, published_at, order_index) VALUES
(
  'You Should Be Taking Advantage of AI During Your Job Search',
  'Familiarizing yourself with artificial intelligence (AI) technology is no longer a luxury—it''s a necessity. As AI becomes a standard tool across industries, job seekers who understand and use AI will stand out from the competition. The good news is that you don''t have to be a tech genius to benefit from AI; it''s about leveraging the technology to enhance your existing skills. Oftentimes, it helps to hear how other people are using technology in their everyday lives to learn how we can also utilize it effectively.',
  ARRAY['linkedin', 'job-search', 'ai'],
  NULL,
  'https://www.linkedin.com/posts/your-username_ai-jobsearch-career-activity-1234567890',
  'LinkedIn',
  'Written by me',
  '2024-01-15 10:00:00+00',
  1
),
(
  'The Power of Git: A Must-Have Tool for Every Developer!',
  'In today''s fast-paced development world, Git has become a game-changer for developers and teams alike. But why is Git such a vital tool? Let''s break it down: Version Control With Git, you can track changes in your codebase. Ever made a mistake in your code and wished you could go back to a previous version? With Git, you can! It allows you to revert to earlier versions of your code without losing any progress. Collaboration Whether you''re working solo or on a team, Git enables smooth collaboration...',
  ARRAY['version-control', 'collaboration', 'git', 'programming'],
  NULL,
  'https://medium.com/@yourusername/the-power-of-git',
  'Medium',
  'Written by me',
  '2024-02-20 14:30:00+00',
  2
),
(
  'Test-Driven Development with JavaScript',
  'One of the key Extreme Programming (XP) engineering practices is test-driven development (TDD), usually expressed as repeatedly following this simple, three-step process: Red—write a failing test that describes the behavior you want; Green—write the simplest possible code to make the test pass; and Refactor—clean up your code without breaking the tests. I was recently asked if I knew of a good TDD intro for people who were comfortable with JavaScript but hadn''t done much testing, so I decided to create this comprehensive guide.',
  ARRAY['tdd', 'javascript', 'technology', 'software-development'],
  NULL,
  'https://dev.to/yourusername/test-driven-development-with-javascript',
  'Dev.to',
  'Written by me',
  '2024-03-10 09:15:00+00',
  3
),
(
  'BI Before AI: Going Slow to Go Fast',
  'In the current tech environment, companies are racing to implement Artificial Intelligence features (whether users actually want them is a topic for another article), often overlooking a crucial step: establishing a solid Business Intelligence (BI)/Data Analytics foundation. This approach is misguided. Remember Moneyball? The Oakland A''s prioritized statistics over star players, winning 20 straight and changing the game and business of baseball in the process. That''s the key here: prioritize data...',
  ARRAY['technology', 'artificial-intelligence', 'business-intelligence', 'software-development'],
  NULL,
  'https://www.linkedin.com/posts/your-username_bi-ai-data-activity-1234567891',
  'LinkedIn',
  'Written by me',
  '2024-04-05 11:20:00+00',
  4
),
(
  'Top 15 Emerging eCommerce Technologies for 2024, Applications and Use Cases',
  'With an expected revenue of $4 trillion and a growth rate of nearly 10% by 2029, the eCommerce market has significant growth potential. However, as shown in the statistics, a few businesses dominate the eCommerce sector. For other mid-market and enterprise companies to compete with these tech and retail giants, they should embrace digital transformation and smart investments to: Lower costs, Increase customer satisfaction, And boost profitability. To help eCommerce businesses navigate this landscape, here are the top 15 emerging technologies...',
  ARRAY['analytics', 'ecommerce'],
  NULL,
  'https://medium.com/@yourusername/top-15-emerging-ecommerce-technologies',
  'Medium',
  'Written by me',
  '2024-05-12 16:45:00+00',
  5
),
(
  '10 Best AI Tools for 2024',
  'In today''s dynamic professional environment, LinkedIn is essential for businesses, job seekers, and professionals looking to build their brand, network, and discover new opportunities. With over 1 billion users, LinkedIn is more than a job site—it''s a bustling marketplace for ideas, talent, and growth. Yet, navigating its vast landscape can be overwhelming. That''s where Artificial Intelligence (AI) tools come in, revolutionizing the way we engage, connect, and thrive on LinkedIn. AI tools are transforming how professionals optimize their profiles, create content, and network effectively.',
  ARRAY['tools', 'artificial-intelligence', 'linkedin'],
  NULL,
  'https://www.linkedin.com/posts/your-username_ai-tools-linkedin-activity-1234567892',
  'LinkedIn',
  'Written by me',
  '2024-06-18 13:00:00+00',
  6
),
(
  'Optimizing your AWS Infrastructure for Sustainability: Networking',
  'When you make your applications available to more customers, the packets that travel across the network will increase. Similarly, the larger the size of data, as well as the more distance a packet has to travel, the more resources are required to transmit it. With growing number of application users, optimizing network traffic can ensure that network resource consumption is not growing linearly. The recommendations in the following sections will help you use your resources more efficiently for transmission and reduce your carbon footprint.',
  ARRAY['aws', 'infrastructure'],
  NULL,
  'https://dev.to/yourusername/optimizing-aws-infrastructure',
  'Dev.to',
  'Written by me',
  '2024-07-22 10:30:00+00',
  7
),
(
  'Is There A Developer Shortage? Yes, But The Problem Is More Complicated Than It Looks',
  'When companies have software engineering positions that go unfilled for months, the problem can seem obvious: There are just not enough developers looking for jobs. According to U.S. Labor statistics, as of December 2020, the global talent shortage amounted to 40 million skilled workers worldwide. By 2030, the global talent shortage is expected to reach 85.2 million. Companies worldwide risk losing $8.4 trillion in revenue because of the lack of skilled talent. The reality, though, is more complicated than it appears...',
  ARRAY['developer', 'surveys'],
  NULL,
  'https://medium.com/@yourusername/developer-shortage-analysis',
  'Medium',
  'Written by me',
  '2024-08-15 15:20:00+00',
  8
),
(
  'The Rise of GenAI in Web Development: Trends and Innovations',
  'The web development industry is undergoing a major transformation with the rapid advancements in Generative AI (GenAI). This groundbreaking technology is not just a small improvement—it''s revolutionizing how websites are created, designed, and managed. GenAI is becoming an essential tool, offering remarkable capabilities and efficiencies in our quest for digital excellence. Key Trends in GenAI for Web Development: Automated Code Generation: Innovative tools now enable developers to produce code faster and more efficiently. Design Assistance: AI-powered design tools help create stunning interfaces...',
  ARRAY['genai', 'artificial-intelligence', 'web-development'],
  NULL,
  'https://www.linkedin.com/posts/your-username_genai-webdev-ai-activity-1234567893',
  'LinkedIn',
  'Written by me',
  '2024-09-10 12:00:00+00',
  9
),
(
  '⚡ Essential APIs Guide for Full Stack Developers ⚡',
  'HTTP Verbs GET: Retrieve data from the server POST: Send data to the server to create a resource PUT: Send data to the server to update a resource PATCH: Send data to the server to update a resource partially DELETE: Delete a resource from the server TRACE: Returns the full HTTP request received by the server for debugging and diagnostic purposes OPTIONS: Returns the HTTP methods supported by the server for the requested URL CONNECT: Converts the connection to a transparent TCP/IP tunnel...',
  ARRAY['development', 'full-stack', 'api'],
  NULL,
  'https://dev.to/yourusername/essential-apis-guide',
  'Dev.to',
  'Written by me',
  '2024-10-05 09:45:00+00',
  10
);
