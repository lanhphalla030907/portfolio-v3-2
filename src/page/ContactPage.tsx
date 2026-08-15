"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  MessageCircle,
  CheckCircle,
  XCircle,
  X,
  Send,
  User,
  AtSign,
} from "lucide-react";

// --- Contact Info ---
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "landphalll@gmail.com",
    href: "mailto:landphalll@gmail.com",
    description: "Send me an email anytime",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Phnom Penh, Cambodia",
    href: "",
    description: "Available for remote & local work",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+885 962657233",
    href: "tel:+962657233",
    description: "Available 9:00 AM - 6:00 PM",
  },
];

const socialLinks = [
  {
    icon: FaFacebook,
    href: "https://facebook.com/yourusername",
    label: "Facebook",
    color: "hover:text-blue-600",
  },
  {
    icon: FaTelegram,
    href: "https://t.me/yourusername",
    label: "Telegram",
    color: "hover:text-sky-500",
  },
  {
    icon: FaGithub,
    href: "https://github.com/yourusername",
    label: "GitHub",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
];

// --- Main Component ---
export default function ContactPage() {
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
            "Your message has been sent successfully! I'll get back to you soon.",
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
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 mb-4">
            <span className="size-1.5 rounded-full bg-indigo-500 shadow-[0_0_12px_2px_rgba(99,102,241,.45)]" />
            Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h1>
          <div className="w-12 h-0.5 bg-zinc-300 dark:bg-zinc-700 mx-auto mt-3" />
          <p className="text-zinc-500 dark:text-zinc-400 text-base mt-4 max-w-md mx-auto">
            Have a project in mind? Let&apos;s connect and bring your ideas to
            life.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl border border-zinc-200/70 bg-white/50 backdrop-blur-sm hover:border-zinc-400/50 dark:border-zinc-800/70 dark:bg-zinc-900/30 dark:hover:border-zinc-600/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-zinc-900 dark:text-white">
                  {item.label}
                </h3>

                <p className="mt-1 text-base font-medium text-zinc-700 dark:text-zinc-300">
                  {item.value}
                </p>

                {item.description && (
                  <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form & Social Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="border border-zinc-200/70 dark:border-zinc-800/70 rounded-2xl p-6 md:p-8 bg-white/50 dark:bg-zinc-900/30 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle
                  size={20}
                  className="text-zinc-500 dark:text-zinc-400"
                />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      <User size={14} className="inline mr-1" />
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400/50 focus:border-zinc-400 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      <AtSign size={14} className="inline mr-1" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400/50 focus:border-zinc-400 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400/50 focus:border-zinc-400 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                      <Send
                        size={16}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Social Section - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="border border-zinc-200/70 dark:border-zinc-800/70 rounded-2xl p-6 md:p-8 bg-white/50 dark:bg-zinc-900/30 backdrop-blur-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  Connect Online
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                  Find me on social media
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 p-4 rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white dark:bg-zinc-900/30 transition-all hover:border-zinc-400/50 hover:shadow-lg ${social.color}`}
                    >
                      <social.icon
                        size={24}
                        className="text-zinc-600 dark:text-zinc-400"
                      />
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Badge */}
              <div className="mt-6 p-4 rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/50 dark:bg-zinc-900/30">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Available for work
                  </span>
                </div>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  I'm currently open to new opportunities and collaborations
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            📬 Available for freelance projects, collaborations, and coffee
            chats
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
                className="relative max-w-md w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <X size={20} className="text-zinc-500 dark:text-zinc-400" />
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
                          ? "bg-emerald-100 dark:bg-emerald-900/30"
                          : "bg-red-100 dark:bg-red-900/30"
                      }
                    `}
                    >
                      {modalState.type === "success" ? (
                        <CheckCircle
                          size={32}
                          className="text-emerald-600 dark:text-emerald-400"
                        />
                      ) : (
                        <XCircle
                          size={32}
                          className="text-red-600 dark:text-red-400"
                        />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                      {modalState.type === "success"
                        ? "Message Sent! 🎉"
                        : "Oops! Something went wrong"}
                    </h3>

                    {/* Message */}
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                      {modalState.message}
                    </p>

                    {/* Action button */}
                    <button
                      onClick={closeModal}
                      className={`
                        mt-6 px-6 py-2.5 rounded-xl font-medium transition-colors w-full
                        ${
                          modalState.type === "success"
                            ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100"
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
