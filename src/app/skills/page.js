"use client";

import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Skills() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const skills = [
    { title: "Mobile Development", description: "React Native" },
    { title: "Web Development", description: "HTML, CSS, React.js, Next.js, Tailwind CSS" },
    { title: "Backend", description: "Node.js, Express.js" },
    { title: "Database", description: "Oracle, MySQL" },
    { title: "UI/UX Design", description: "Figma" }
  ];

  return (
    <div className="bg-white">
      <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="block py-2 text-white" onClick={toggleMenu}>About</Link>
            <Link href="/skills" className="block py-2 text-white" onClick={toggleMenu}>Skills</Link>
            <Link href="/services" className="block py-2 text-white" onClick={toggleMenu}>Services</Link>
            <Link href="/portofolio" className="block py-2 text-white" onClick={toggleMenu}>Portofolio</Link>
            <Link href="/contact" className="block py-2 text-white" onClick={toggleMenu}>Contact</Link>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-blue-700 p-4 absolute top-full left-0 w-full shadow-md">
            <Link href="/about" className="block py-2 text-white" onClick={toggleMenu}>About</Link>
            <Link href="/skills" className="block py-2 text-white" onClick={toggleMenu}>Skills</Link>
            <Link href="/services" className="block py-2 text-white" onClick={toggleMenu}>Services</Link>
            <Link href="/portofolio" className="block py-2 text-white" onClick={toggleMenu}>Portofolio</Link>
            <Link href="/contact" className="block py-2 text-white" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </header>

      <div className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">My Skills</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-6 shadow-lg rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-blue-600">{skill.title}</h2>
              <p className="text-gray-700 mt-2">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
