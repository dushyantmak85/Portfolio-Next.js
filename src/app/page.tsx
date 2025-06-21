'use client';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
const Robot3D = dynamic(() => import('@/components/Robot3D'), { ssr: false });
import TypingText from "@/components/TypingText";


// Sections
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#222831] via-[#222831] to-[#222831] text-[#EEEEEE] scroll-smooth overflow-hidden">
      {/* === Background Effects === */}
      <ParticlesBackground className="absolute inset-0 z-0 opacity-20" />

      {/* === Content Wrapper === */}
      <div className="relative z-10">
        <Navbar />

        {/* === Hero Section === */}
        <section
          id="hero"
          className="max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center"
        >
          {/* Profile Image */}
          <div
            className={`relative group mb-10 w-48 h-48 rounded-full overflow-hidden border-4 border-[#00ADB5] shadow-2xl shadow-[#00ADB5]/40 hover:shadow-[#00ADB5]/60 transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00ADB5] via-[#EEEEEE] to-[#00ADB5] rounded-full opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition duration-700" />
            <div className="relative rounded-full overflow-hidden h-full w-full z-10">
              <Image
                src="/profile.jpg"
                alt="Dushyant Makwana Profile Picture"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Name */}
          <h1
            className={`flex items-center justify-center text-5xl sm:text-6xl font-bold mb-5 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EEEEEE] via-[#00ADB5] to-[#EEEEEE] animate-gradient-x">
             Hey, I'm <TypingText />
            </span>
            
          </h1>

          {/* One-liner */}
          <p
            className={`text-xl text-[#EEEEEE] max-w-2xl mb-4 leading-relaxed transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            I build <span className="text-[#00ADB5] font-semibold">immersive experiences</span> that blend code, creativity, and storytelling.
          </p>

          {/* Bio */}
          <p
            className={`text-lg text-[#EEEEEE] max-w-2xl transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            As a <span className="text-[#00ADB5] font-semibold">Game & VR Developer</span>, I turn wild ideas into playable realities—crafting virtual worlds that spark curiosity and connection.
          </p>

          {/* Tech Stack */}
          <div
            className={`flex flex-wrap justify-center gap-3 mt-10 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            {['Unity', 'VR', 'C#', 'React.js'].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-1.5 bg-[#00ADB5]/30 rounded-full text-sm border border-[#00ADB5]/50 text-[#EEEEEE] backdrop-blur-md shadow-inner"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isLoaded ? 'fadeIn 600ms ease-out forwards' : 'none',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-5 mt-12 transition-all duration-700 delay-[900ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            <a href="#projects">
              <button className="bg-gradient-to-r from-[#00ADB5] to-[#EEEEEE] px-8 py-3 rounded-xl text-[#222831] font-medium shadow-md hover:shadow-[#00ADB5]/50 hover:translate-y-[-2px] transition-all duration-300">
                🚀 Explore Projects
              </button>
            </a>
            <a href="#contact">
              <button className="bg-[#393E46] border-2 border-[#00ADB5] hover:border-[#EEEEEE] px-8 py-3 rounded-xl text-[#EEEEEE] font-medium shadow-md hover:shadow-[#00ADB5]/20 hover:translate-y-[-2px] transition-all duration-300">
                💬 Let's Talk
              </button>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 bg-[#222831]">
          <Contact />
        </section>
      </div>

      {/* === Global CSS Animations === */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(14deg); }
          40% { transform: rotate(-8deg); }
          60% { transform: rotate(14deg); }
          80% { transform: rotate(-4deg); }
          100% { transform: rotate(10deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.01); }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }

        .animate-wave {
          display: inline-block;
          transform-origin: bottom right;
          animation: wave 2.5s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
