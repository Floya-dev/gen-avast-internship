import { motion } from "framer-motion";
import { Terminal, Search, Filter, Globe, FileText } from "lucide-react";

const pipelineSteps = [
  { label: "Keywords", icon: Filter, desc: "apple, google, paypal…", color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
  { label: "PhishStats", icon: Globe, desc: "phishstats.info", color: "text-rose-400", bgColor: "bg-rose-500/10" },
  { label: "OpenPhish", icon: Globe, desc: "openphish.com", color: "text-amber-400", bgColor: "bg-amber-500/10" },
  { label: "PhishHunt", icon: Globe, desc: "phishunt.io", color: "text-violet-400", bgColor: "bg-violet-500/10" },
  { label: "Filter", icon: Search, desc: "Match URL keywords", color: "text-emerald-400", bgColor: "bg-emerald-500/10" },
];

const features = [
  "3 API sources — PhishStats, OpenPhish, PhishHunt",
  "Keyword-based URL matching",
  "Continuous scanning (120s interval) or one-shot mode",
  "Config-driven via config.yaml",
  "Only-hits mode for noise reduction",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Slide4PhishHunter({ idx }: { idx: number }) {
  return (
    <section data-slide-idx={idx} className="slide flex flex-col items-center justify-center px-4 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2"
      >
        Custom Tool: <span className="text-white/70">Phish Hunter</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-sm font-mono text-gray-500 mb-8"
      >
        Automated phishing URL intelligence gathering
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid lg:grid-cols-5 gap-4 max-w-6xl w-full mb-6"
      >
        {pipelineSteps.map((step, i) => {
          const Icon = step.icon;
          return (
              <motion.div
                key={step.label}
                variants={item}
                className={`glass rounded-xl p-4 text-center ${step.bgColor}`}
              >
                <Icon className={`w-5 h-5 ${step.color} mx-auto mb-2`} />
                <p className={`text-[10px] font-semibold ${step.color} mb-0.5`}>{step.label}</p>
                <p className="text-[9px] font-mono text-gray-500">{step.desc}</p>
              </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid lg:grid-cols-3 gap-5 max-w-6xl w-full"
      >
        <motion.div variants={item} className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-4 h-4 text-white/60" />
            <h3 className="text-sm font-semibold text-white">CLI Usage</h3>
          </div>
          <div className="space-y-2 font-mono text-[11px]">
            <div className="bg-white/[0.04] rounded-lg px-4 py-3 leading-relaxed">
              <span className="text-gray-500">$</span>{" "}
              <span className="text-white">python3 all.py</span>
              <br />
              <span className="text-gray-500">Keyword (leave blank to initiate scan):</span>
              <br />
              <span className="text-gray-500">&gt; </span>
              <span className="text-white/80">apple</span>
              <br />
              <span className="text-gray-500">&gt; </span>
              <span className="text-white/80">paypal</span>
              <br />
              <span className="text-gray-500">&gt; </span>
              <span className="text-white/80">meta</span>
            </div>
            <div className="bg-white/[0.04] rounded-lg px-4 py-2 text-gray-500">
              $ python3 all.py --api phishstats --once --only-hits
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-4 h-4 text-white/60" />
            <h3 className="text-sm font-semibold text-white">Features</h3>
          </div>
          <ul className="space-y-2.5">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-xs font-mono text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={item} className="glass rounded-2xl p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
            <h3 className="text-sm font-semibold text-white">Repository</h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white/[0.04] rounded-xl flex items-center justify-center mb-3">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://github.com/Floya-dev/phish-hunter&bgcolor=000000&color=ffffff"
                alt="QR Code for Phish Hunter repo"
                className="w-24 h-24 sm:w-28 sm:h-28"
              />
            </div>
            <p className="text-[10px] font-mono text-gray-500 text-center">
              Scan to view source
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
