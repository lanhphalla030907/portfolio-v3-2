"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  ChevronDown, 
  Award, 
  Briefcase, 
  Code2, 
  Coffee,
  Download,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
  Zap,
  GraduationCap,
  ExternalLink,
  Clock,
  Calendar,
  CheckCircle2
} from "lucide-react";

// --- Types ---
interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
}

// --- Data ---
const timelineData: TimelineItem[] = [
  {
    year: "2024",
    title: "Full Stack Developer",
    description: "Building modern web applications with Next.js, React, and Tailwind CSS",
    icon: <Code2 size={18} />,
  },
  {
    year: "2023",
    title: "Teaching Coding",
    description: "Mentoring students in web development and programming fundamentals",
    icon: <GraduationCap size={18} />,
  },
  {
    year: "2022",
    title: "Freelance Developer",
    description: "Delivering custom web solutions for clients across various industries",
    icon: <Briefcase size={18} />,
  },
  {
    year: "2021",
    title: "Started Coding",
    description: "Began my journey into web development and software engineering",
    icon: <Coffee size={18} />,
  },
];

const skillsData: Skill[] = [
  { name: "React & Next.js", level: 90, icon: "⚛️" },
  { name: "TypeScript", level: 85, icon: "📘" },
  { name: "Tailwind CSS", level: 90, icon: "🎨" },
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "UI/UX Design", level: 75, icon: "✨" },
  { name: "Database Design", level: 70, icon: "🗄️" },
];

const certificatesData: Certificate[] = [
  {
    name: "Full Stack Web Development",
    issuer: "Meta",
    date: "2023",
    icon: <Award size={18} />,
  },
  {
    name: "Advanced React & Next.js",
    issuer: "Vercel",
    date: "2024",
    icon: <Star size={18} />,
  },
  {
    name: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "2023",
    icon: <Zap size={18} />,
  },
];

// --- Components ---

// Scroll Indicator
const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
    >
      <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </motion.div>
  );
};

// Photo with Zoom Effect
const PhotoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative w-full max-w-md mx-auto mb-12"
    >
      <div 
        className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-xl"
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <Image
          src="/placeholder-avatar.jpg"
          alt="Profile"
          fill
          className="object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isZoomed ? 1 : 0 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <span className="text-white text-sm font-medium">Click to zoom out</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Story Section with Reveal
const StorySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="max-w-2xl mx-auto text-center mb-16"
    >
      <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
        My Story
      </h2>
      <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-700 mx-auto mb-4" />
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        I'm a passionate developer who believes in the power of code to create meaningful change. 
        From teaching coding to building full-stack applications, I'm dedicated to crafting 
        solutions that make a difference.
      </p>
    </motion.div>
  );
};

// Timeline
const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto mb-16"
    >
      <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-8">
        Journey
      </h3>
      <div className="space-y-4">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="shrink-0 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
              {item.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                  {item.year}
                </span>
                <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.title}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Skills with Animation
const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto mb-16"
    >
      <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-6">
        Skills
      </h3>
      <div className="space-y-4">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {skill.icon} {skill.name}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Certificates
const Certificates = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto mb-16"
    >
      <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-6">
        Certificates
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {certificatesData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-4 text-center rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
              {cert.icon}
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {cert.name}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {cert.issuer} • {cert.date}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Resume Download
const Resume = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto mb-16 text-center"
    >
      <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
        <Download size={16} />
        <span>Download Resume</span>
      </button>
    </motion.div>
  );
};

// Contact Section
const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactItems = [
    { icon: Mail, label: "Email", value: "hello@example.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center mb-6">
        Get in Touch
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="p-4 text-center rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50"
          >
            <item.icon size={18} className="mx-auto mb-1.5 text-gray-400 dark:text-gray-500" />
            <p className="text-xs text-gray-400 dark:text-gray-500">{item.label}</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// --- Main Component ---
export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-gray-50 transition-colors duration-300 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200/50 dark:bg-gray-800/50 text-xs font-medium text-gray-600 dark:text-gray-400 mb-4">
            <span>About Me</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 dark:text-white mb-3">
            Hi, I'm <span className="font-medium">Alex</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base max-w-md mx-auto">
            Developer • Teacher • Creator
          </p>
        </motion.div>
        <ScrollIndicator />
      </section>

      {/* Content Sections */}
      <div className="site-container pb-16">
        {/* Photo Zoom */}
        <PhotoSection />

        {/* Story */}
        <StorySection />

        {/* Timeline */}
        <Timeline />

        {/* Skills */}
        <Skills />

        {/* Certificates */}
        <Certificates />

        {/* Resume */}
        <Resume />

        {/* Contact */}
        <ContactSection />
      </div>
    </div>
  );
}
