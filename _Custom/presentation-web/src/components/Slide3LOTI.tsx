import { motion } from "framer-motion";
import { ExternalLink, Lightbulb } from "lucide-react";

const cases = [
  {
    platform: "TikTok Shop",
    tech: "Lovable + Supabase",
    project: "941fef...d",
    color: "text-rose-400/90",
    borderColor: "border-rose-500/20",
    description:
      "AI-generated shop page mimicking TikTok's checkout flow. Credentials exfiltrated via Supabase backend.",
  },
  {
    platform: "Yahoo Phish",
    tech: "Framer.app",
    project: "concerned-ways-888011",
    color: "text-sky-400/90",
    borderColor: "border-sky-500/20",
    description:
      "Fully cloned Yahoo login page deployed on Framer's infrastructure. No-code, drag-and-drop build.",
  },
  {
    platform: "Office 365",
    tech: "Webflow",
    project: "office365-service-c38bf0",
    color: "text-amber-400/90",
    borderColor: "border-amber-500/20",
    description:
      "Enterprise-grade phishing page hosted on Webflow. SSL cert issued by Webflow's own CDN.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Slide3LOTI({ idx }: { idx: number }) {
  return (
    <section data-slide-idx={idx} className="slide flex flex-col items-center justify-center px-4 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2"
      >
        Discovery: <span className="text-alert">LOTI Phishing websites</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-sm font-mono text-gray-500 mb-10"
      >
        Living Off Trusted Infrastructure
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-3 gap-4 sm:gap-5 max-w-6xl w-full mb-8"
      >
        {cases.map((c, i) => (
          <motion.div
            key={c.platform}
            variants={item}
            className={`glass rounded-2xl p-6 flex flex-col ${c.borderColor}`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-white">{c.platform}</h3>
              <ExternalLink className="w-3.5 h-3.5 text-gray-600" />
            </div>
            <span className={`text-[10px] font-mono ${c.color} mb-3 tracking-wider font-semibold`}>
              {c.tech}
            </span>
            {c.project && (
              <span className="text-[10px] font-mono text-gray-600 mb-2">
                Project: {c.project}
              </span>
            )}
            <p className="text-xs font-mono text-gray-400 leading-relaxed flex-1">
              {c.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
