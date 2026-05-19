import { motion } from "framer-motion";
import {
  Route,
  Briefcase,
  Package,
  Leaf,
  Zap,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  route: Route,
  briefcase: Briefcase,
  package: Package,
  leaf: Leaf,
  zap: Zap,
};

interface Service {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-xl p-7 flex flex-col gap-5 transition-all duration-300 cursor-default"
      style={{
        background: "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        border: "1px solid rgba(244,208,105,0.12)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
      }}
    >
      {/* Top gold accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, transparent, #F4D069, transparent)" }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, rgba(244,208,105,0.15) 0%, rgba(177,141,49,0.08) 100%)",
          border: "1px solid rgba(244,208,105,0.2)",
        }}
      >
        <Icon size={22} style={{ color: "#F4D069" }} strokeWidth={1.5} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <p className="text-[#F4D069]/60 text-xs tracking-[0.12em] uppercase font-medium">{service.tagline}</p>
        <h3 className="text-white font-semibold text-lg leading-snug">{service.title}</h3>
        <p className="text-white/55 text-sm leading-relaxed">{service.description}</p>
      </div>

      {/* Bullet list */}
      <ul className="space-y-2 mt-auto">
        {service.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-white/50 text-xs leading-relaxed group-hover:text-white/65 transition-colors duration-300">
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#F4D069" }} />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

interface StatItemProps {
  value: string;
  label: string;
  index: number;
}

export function StatItem({ value, label, index }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-1"
    >
      <span
        className="text-4xl lg:text-5xl font-bold tracking-tight"
        style={{ background: "linear-gradient(135deg, #F4D069 0%, #B18D31 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
      >
        {value}
      </span>
      <span className="text-white/50 text-xs tracking-[0.12em] uppercase font-medium">{label}</span>
    </motion.div>
  );
}
