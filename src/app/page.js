"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("nav") && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const skills = ["JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js"];
  const services = [
    { title: "Web Development", description: "Building responsive and modern web applications." },
    { title: "UI/UX Design", description: "Designing user-friendly interfaces with great user experiences." },
    { title: "SEO Optimization", description: "Improving website visibility on search engines." },
  ];
  const projects = [
    { title: "Project One", description: "A web app built with React and Node.js." },
    { title: "Project Two", description: "E-commerce website using Next.js and Tailwind CSS." },
    { title: "Project Three", description: "Portfolio website showcasing my work." },
  ];

  return (
    <div>
      {/* Header Navigation */}
      <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="hover:text-gray-300">My Portfolio</Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/skills" className="hover:text-gray-300">Skills</Link>
            <Link href="/services" className="hover:text-gray-300">Services</Link>
            <Link href="/portofolio" className="hover:text-gray-300">Portfolio</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="focus:outline-none">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-700 p-4 absolute top-full left-0 w-full shadow-md flex flex-col space-y-2">
            <Link href="/about" className="block text-white py-2">About</Link>
            <Link href="/skills" className="block text-white py-2">Skills</Link>
            <Link href="/services" className="block text-white py-2">Services</Link>
            <Link href="/porotfolio" className="block text-white py-2">Portfolio</Link>
            <Link href="/contact" className="block text-white py-2">Contact</Link>
          </div>
        )}
      </header>

      {/* Hero Page - Job Description */}
      <section id="hero" className="bg-blue-500 text-white py-16 text-center relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4">Hi, I'm Panji Arif Maulana</h2>
          <p className="text-xl mb-6">A passionate Mobile Developer | Open to Work</p>
          <p className="text-lg max-w-2xl mx-auto">I specialize in creating high-performance mobile applications using the latest technologies.</p>
          <a href="#contact" className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 font-bold rounded-lg shadow-md hover:bg-gray-200">Hire Me</a>
        </div>
      </section>
      {/* Profile Picture */}
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-10">
        <Image 
          src="/pp.jpg" 
          alt="Profile" 
          width={150} 
          height={150} 
          className="rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110" 
        />
      </div>

      {/* CV Information */}
      <section id="cv" className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">My CV</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">Download my latest CV for more details about my experience and skills.</p>
          <a href="/cv.pdf" className="bg-blue-600 text-white px-6 py-3 font-bold rounded-lg shadow-md hover:bg-blue-700">Download CV</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
