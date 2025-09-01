import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  Briefcase,
  Globe,
  CheckCircle,
  Image as ImageIcon,
} from "lucide-react";
import Footer from "./Footer";

const slides = [
  {
    id: 1,
    title: "Modern Infrastructure",
    subtitle: "Building with precision & transparency",
    img: "https://source.unsplash.com/1600x900/?construction,building",
  },
  {
    id: 2,
    title: "Smart Contracts for Projects",
    subtitle: "Milestone-driven payments, trustless execution",
    img: "https://source.unsplash.com/1600x900/?architecture,site",
  },
  {
    id: 3,
    title: "Sustainable Materials",
    subtitle: "Eco-friendly choices, long term value",
    img: "https://source.unsplash.com/1600x900/?sustainable,construction",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071126] via-[#081028] to-[#020617] text-slate-100 antialiased">
      {/* HERO / CAROUSEL */}
      <section className="relative max-w-7xl mx-auto px-6 pt-4">
        <div className="relative w-full h-[56vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          {slides.map((slide, i) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: i === current ? 1 : 0 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0"
            >
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 flex items-end md:items-center">
                <div className="p-8 md:p-12 max-w-3xl">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: i === current ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-extrabold leading-tight"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: i === current ? 1 : 0 }}
                    transition={{ delay: 0.15, duration: 0.8 }}
                    className="mt-3 text-slate-200/90 text-sm md:text-lg"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <div className="mt-6 flex gap-3">
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold">
                      View Projects
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                      Learn about on-chain milestones
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* arrows */}
          <div className="absolute inset-y-0 left-4 flex items-center">
            <button onClick={prev} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
              <ChevronLeft />
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center">
            <button onClick={next} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
              <ChevronRight />
            </button>
          </div>

          {/* dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-white/30"}`}
                aria-label={`slide-${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ y: -6 }} className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center mb-4">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-lg">Design & Architecture</h3>
          <p className="mt-2 text-sm text-slate-300">
            BIM-ready designs and on-chain approvals for transparent sign-offs.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -6 }} className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center mb-4">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-lg">Project Management</h3>
          <p className="mt-2 text-sm text-slate-300">
            Milestone-driven workflow, subcontractor coordination, DAO-ready governance.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -6 }} className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-rose-400 flex items-center justify-center mb-4">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-lg">Sustainable Sourcing</h3>
          <p className="mt-2 text-sm text-slate-300">
            Traceable materials through tokenized supply chains and verifiable provenance.
          </p>
        </motion.div>
      </section>

      {/* WHY WEB3 SECTION */}
      <section className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10">
          <h3 className="text-2xl font-extrabold">Why Web3 for Construction?</h3>
          <p className="mt-3 text-slate-300">
            Web3 tools help reduce disputes, enable instant milestone-proof payments, and bring
            financial transparency to every stakeholder.
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-1" />
              <span className="text-sm text-slate-300">On-chain milestone verification</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-1" />
              <span className="text-sm text-slate-300">Tokenized supplier payments</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-1" />
              <span className="text-sm text-slate-300">Immutable project records</span>
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold">
              Get a Quote
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/10">Whitepaper</button>
          </div>
        </div>

        {/* Side feature cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <ImageIcon className="w-6 h-6" />, title: "On-Chain Reports", desc: "Immutable daily logs & inspection photos.", color: "from-violet-500 to-cyan-400", note: "Verified by project oracles" },
            { icon: <Layers className="w-6 h-6" />, title: "DAO Governance", desc: "Stakeholder voting on big decisions.", color: "from-cyan-400 to-emerald-400", note: "Transparent & auditable" },
            { icon: <Briefcase className="w-6 h-6" />, title: "Vendor Onboarding", desc: "KYC + tokenized reputation scores.", color: "from-amber-400 to-rose-400", note: "Faster procurement cycles" },
            { icon: <Globe className="w-6 h-6" />, title: "Global Tendering", desc: "Open bids, verifiable outcomes.", color: "from-sky-400 to-violet-400", note: "Reduced friction" },
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-4 flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-slate-300">{item.desc}</p>
                </div>
              </div>
              <div className="mt-4 text-xs text-slate-400">{item.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <h3 className="text-2xl font-extrabold">Recent Projects</h3>
        <p className="text-sm text-slate-400 mt-2">A snapshot of delivered milestones & tokenized outcomes.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              <img
                src={`https://source.unsplash.com/600x400/?construction,site,${idx}`}
                alt={`project-${idx}`}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">Project #{idx + 1}</h4>
                <p className="text-xs text-slate-300 mt-1">Milestone token: MILE-{String(1000 + idx)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="max-w-7xl mx-auto px-6 mt-12 mb-16">
        <div className="rounded-2xl p-6 bg-gradient-to-r from-[#00121a]/60 to-[#06102b]/60 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-extrabold">Ready to tokenize your project?</h4>
            <p className="text-sm text-slate-300 mt-1">Get a free on-chain feasibility review and milestone plan.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold">
              Request Audit
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/10">Contact Sales</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
