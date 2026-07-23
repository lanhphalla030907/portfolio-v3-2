"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { 

  Heart,
  Rocket,
  Coffee,
  ArrowUp,
  Mail,
  MapPin,
  Phone,
  Globe,
  Sparkles
} from "lucide-react";

export default function CreativeFooter() {
  const [year] = useState(new Date().getFullYear());
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Floating particles background
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

//   const socialLinks = [
//     { icon: Github, href: "https://github.com", label: "GitHub" },
//     { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
//     { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
//     { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
//     { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
//   ];

  const quickLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      
      {/* Animated Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-400/10 dark:to-purple-400/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl"
              >
                <Rocket size={20} className="text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
              Crafting digital experiences with passion and precision. Let's build something amazing together.
            </p>
            
            <motion.div 
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
              <span>Built with love and caffeine</span>
              <Coffee size={14} className="text-amber-600 dark:text-amber-400" />
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
            }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <motion.li key={link.label} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
            }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link.label} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li whileHover={{ x: 5 }}>
                <button
                  onClick={scrollToTop}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                >
                  Back to Top
                  <ArrowUp size={14} className="group-hover:translate-y-[-2px] transition-transform" />
                </button>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
            }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
              Connect
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-4">
              <motion.a
                href="mailto:landphalll@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                <Mail size={16} />
                <span>landphalll@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+885962657233"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                <Phone size={16} />
                <span>+885 962657233</span>
              </motion.a>
            </div>

            {/* Social Icons */}
            {/* <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="relative group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <div className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg">
                    <social.icon size={18} className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 blur-xl transition-all duration-300" />
                </motion.a>
              ))}
            </div> */}
          </motion.div>
        </div>

        {/* Divider with Animation */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.4 } },
          }}
          className="my-8 h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
        />

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
          }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {year} Your Name. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
            <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <span className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
            
            {/* Animated Status */}
            <motion.div
              className="flex items-center gap-2"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs">Available for work</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Sparkle Decoration */}
        <motion.div
          className="absolute top-1/4 right-8 opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Sparkles size={40} className="text-blue-500 dark:text-blue-400" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-8 opacity-20"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Globe size={35} className="text-purple-500 dark:text-purple-400" />
        </motion.div>
      </div>
    </footer>
  );
}