import { motion } from "framer-motion";

const takedowns = [
  { action: "Lovable Project Deleted", detail: "Project 941fef...d removed by platform", color: "text-rose-400", bgColor: "bg-rose-500/10", borderColor: "border-rose-500/20" },
  { action: "Webflow Funnel Suspended", detail: "Office 365 phishing page taken down", color: "text-amber-400", bgColor: "bg-amber-500/10", borderColor: "border-amber-500/20" },
  { action: "Framer Abuse Reported", detail: "Yahoo login clone flagged to Framer Trust", color: "text-sky-400", bgColor: "bg-sky-500/10", borderColor: "border-sky-500/20" },
  { action: "Avast Internal Blocklist", detail: "All identified domains & IPs ingested", color: "text-emerald-400", bgColor: "bg-emerald-500/10", borderColor: "border-emerald-500/20" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Slide8Impact({ idx }: { idx: number }) {
  return (
    <section data-slide-idx={idx} className="slide flex flex-col items-center justify-center px-4 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-12"
      >
        Impact &amp; Takedowns
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-4 max-w-3xl w-full"
      >
        {takedowns.map((t) => (
          <motion.div
            key={t.action}
            variants={item}
            className={`glass rounded-2xl p-6 flex items-start gap-4 ${t.borderColor}`}
          >
            <div className={`w-6 h-6 rounded-md ${t.bgColor} border ${t.borderColor} flex items-center justify-center shrink-0 mt-0.5`}>
              <svg className={`w-3.5 h-3.5 ${t.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">{t.action}</h3>
              <p className="text-xs font-mono text-gray-500">{t.detail}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 glass rounded-xl px-4 py-3 flex items-center gap-4 border-white/[0.06]"
      >
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://github.com/Floya-dev/gen-avast-internship&bgcolor=000000&color=ffffff"
          alt="QR Code for internship repository"
          className="w-28 h-28 sm:w-32 sm:h-32"
        />
        <div className="text-left">
          <p className="text-sm font-semibold text-white">Internship Repository</p>
          <p className="text-xs font-mono text-gray-500">github.com/Floya-dev/gen-avast-internship</p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-6 text-xs font-mono text-gray-600 text-center"
      >
        PHISH_DECODE_2026 <span className="text-white/20">/</span> AVAST_INTERN{" "}
      </motion.p>
    </section>
  );
}
