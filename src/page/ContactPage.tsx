"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";

import { Globe3D, GlobeMarker } from "@/components/ui/3d-globe";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  MessageCircle,
  CheckCircle,
  XCircle,
  X,
} from "lucide-react";

// --- Sample markers for the globe ---
const contactMarkers: GlobeMarker[] = [
  {
    lat: 40.7128,
    lng: -74.006,
    src: "https://assets.aceternity.com/avatars/1.webp",
    label: "Cambodia",
  },
];

// --- Contact Info ---
const contact = [
  {
    icon: FaFacebook,
    link: "faljkfalfjlaks",
  },
  {
    icon: FaTelegram,
    link: "faljkfalfjlaks",
  },
  {
    icon: FaGithub,
    link: "faljkfalfjlaks",
  },
];
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "landphalll@gmail.com",
    href: "",
  },
  {
    icon: MapPin,
    label: "Location",
    value:
      "Street 378, Phum 7, Sangkat Boeung Kak II, Khan Toul Kork, Phnom Penh, Cambodia",
    href: "",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+885 962657233",
    href: "tel:+962657233",
  },
];

// --- Main Component ---
export default function ContactPage() {
  const [hoveredMarker, setHoveredMarker] = useState<GlobeMarker | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    message: string;
  }>({
    isOpen: false,
    type: "success",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send data to Telegram API
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setModalState({
          isOpen: true,
          type: "success",
          message:
            "Your message has been sent successfully! I'll get back to you soon. ",
        });
      } else {
        setModalState({
          isOpen: true,
          type: "error",
          message:
            "Failed to send message. Please try again or contact me directly.",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setModalState({
        isOpen: true,
        type: "error",
        message:
          "An error occurred. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-12 transition-colors duration-300"
    >
      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-white">
            Get in Touch
          </h1>
          <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto mt-3" />
          <p className="text-gray-500 dark:text-gray-400 text-base mt-3 max-w-md mx-auto">
            Have a project in mind? Let&apos;s connect and bring your ideas to
            life.
          </p>
        </motion.div>

        {/* Globe + Contact Info */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Globe - spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60 bg-gray-50/30 dark:bg-gray-800/30">
              <Globe3D
                markers={contactMarkers}
                config={{
                  atmosphereColor: "#4da6ff",
                  atmosphereIntensity: 0.5,
                  bumpScale: 1,
                  autoRotateSpeed: 0.3,
                  enableZoom: false,
                  enablePan: false,
                  showAtmosphere: true,
                  atmosphereBlur: 3,
                }}
                onMarkerHover={(marker) => setHoveredMarker(marker || null)}
                className="h-[450px] w-full"
              />

              {/* Hover label */}
              {hoveredMarker && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 dark:bg-white/90 backdrop-blur-sm text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium"
                >
                  {hoveredMarker.label}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Info - 1 column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="min-w-0 flex flex-col justify-center space-y-6"
          >
            <div className="space-y-3">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 group p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                      <item.icon
                        size={18}
                        className="text-gray-600 dark:text-gray-400"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {item.label}
                      </p>
                      <p className="break-words text-sm font-medium text-gray-900 dark:text-white">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                Connect Online
              </h3>
              <div className="flex gap-4">
                {contact.map(({ icon: Icon, link }, index) => (
                  <a key={index} href={link}>
                    <Icon className="text-2xl" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="border border-gray-200/60 dark:border-gray-700/60 rounded-2xl p-6 md:p-8 bg-white dark:bg-gray-800/30">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle
                size={20}
                className="text-gray-400 dark:text-gray-500"
              />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="group w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Available for freelance projects, collaborations, and coffee chats
          </p>
        </motion.div>
      </div>

      {/* Success/Error Modal */}
      <AnimatePresence>
        {modalState.isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <X size={20} className="text-gray-500 dark:text-gray-400" />
                </button>

                {/* Content */}
                <div className="p-6 pt-8">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div
                      className={`
                      w-16 h-16 rounded-full flex items-center justify-center mb-4
                      ${
                        modalState.type === "success"
                          ? "bg-green-100 dark:bg-green-900/30"
                          : "bg-red-100 dark:bg-red-900/30"
                      }
                    `}
                    >
                      {modalState.type === "success" ? (
                        <CheckCircle
                          size={32}
                          className="text-green-600 dark:text-green-400"
                        />
                      ) : (
                        <XCircle
                          size={32}
                          className="text-red-600 dark:text-red-400"
                        />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {modalState.type === "success"
                        ? "Message Sent! "
                        : "Oops! Something went wrong"}
                    </h3>

                    {/* Message */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {modalState.message}
                    </p>

                    {/* Action button */}
                    <button
                      onClick={closeModal}
                      className={`
                        mt-6 px-6 py-2.5 rounded-lg font-medium transition-colors w-full
                        ${
                          modalState.type === "success"
                            ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                            : "bg-red-600 hover:bg-red-700 text-white"
                        }
                      `}
                    >
                      {modalState.type === "success" ? "Great!" : "Try Again"}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
