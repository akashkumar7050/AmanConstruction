import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Aman Construction</h2>
          <p className="text-sm">
            Building dreams with strength, trust, and innovation. We create spaces that stand the test of time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Residential Construction</li>
            <li>Commercial Projects</li>
            <li>Renovation & Remodeling</li>
            <li>Interior Designing</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition"><Facebook /></a>
            <a href="#" className="hover:text-sky-400 transition"><Twitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><Instagram /></a>
            <a href="#" className="hover:text-blue-600 transition"><Linkedin /></a>
          </div>
        </div>
      </div>

      <motion.div
        className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © {new Date().getFullYear()} Aman Construction. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
