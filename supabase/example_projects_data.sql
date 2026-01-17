-- Example Projects Data for Portfolio Website
-- Run this SQL in your Supabase SQL Editor after creating the schema

INSERT INTO projects (title, category, company, intro, description, image_url, order_index) VALUES
(
  'E-Commerce Platform',
  'Website',
  'TechCorp',
  'A modern e-commerce solution with full shopping cart, payment integration, and inventory management.',
  'This comprehensive e-commerce platform was built using React, Next.js, and Node.js. The platform features a complete shopping experience with user authentication, product catalog with advanced filtering, shopping cart management, secure payment processing via Stripe, order tracking, and an admin dashboard for inventory management. The application is fully responsive and optimized for performance with server-side rendering and code splitting.',
  NULL,
  1
),
(
  'Healthcare Management System',
  'Website',
  'MedTech Solutions',
  'Enterprise-level healthcare management system for patient records, appointments, and billing.',
  'A full-stack healthcare management system designed to streamline hospital operations. Built with React and Python Django, it includes patient record management, appointment scheduling, billing and invoicing, medical history tracking, and reporting tools. The system adheres to HIPAA compliance standards with robust security measures including encryption at rest and in transit.',
  NULL,
  2
),
(
  'Mobile Banking App',
  'Mobile',
  'FinTech Global',
  'Secure mobile banking application with biometric authentication and real-time transaction processing.',
  'A native mobile banking application developed for both iOS and Android using React Native. The app provides secure account management, real-time transaction processing, bill payments, fund transfers, investment tracking, and biometric authentication (fingerprint and face ID). The application includes advanced security features such as two-factor authentication and transaction monitoring.',
  NULL,
  3
),
(
  'Real Estate Listing Platform',
  'Website',
  'RealEstate Pro',
  'Interactive property listing platform with virtual tours, map integration, and advanced search features.',
  'An advanced real estate platform built with Next.js and TypeScript. Features include property listings with high-resolution images and virtual tours, interactive maps showing property locations, advanced search and filtering capabilities, saved searches and favorites, agent profiles and contact forms, and mortgage calculator. The platform integrates with Google Maps API and includes SEO optimization for better discoverability.',
  NULL,
  4
),
(
  'Food Delivery Mobile App',
  'Mobile',
  'Foodie Express',
  'On-demand food delivery app with real-time order tracking and multiple restaurant integration.',
  'A comprehensive food delivery mobile application developed with React Native. The app features restaurant listings with menus and reviews, real-time order tracking, multiple payment options (credit card, PayPal, Apple Pay), push notifications for order updates, loyalty program and rewards, and delivery driver tracking. The backend is built with Node.js and uses WebSocket for real-time updates.',
  NULL,
  5
),
(
  'Portfolio Website Design',
  'Web Design',
  'Creative Agency',
  'Modern, responsive portfolio website design with custom animations and unique visual identity.',
  'A custom-designed portfolio website created using Figma and Adobe XD. The design features a unique visual identity with custom animations, responsive layouts for all devices, interactive UI elements, and a cohesive color scheme and typography. The design includes wireframes, mockups, and a complete style guide. The final implementation was done using React and Tailwind CSS.',
  NULL,
  6
),
(
  'Learning Management System',
  'Website',
  'EduTech Solutions',
  'Comprehensive online learning platform with video courses, quizzes, and progress tracking.',
  'A full-featured learning management system built with React, Node.js, and MongoDB. The platform includes course creation and management, video streaming with progress tracking, interactive quizzes and assessments, student progress analytics, certificate generation, discussion forums, and payment integration. The system supports multiple instructors and can handle thousands of concurrent students.',
  NULL,
  7
),
(
  'Fitness Tracking Mobile App',
  'Mobile',
  'FitLife Technologies',
  'Personal fitness tracking app with workout plans, nutrition tracking, and social features.',
  'A native mobile fitness application built with React Native for iOS and Android. Features include personalized workout plans with video demonstrations, nutrition tracking with barcode scanning, progress tracking with charts and statistics, social features for sharing achievements, integration with wearable devices (Fitbit, Apple Watch), and meal planning with recipe suggestions. The app syncs data across devices using cloud storage.',
  NULL,
  8
),
(
  'Corporate Website Redesign',
  'Web Design',
  'Business Corp',
  'Complete website redesign for corporate client with improved user experience and modern aesthetics.',
  'A complete website redesign project for a corporate client, focusing on modern aesthetics and improved user experience. The project involved user research and persona development, information architecture restructuring, responsive design for all devices, accessibility improvements (WCAG 2.1 compliant), performance optimization recommendations, and a comprehensive design system. The design was implemented using modern web technologies ensuring fast load times and excellent user experience.',
  NULL,
  9
),
(
  'Task Management Dashboard',
  'Website',
  'Productivity Inc',
  'Collaborative task management tool with real-time updates, team collaboration, and project tracking.',
  'A collaborative task management web application built with React, TypeScript, and Socket.io. The dashboard features real-time task updates across team members, project organization with boards and lists, team collaboration with comments and mentions, file attachments, deadline tracking with notifications, time tracking and reporting, and integrations with popular tools like Slack and Google Calendar. The application uses WebSocket for real-time synchronization.',
  NULL,
  10
);
