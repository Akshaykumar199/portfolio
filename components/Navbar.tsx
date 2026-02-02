"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl" : "backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div
          className={`relative flex items-center justify-between px-4 py-2 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-white/20 bg-white/70 dark:bg-gray-900/70 shadow-lg shadow-blue-500/10 dark:shadow-blue-900/40"
              : "border-white/10 bg-white/40 dark:bg-gray-900/40 shadow-md"
          }`}
        >
          <div className="flex-shrink-0">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-md shadow-blue-500/40">
                <span className="text-sm font-extrabold text-white">AK</span>
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                  Portfolio
                </span>
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Akshay Kumar
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 rounded-full bg-gray-100/60 dark:bg-gray-800/60 px-2 py-1 border border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                >
                  <span className="absolute inset-0 rounded-full bg-white/80 dark:bg-white/10 opacity-0 group-hover:opacity-100" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/60 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-400/60 transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 sm:px-6 lg:px-8 mt-2">
          <div className="rounded-2xl border border-white/20 bg-white/80 dark:bg-gray-900/90 shadow-xl shadow-blue-500/20 overflow-hidden">
            <div className="px-3 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
