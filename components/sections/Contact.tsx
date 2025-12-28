"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Contact() {
  const { ref, isInView } = useScrollAnimation({ amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      Icon: Mail,
      label: "Email",
      value: "nguyenminhdat03112003@gmail.com",
      href: "mailto:nguyenminhdat03112003@gmail.com",
    },
    {
      Icon: Phone,
      label: "Phone",
      value: "+84 779 179 973",
      href: "tel:+84779179973",
    },
    {
      Icon: MapPin,
      label: "Location",
      value: "Ho Chi Minh City, Vietnam",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text-2">Get In Touch</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s work together to bring your ideas to
              life!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass dark:glass-dark rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  I&apos;m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>

                <div className="space-y-4 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-lg glass dark:glass-dark hover:bg-white/10 transition-colors group"
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-black/20 to-gray-600/20 group-hover:from-black/30 group-hover:to-gray-600/30 transition-all">
                        <info.Icon className="w-5 h-5 text-black dark:text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {info.label}
                        </div>
                        <div className="text-gray-800 dark:text-gray-100 font-medium">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {[
                    { Icon: Github, href: socialLinks.github, label: "GitHub" },
                    {
                      Icon: Linkedin,
                      href: socialLinks.linkedin,
                      label: "LinkedIn",
                    },
                    { Icon: Mail, href: socialLinks.email, label: "Email" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-xl glass dark:glass-dark hover:bg-white/10 transition-colors"
                    >
                      <social.Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="glass dark:glass-dark rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 rounded-lg glass dark:glass-dark border border-white/20 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-gray-800 dark:text-gray-100 transition-all"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 rounded-lg glass dark:glass-dark border border-white/20 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white text-gray-800 dark:text-gray-100 transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    whileFocus={{ scale: 1.02 }}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg glass dark:glass-dark border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 dark:text-gray-100 resize-none transition-all"
                    placeholder="Your message..."
                    required
                  />
                </motion.div>
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">Message sent successfully! I&apos;ll get back to you soon.</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">{errorMessage || 'Failed to send message. Please try again.'}</p>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-black to-gray-700 hover:from-gray-800 hover:to-black text-white dark:text-black dark:bg-gradient-to-r dark:from-white dark:to-gray-300 dark:hover:from-gray-200 dark:hover:to-white border-0 shadow-lg shadow-black/50 dark:shadow-white/20 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/20 group-hover:to-white/20 dark:group-hover:from-black/20 dark:group-hover:to-black/20 transition-all duration-300"
                      initial={false}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white dark:border-gray-900 border-t-transparent rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <motion.span
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Send className="w-5 h-5 ml-2" />
                          </motion.span>
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
