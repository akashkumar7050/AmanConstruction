import React from "react";
import { NavLink } from "react-router-dom";
import { Mail, Phone, Hammer } from "lucide-react";

const Navbar = () => {
  return (
    <div
      className="sticky top-0 z-50
      flex items-center justify-between h-11 px-8
      bg-gradient-to-r from-[#0a0f1c]/80 via-[#0b1326]/80 to-[#0a0f1c]/80
      backdrop-blur-md border-b border-white/10 shadow-lg"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Hammer className="w-7 h-7 text-cyan-400" />
        <h1 className="text-xl font-extrabold tracking-wide">
          <span className="text-cyan-400">Aman</span>
          <span className="text-white">Construction</span>
        </h1>
      </div>

      {/* NavLinks */}
      <div className="flex gap-8">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/blog", label: "Blog" },
          { to: "/contact", label: "Contact" },
        ].map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-sm font-semibold border-b-[2px] border-cyan-400 text-white"
                : "text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Call & Mail Buttons */}
      <div className="flex gap-4">
        <a
          href="mailto:info@amanconstruction.com"
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold shadow-md transition"
        >
          <Mail size={16} /> Mail
        </a>
        <a
          href="tel:+919876543210"
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-md transition"
        >
          <Phone size={16} /> Call
        </a>
      </div>
    </div>
  );
};

export default Navbar;
