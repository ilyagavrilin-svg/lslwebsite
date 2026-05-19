import { motion } from "framer-motion";
import { ArrowDown, MapPin, Globe } from "lucide-react";
import { services, stats } from "@/data";
import { ServiceCard, StatItem } from "@/components/Cards";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-[#21304A] min-h-screen">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(244,208,105,1) 1px, transparent 1px), linear-gradient(90deg, rgba(244,208,105,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(244,208,105,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-[0.14em] uppercase font-medium"
            style={{
              border: "1px solid rgba(244,208,105,0.25)",
              background: "rgba(244,208,105,0.06)",
              color: "#F4D069",
            }}
          >
            <MapPin size={11} />
            Hong Kong · Asia-Pacific &amp; Global
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]"
          >
            Aviation Consulting
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #F4D069 0%, #B18D31 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Redefined
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-white/55 text-lg sm:text-xl max-w-2xl leading-relaxed"
          >
            Strategic expertise across route planning, commercial management,
            logistics, sustainability, and transformation — built for the
            Asia‑Pacific cargo market and beyond.
          </motion.p>

          {/* Wordmark pills */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {["Precision", "Performance", "Partnership"].map((word) => (
              <span
                key={word}
                className="px-4 py-1.5 text-xs tracking-[0.14em] uppercase rounded-full text-white/60"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {word}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <button
              onClick={() => scrollTo("#services")}
              className="px-8 py-3.5 text-sm font-semibold tracking-wider uppercase rounded-lg text-[#21304A] transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #F4D069 0%, #B18D31 100%)",
                boxShadow: "0 8px 24px rgba(177,141,49,0.35)",
              }}
            >
              Explore Services
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3.5 text-sm font-semibold tracking-wider uppercase rounded-lg text-white/80 hover:text-white transition-all duration-200 hover:scale-105"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Contact Us
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo("#about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hover:text-[#F4D069] transition-colors"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ArrowDown size={20} />
          </motion.div>
        </motion.button>
      </section>

      {/* ── STATS BAND ── */}
      <section
        className="py-14 px-6"
        style={{
          background: "linear-gradient(180deg, rgba(244,208,105,0.06) 0%, transparent 100%)",
          borderTop: "1px solid rgba(244,208,105,0.1)",
          borderBottom: "1px solid rgba(244,208,105,0.1)",
        }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <StatItem key={s.label} value={s.value} label={s.label} index={i} />
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <p
              className="text-xs tracking-[0.2em] uppercase font-semibold"
              style={{ color: "#F4D069" }}
            >
              About Libratum
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Your trusted aviation consulting partner
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              Libratum Solutions is a Hong Kong–based aviation consulting agency
              specialising in air cargo strategy and logistics. We partner with
              airlines, freight forwarders, e-commerce platforms, and global
              cargo stakeholders to optimise operations, unlock commercial growth,
              and navigate complex industry transformations.
            </p>
            <p className="text-white/55 text-base leading-relaxed">
              Bridging strategy and execution across the Asia-Pacific region and
              global markets, we deliver measurable outcomes — from route
              efficiency gains to full digital transformation programmes.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm mt-2">
              <Globe size={14} />
              <span>Hong Kong · Singapore · Shanghai · Seoul · Tokyo · Dubai</span>
            </div>
          </motion.div>

          {/* Right: decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="rounded-2xl p-10 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(244,208,105,0.15)",
              }}
            >
              {/* decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                style={{ background: "linear-gradient(135deg, #F4D069, #B18D31)" }}
              />
              <div className="relative z-10 space-y-8">
                {[
                  { label: "Deep Industry Expertise", desc: "15+ years at the intersection of aviation, logistics, and commercial strategy." },
                  { label: "Asia-Pacific Focus", desc: "Extensive network and market knowledge across the region's key aviation hubs." },
                  { label: "End-to-End Perspective", desc: "Unique ability to work across strategy, sales, and ground-level operations." },
                  { label: "Results-Oriented", desc: "Structured around measurable outcomes — revenue growth, cost savings, efficiency gains." },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#F4D069" }}
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                      <p className="text-white/45 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-6" style={{ background: "rgba(0,0,0,0.12)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 flex flex-col items-center gap-3"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: "#F4D069" }}>
              What We Do
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Our Services</h2>
            <p className="text-white/45 max-w-xl text-base leading-relaxed mt-2">
              Five integrated service areas — designed to address every dimension
              of aviation logistics and commercial performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section id="founder" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 flex flex-col items-center gap-3"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: "#F4D069" }}>
              Leadership
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Founder &amp; Director</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
              border: "1px solid rgba(244,208,105,0.15)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Avatar side */}
              <div
                className="lg:col-span-2 flex flex-col items-center justify-center p-12 gap-5 relative"
                style={{
                  background: "linear-gradient(160deg, rgba(244,208,105,0.07) 0%, rgba(244,208,105,0.02) 100%)",
                  borderRight: "1px solid rgba(244,208,105,0.1)",
                }}
              >
                {/* Avatar circle */}
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #F4D069 0%, #B18D31 100%)",
                    color: "#21304A",
                    boxShadow: "0 8px 32px rgba(177,141,49,0.35)",
                  }}
                >
                  IG
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-xl tracking-wide">Ilya Gavrilin</p>
                  <p className="text-[#F4D069] text-xs tracking-[0.12em] uppercase font-medium mt-1">
                    Founder &amp; Director
                  </p>
                </div>
                <div
                  className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wider"
                  style={{
                    background: "rgba(244,208,105,0.1)",
                    border: "1px solid rgba(244,208,105,0.2)",
                    color: "#F4D069",
                  }}
                >
                  15+ Years Experience
                </div>
              </div>

              {/* Content side */}
              <div className="lg:col-span-3 p-10 lg:p-12 flex flex-col gap-6">
                <p className="text-white/60 text-sm leading-relaxed">
                  Senior commercial leader with proven expertise in aviation
                  logistics and cargo transport across Asia-Pacific and global
                  markets. Recognised for driving sales growth, developing
                  high-impact commercial strategies, and leading regional teams
                  to exceed corporate targets.
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Skilled in key account management, contract negotiation, and
                  building profitable partnerships with airlines, e-commerce
                  platforms, and global stakeholders. Adept at aligning regional
                  initiatives with global strategy, ensuring CRM adoption, KPI
                  monitoring, and continuous improvement across the sales
                  lifecycle.
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    "Air Cargo Commercial",
                    "Asia-Pacific Markets",
                    "Airline Partnerships",
                    "E-commerce Logistics",
                    "Revenue Strategy",
                    "Regional Leadership",
                    "Contract Negotiation",
                    "KPI Management",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium text-white/60"
                      style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section
        className="py-20 px-6"
        style={{
          background: "rgba(0,0,0,0.12)",
          borderTop: "1px solid rgba(244,208,105,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3 mb-12"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: "#F4D069" }}>
              Who We Serve
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Target Clients</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "✈", label: "Airlines & Cargo Carriers" },
              { icon: "📦", label: "Freight Forwarders" },
              { icon: "🛒", label: "E-Commerce Companies" },
              { icon: "🔗", label: "Logistics Providers" },
              { icon: "🏢", label: "Ground Handlers" },
              { icon: "🏛", label: "Airports & Authorities" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-white/55 text-xs text-center leading-tight">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: "#F4D069" }}>
              Get in Touch
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-xl">
              Ready to optimise your aviation logistics, grow commercial
              performance, or lead a transformation initiative? Reach out to
              discuss how Libratum Solutions can help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full rounded-2xl p-10 flex flex-col gap-6"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
              border: "1px solid rgba(244,208,105,0.15)",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 text-left">
                <label className="text-white/50 text-xs tracking-wider uppercase">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#F4D069]/40 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label className="text-white/50 text-xs tracking-wider uppercase">Company</label>
                <input
                  type="text"
                  placeholder="Your company"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#F4D069]/40 transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-white/50 text-xs tracking-wider uppercase">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#F4D069]/40 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label className="text-white/50 text-xs tracking-wider uppercase">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#F4D069]/40 transition-colors resize-none"
              />
            </div>
            <button
              className="w-full py-4 text-sm font-bold tracking-wider uppercase rounded-lg text-[#21304A] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #F4D069 0%, #B18D31 100%)",
                boxShadow: "0 8px 24px rgba(177,141,49,0.3)",
              }}
            >
              Send Message
            </button>
          </motion.div>

          {/* Direct contact */}
          <p className="text-white/30 text-sm">
            Or email directly:{" "}
            <a
              href="mailto:info@libratum.hk"
              className="text-[#F4D069]/70 hover:text-[#F4D069] transition-colors underline underline-offset-4"
            >
              info@libratum.hk
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
