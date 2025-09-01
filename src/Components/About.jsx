import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Star, Award, Briefcase } from "lucide-react";
import Footer from "./Footer";

// About Page for Construct3 — Web3 Construction Platform
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071126] via-[#081028] to-[#020617] text-slate-100 antialiased">
      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 py-12 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          About Aman Construction
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl mx-auto text-slate-300"
        >
          Redefining the construction industry with Web3 — transparency, automation, and sustainability.
        </motion.p>
      </header>

      {/* OUR STORY */}
      <section className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Construct3 was founded with a vision to merge blockchain transparency with construction efficiency. Our platform enables contractors, suppliers, and clients to collaborate with trustless smart contracts, milestone-driven payments, and verifiable project records.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            With an emphasis on sustainability, tokenized supply chains, and decentralized governance, we are pushing the boundaries of modern infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-6"
        >
          <img
            src="https://source.unsplash.com/800x500/?team,construction"
            alt="Our team"
            className="w-full h-64 object-cover rounded-xl"
          />
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl p-8 bg-white/5 backdrop-blur-md border border-white/10"
        >
          <Target className="w-10 h-10 text-cyan-400 mb-4" />
          <h3 className="text-xl font-bold">Our Mission</h3>
          <p className="mt-2 text-slate-300 text-sm">
            To bring absolute transparency and automation into construction projects, reducing disputes and ensuring timely, quality delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="rounded-2xl p-8 bg-white/5 backdrop-blur-md border border-white/10"
        >
          <Star className="w-10 h-10 text-violet-400 mb-4" />
          <h3 className="text-xl font-bold">Our Vision</h3>
          <p className="mt-2 text-slate-300 text-sm">
            To become the leading decentralized ecosystem for infrastructure — where innovation, sustainability, and trust converge.
          </p>
        </motion.div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-bold text-center">Our Core Values</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[{
            icon: <Award className="w-8 h-8 text-amber-400" />, title: "Transparency", desc: "On-chain records accessible by all stakeholders."},
            {icon: <Users className="w-8 h-8 text-emerald-400" />, title: "Collaboration", desc: "Smart contracts align teams and suppliers."},
            {icon: <Briefcase className="w-8 h-8 text-cyan-400" />, title: "Accountability", desc: "Milestone-driven payments ensure delivery."}].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
            >
              <div className="mb-3">{val.icon}</div>
              <h4 className="font-semibold">{val.title}</h4>
              <p className="mt-2 text-sm text-slate-300">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="max-w-7xl mx-auto px-6 mt-16 pb-16">
        <h2 className="text-2xl font-bold text-center">Meet Our Team</h2>
        <p className="text-sm text-slate-400 text-center mt-2">Visionaries, engineers, and builders shaping the future.</p>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-4 flex flex-col items-center"
            >
              <img
                src={`https://source.unsplash.com/200x200/?portrait,person,${idx}`}
                alt={`Team Member ${idx + 1}`}
                className="w-24 h-24 object-cover rounded-full border border-white/10"
              />
              <h4 className="mt-4 font-semibold">Member {idx + 1}</h4>
              <p className="text-xs text-slate-400">Role {idx + 1}</p>
            </motion.div>
          ))}
        </div>
      </section>
    <Footer/>
    </div>
  );
}
