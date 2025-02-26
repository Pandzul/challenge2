"use client";


import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            Hi, I’m a passionate web developer with experience in building modern and responsive web applications. I love learning new technologies and improving my skills every day.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-gray-200 rounded-lg text-gray-800">
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-700 p-4 absolute top-full left-0 w-full shadow-md">
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/skills" className="hover:text-gray-300">Skills</Link>
            <Link href="/services" className="hover:text-gray-300">Services</Link>
            <Link href="/portofolio" className="hover:text-gray-300">Portofolio</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
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
          <img 
            src="/pp.jpg" 
            alt="Profile" 
            className="w-50% rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110" 
          />
        </div>

      {/* About Section
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="md:w-2/3 text-lg text-gray-700">Hi, saya <strong>Panji Arif Maulana</strong>, mahasiswa semester 4 di Ma'soem University, belajar pemrograman mobile.</p>
          </div>
        </div>
      </section> */}

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
