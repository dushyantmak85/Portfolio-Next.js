'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const Section = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.section>
    );
  };

  return (
    <div id="about" className="min-h-screen bg-transparent text-[#EEEEEE] scroll-mt-20">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-24 space-y-24">

        {/* Intro Header */}
        <Section>
          <div className="text-center">
            <h1 className={`text-5xl font-bold text-[#00ADB5] transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              About Me <span className="inline-block animate-bounce">👨‍💻</span>
            </h1>
          </div>
        </Section>

        {/* Bio and Image Section */}
        <Section>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
            <div className="relative group shrink-0">
              <div className="absolute -inset-0.5 bg-[#00ADB5] rounded-full opacity-75 blur-sm group-hover:opacity-100 transition" />
              <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-[#00ADB5] shadow-md shadow-[#00ADB5]/40 hover:shadow-[#00ADB5]/60 transition">
                <Image src="/profile.jpg" alt="Mayur Rishi" fill className="object-cover" priority />
              </div>
            </div>

            <div className="flex-1 text-lg text-[#EEEEEE] space-y-6">
              <p>
                Hey, I'm <span className="font-semibold text-[#00ADB5]">Dushyant Makwana</span>, a passionate <span className="text-[#00ADB5]">Game & VR Developer</span> specializing in Unity, C#, and React Native. I thrive on crafting immersive digital worlds and redefining <strong className="text-[#00ADB5]">Virtual Reality</strong> experiences.
              </p>
              <p>
                From building <strong className="text-[#00ADB5]">VR projects</strong> and mobile apps to designing interactive simulations, my journey has been a blend of creativity and code. I'm currently working on the <strong className="text-[#00ADB5]">VR Herbal Garden</strong> — a meditative space where users can explore the healing wonders of medicinal plants.
              </p>
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section>
          <h2 className="text-3xl font-bold text-center mb-10 text-[#00ADB5]">
            Skills & Tools <span className="animate-pulse">🚀</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "C#", "MERN (JavaScript)", "C++",
              "Unity3D", "Unity VR", "GameMaker Studio",
              "Blender", "Git", "GitHub",
              "Android Studio", "MongoDB", "AWS"
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="rounded-lg px-4 py-3 text-center text-sm font-medium border border-[#393E46]/50 bg-[#393E46]/60 backdrop-blur-md hover:bg-[#00ADB5] hover:text-[#222831] hover:scale-105 transform transition-all duration-300 ease-in-out"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CTA Buttons */}
        <Section>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="https://drive.google.com/file/d/1op2MF_TMCmlyKM-EulxUwAyaaMG76rIP/view?usp=sharing"
              className="bg-[#00ADB5]/90 backdrop-blur-md px-6 py-3 rounded-lg font-semibold text-[#222831] shadow-md hover:bg-[#00bbc4] hover:shadow-[#00ADB5]/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              📄 Download Resume
            </Link>
            <Link
              href="/contact"
              className="bg-[#393E46]/70 backdrop-blur-md px-6 py-3 rounded-lg font-semibold text-[#EEEEEE] shadow-md hover:bg-[#00ADB5] hover:text-[#222831] hover:shadow-[#00ADB5]/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              📩 Contact Me
            </Link>
          </div>
        </Section>

        {/* Experience Section */}
        <Section>
          <h2 className="text-3xl font-bold text-center mb-12 text-[#00ADB5]">
            Experience <span className="inline-block animate-bounce">💼</span>
          </h2>

          <div className="space-y-12">
            {[
              {
                company: "Google Developer Student Club",
                role: "Lead Developer",
                duration: "September 2024 – March 2025",
                description: "Built three apps: two immersive Unity 3D experiences and a feature-rich cross-platform React Native mobile app."
              }
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="rounded-xl p-6 bg-[#393E46]/60 backdrop-blur-md border border-[#00ADB5]/20 shadow-md hover:scale-105 hover:border-[#00ADB5] hover:shadow-[#00ADB5]/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-[#EEEEEE]">{exp.company}</h3>
                    <p className="text-[#CCCCCC] italic">{exp.role}</p>
                  </div>
                  <div className="px-4 py-2 text-sm rounded-full bg-[#00ADB5]/10 text-[#00ADB5]">
                    {exp.duration}
                  </div>
                </div>
                <p className="mt-4 text-[#DDDDDD] leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
