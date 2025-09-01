import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, Tag } from "lucide-react";
import Footer from "./Footer";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Construction",
    date: "Aug 20, 2025",
    author: "Aman Verma",
    category: "Sustainability",
    desc: "Eco-friendly materials and green building practices are revolutionizing modern construction.",
    img: "https://source.unsplash.com/800x500/?eco,construction",
  },
  {
    id: 2,
    title: "Smart Project Management with Web3",
    date: "Jul 12, 2025",
    author: "Team AmanConstruction",
    category: "Technology",
    desc: "Blockchain and smart contracts are transforming project transparency and accountability.",
    img: "https://source.unsplash.com/800x500/?technology,construction",
  },
  {
    id: 3,
    title: "Top 5 Renovation Trends of 2025",
    date: "Jun 5, 2025",
    author: "Aman Verma",
    category: "Renovation",
    desc: "Discover the latest design inspirations and sustainable renovation practices.",
    img: "https://source.unsplash.com/800x500/?home,renovation",
  },
  {
    id: 4,
    title: "Why Quality Materials Matter",
    date: "May 28, 2025",
    author: "Team AmanConstruction",
    category: "Materials",
    desc: "Cutting corners on material quality costs more in the long run. Here’s why durability pays off.",
    img: "https://source.unsplash.com/800x500/?bricks,cement",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071126] via-[#081028] to-[#020617] text-slate-100 antialiased">
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          AmanConstruction Blog
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Insights, updates, and inspiration from the world of construction,
          sustainability, and modern architecture.
        </p>
      </section>

      {/* FEATURED POST */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg"
        >
          <img
            src="https://source.unsplash.com/1200x600/?construction,city"
            alt="featured"
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Mega Projects of the Future: Smart Cities in 2030
            </h2>
            <p className="mt-2 text-slate-300">
              How large-scale infrastructure projects are integrating AI,
              blockchain, and sustainable materials to create the cities of
              tomorrow.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar size={16} /> Sept 1, 2025
              </span>
              <span className="flex items-center gap-1">
                <User size={16} /> Aman Verma
              </span>
              <span className="flex items-center gap-1">
                <Tag size={16} /> Smart Cities
              </span>
            </div>
            <button className="mt-6 px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg text-black font-semibold">
              Read Full Article
            </button>
          </div>
        </motion.div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-md"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-sm text-slate-400 mt-1">{post.desc}</p>
              <div className="flex items-center gap-3 mt-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={14} /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Tag size={14} /> {post.category}
                </span>
              </div>
              <button className="mt-4 text-indigo-400 hover:underline">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* NEWSLETTER CTA */}
      <section className="max-w-5xl mx-auto px-6 mt-16 mb-16">
        <div className="rounded-2xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-white/10 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-slate-300 mt-2">
            Get the latest updates, construction tips, and project insights
            delivered straight to your inbox.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white outline-none w-full sm:w-80"
            />
            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
