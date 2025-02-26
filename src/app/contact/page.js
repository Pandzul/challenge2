"use client";

import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-white">
      <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/skills" className="hover:text-gray-300">Skills</Link>
            <Link href="/services" className="hover:text-gray-300">Services</Link>
            <Link href="/portofolio" className="hover:text-gray-300">Portofolio</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
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
            <Link href="/portofolio" className="block py-2 text-white" onClick={toggleMenu}>Portfolio</Link>
            <Link href="/contact" className="block py-2 text-white" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </header>
      
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Contact Me</h1>
        <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-lg">
          <p className="text-lg text-gray-700 mb-4">Jika ingin menghubungi saya, silakan gunakan informasi di bawah ini:</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Email</h3>
          <p className="text-gray-700"><a href="mailto:panji@example.com" className="text-blue-500 hover:underline">panji@example.com</a></p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">LinkedIn</h3>
          <p className="text-gray-700"><a href="https://linkedin.com/in/panji" className="text-blue-500 hover:underline">linkedin.com/in/panji</a></p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">GitHub</h3>
          <p className="text-gray-700"><a href="https://github.com/panji" className="text-blue-500 hover:underline">github.com/panji</a></p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Formulir Kontak</h3>
          <form className="mt-4">
            <input type="text" placeholder="Nama" className="w-full p-3 border rounded-lg mb-3" />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg mb-3" />
            <textarea placeholder="Pesan" className="w-full p-3 border rounded-lg mb-3" rows="4"></textarea>
            <button className="bg-blue-600 text-white px-6 py-3 font-bold rounded-lg shadow-md hover:bg-blue-700">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </div>
  );
}
