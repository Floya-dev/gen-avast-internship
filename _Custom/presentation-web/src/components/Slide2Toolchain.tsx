import { motion } from "framer-motion";
import { Network, Search, FileSearch, BrainCircuit } from "lucide-react";

const tools = [
  {
    category: "NETWORK",
    items: "Tor · Proxychains · Burp Suite Interception",
    icon: Network,
    color: "text-blue-400/80",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    category: "RECON",
    items: "Nmap · Gobuster · Phish Hunter (custom)",
    icon: Search,
    color: "text-emerald-400/80",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    category: "FORENSIC",
    items: "Exiftool (Metadata) · ZBar (QR Decoding)",
    icon: FileSearch,
    color: "text-amber-400/80",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
  },
  {
    category: "INTELLIGENCE",
    items: "Free APIs · urlscan.io · Social Media",
    icon: BrainCircuit,
    color: "text-purple-400/80",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Slide2Toolchain({ idx }: { idx: number }) {
  return (
    <section data-slide-idx={idx} className="slide flex flex-col items-center justify-center px-4 sm:px-8">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xs font-mono tracking-[0.35em] uppercase text-gray-500 mb-2"
      >
        $ cat /etc/threat-intel/toolchain.conf
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-12"
      >
        The Toolchain
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl w-full"
      >
        {tools.map((t) => {
          const Icon = t.icon;
          return (
            <motion.div
              key={t.category}
              variants={item}
              className={`glass-glow rounded-2xl p-6 sm:p-8 ${t.borderColor}`}
            >
              <div className={`w-12 h-12 rounded-xl ${t.bgColor} flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${t.color}`} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2 tracking-wider">
                {t.category}
              </h3>
              <p className="text-xs font-mono text-gray-400 leading-relaxed">
                {t.items}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
