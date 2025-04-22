"use client";
import { useState, useEffect } from "react";
import { X, Home, User, Code, Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        sidebarOpen &&
        !target.closest(".sidebar") &&
        !target.closest(".menu-button")
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  return (
    <>
      {/* Menu Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => setSidebarOpen(true)}
          className="menu-button rounded-full border border-[#F5EFE7]/20 p-3 hover:bg-[#3E5879] transition-colors duration-200"
          aria-label="Open navigation menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className="w-full h-0.5 bg-[#F5EFE7] block"></span>
            <span className="w-full h-0.5 bg-[#F5EFE7] block"></span>
            <span className="w-full h-0.5 bg-[#F5EFE7] block"></span>
          </div>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#213555] text-[#F5EFE7] z-50 transition-transform duration-300 ease-in-out sidebar ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#D8C4B6] shadow-[0_0_10px_2px_rgba(216,196,182,0.4)]">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[#D8C4B6] font-bold text-xl ml-3">
              Dushyant Makwana
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-[#F5EFE7]"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col px-4 py-4 space-y-1">
          <Link
            href="#home"
            className="flex items-center py-3 px-4 bg-[#3E5879] text-[#F5EFE7] rounded-md"
          >
            <Home size={20} className="mr-3 text-[#D8C4B6]" />
            <span className="font-medium">Home</span>
          </Link>

          <Link
            href="#about"
            className="flex items-center py-3 px-4 hover:bg-[#3E5879]/60 rounded-md"
          >
            <User size={20} className="mr-3 text-[#D8C4B6]" />
            <span className="font-medium">About</span>
          </Link>

          <Link
            href="#projects"
            className="flex items-center py-3 px-4 hover:bg-[#3E5879]/60 rounded-md"
          >
            <Code size={20} className="mr-3 text-[#D8C4B6]" />
            <span className="font-medium">Projects</span>
          </Link>

          <Link
            href="#contact"
            className="flex items-center py-3 px-4 hover:bg-[#3E5879]/60 rounded-md"
          >
            <Mail size={20} className="mr-3 text-[#D8C4B6]" />
            <span className="font-medium">Contact</span>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
