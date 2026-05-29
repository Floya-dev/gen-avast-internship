import { motion } from "framer-motion";
import { FileText, Hash, User, Layers, Link, Calendar, Heading, Image } from "lucide-react";

const rules = [
  {
    icon: User,
    label: "Author",
    items: [
      { value: "BLANK", score: "+1" },
      { value: "python-docx / html-to-docx", score: "+2" },
      { value: "Other", score: "-1" },
    ],
  },
  {
    icon: Hash,
    label: "Keywords",
    items: [{ value: "html-to-docx", score: "+1" }],
  },
  {
    icon: User,
    label: "Last Modified By",
    items: [
      { value: "BLANK", score: "+1" },
      { value: "User", score: "+1" },
      { value: "python-docx / html-to-docx", score: "+2" },
      { value: "Other", score: "-2" },
    ],
  },
  {
    icon: Layers,
    label: "Revision",
    items: [
      { value: "BLANK", score: "+2" },
      { value: "1", score: "+1" },
      { value: "Other", score: "-2" },
    ],
  },
];

const singleRules = [
  { icon: Link, label: "Includes link", yes: "+1", no: "-1" },
  { icon: Calendar, label: "Created == Modified", match: "+1" },
  { icon: Heading, label: "No heading hierarchy", match: "+1" },
  { icon: Heading, label: "No headings", match: "+1" },
  { icon: Calendar, label: "Created > Modified", match: "+3" },
  { icon: Image, label: "Only 2 images", match: "+2" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const scoreColor = (s: string) => {
  const n = parseInt(s);
  if (n > 0) return "text-emerald-400";
  if (n < 0) return "text-alert";
  return "text-white/80";
};

export default function Slide7Algorithm({ idx }: { idx: number }) {
  return (
    <section data-slide-idx={idx} className="slide flex flex-col items-center justify-center px-4 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2"
      >
        DOCX Scoring Algorithm (v2)
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-sm font-mono text-gray-500 mb-6"
      >
        Heuristic scoring to identify mass-generated phishing documents
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid lg:grid-cols-4 gap-3 max-w-6xl w-full mb-4"
      >
        {rules.map((r) => {
          const Icon = r.icon;
          return (
            <motion.div key={r.label} variants={item} className="glass rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-3.5 h-3.5 text-white/50" />
                <h3 className="text-xs font-semibold text-white">{r.label}</h3>
              </div>
              <div className="space-y-1.5">
                {r.items.map((i) => (
                  <div key={i.value} className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-gray-500 truncate mr-2">{i.value}</span>
                    <span className={`${scoreColor(i.score)} font-semibold shrink-0`}>{i.score}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-3 gap-3 max-w-6xl w-full"
      >
        {singleRules.map((r) => {
          const Icon = r.icon;
          return (
            <motion.div key={r.label} variants={item} className="glass rounded-xl px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon className="w-3.5 h-3.5 text-white/50 shrink-0" />
                <span className="text-[10px] font-mono text-gray-400">{r.label}</span>
              </div>
              <span className={`text-[10px] font-mono shrink-0 ml-2 ${r.yes ? "text-white/80" : scoreColor(r.match)}`}>
                {r.yes ? (
                  <><span className="text-emerald-400">{r.yes}</span> / <span className="text-alert">{r.no}</span></>
                ) : r.match}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 w-full max-w-6xl"
      >
        <div className="glass rounded-2xl px-6 py-5">
          <p className="text-[10px] font-mono text-gray-500 mb-3 text-center tracking-wider uppercase">
            Scoring Threshold
          </p>
          <div className="relative h-6 w-full rounded-full overflow-hidden bg-white/[0.04] flex">
            <div className="h-full w-[30%] bg-emerald-500/20 border-r border-emerald-500/30 flex items-center justify-center text-[9px] font-mono text-emerald-400 font-semibold">
              &lt; 3 SAFE
            </div>
            <div className="h-full w-[40%] bg-amber-500/15 border-r border-amber-500/30 flex items-center justify-center text-[9px] font-mono text-amber-400 font-semibold">
              3 – 7 UNSURE
            </div>
            <div className="h-full w-[30%] bg-alert/20 flex items-center justify-center text-[9px] font-mono text-alert font-semibold">
              7+ PHISHING
            </div>
          </div>
          <div className="flex justify-between mt-2 text-[9px] font-mono text-gray-600">
            <span>0</span>
            <span>3</span>
            <span>7</span>
            <span>20+</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
