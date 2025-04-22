'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      await emailjs.send(
        'service_72hxybg',
        'template_jgfgcq9',
        {
          user_name: form.user_name,
          user_email: form.user_email,
          subject: "New message from portfolio",
          message: form.message,
        },
        'F-NoV-nFVisKe3pkV'
      );
      setSuccess("Message sent successfully 🚀");
      setForm({ user_name: '', user_email: '', message: '' });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSuccess("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      id="contact"
      className="min-h-screen bg-[#222831] text-[#EEEEEE] scroll-mt-20"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
    >
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-6 text-[#00ADB5]">📩 Contact</h1>
        <p className="text-[#EEEEEE]/70 text-center mb-10">
          Have a project in mind or just want to say hi? Drop a message, and let's connect!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-[#393E46] p-8 rounded-2xl shadow-xl">
          {/* Name */}
          <div>
            <label htmlFor="user_name" className="block text-sm font-semibold text-[#EEEEEE]/80">
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={form.user_name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="mt-2 w-full rounded-xl bg-[#222831] text-[#EEEEEE] border border-[#2F343B] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="user_email" className="block text-sm font-semibold text-[#EEEEEE]/80">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={form.user_email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="mt-2 w-full rounded-xl bg-[#222831] text-[#EEEEEE] border border-[#2F343B] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-[#EEEEEE]/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
              className="mt-2 w-full rounded-xl bg-[#222831] text-[#EEEEEE] border border-[#2F343B] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#00ADB5] hover:bg-[#00a1aa] px-6 py-3 rounded-xl text-white font-semibold transition duration-200 shadow-md hover:shadow-lg"
          >
            {loading ? "Sending..." : "🚀 Send Message"}
          </button>

          {/* Feedback */}
          {success && (
            <p className="text-center text-sm mt-4" style={{ color: success.includes("successfully") ? '#00FFB3' : '#FF5252' }}>
              {success}
            </p>
          )}

          {/* Social Links */}
          <div className="flex justify-center items-center gap-10 mt-8">
            <a
              href="https://github.com/dushyantmak85"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:drop-shadow-[0_0_8px_#ffffff] flex items-center justify-center w-16 h-16"
            >
              <img
                src="/github-mark-white.png"
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/dushyant-makwana-21729b2bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:drop-shadow-[0_0_8px_#00aaff] flex items-center justify-center w-16 h-16"
            >
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-12 h-12 rounded-full"
              />
            </a>
            <a
              href="https://www.instagram.com/dushyantmak85/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:drop-shadow-[0_0_8px_#ff0080] flex items-center justify-center w-16 h-16"
            >
              <img
                src="/instagram.jpg"
                alt="Instagram"
                className="w-16 h-16 rounded-full"
              />
            </a>
          </div>
        </form>
      </main>
    </motion.div>
  );
}
