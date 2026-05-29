import { motion } from "framer-motion";
import { ArrowRight, FileType, FileArchive, QrCode, Globe, Search } from "lucide-react";

const pipelineSteps = [
  { label: "DOCX", icon: FileType },
  { label: "ZIP Extract", icon: FileArchive },
  { label: "QR Decode", icon: QrCode },
  { label: "IP Resolve", icon: Globe },
  { label: "PhishStats", icon: Search },
];

const pipelineSteps2 = [
  { label: "DOCX", icon: FileType },
  { label: "Metadata", icon: Search },
  { label: "Author", icon: Search },
];

const pipelineSteps3 = [
  { label: "DOCX", icon: FileType },
  { label: "Metadata", icon: Search },
  { label: "Creation x Modify date", icon: Search },
];

const pipelineSteps4 = [
  { label: "DOCX", icon: FileType },
  { label: "Metadata", icon: Search },
  { label: "Score", icon: Search },
];

const datasetComparison = [
  { name: "Dataset 1", files: "9,600", stat: "1,068 (≅11%)", author: "804 (≅8%)", date: "1,141 (≅12%)", mod: "3568 (≅37%)", obs: "≅6,000+" },
  { name: "Dataset 2", files: "853", stat: "139 (≅16%)", author: "739 (≅86%)", date: "703 (≅82%)", mod: "764 (≅90%)", obs: "≅800+" },
  { name: "Dataset 3", files: "1003", stat: "N/A", author: "120 (≅12%)", date: "264 (≅26%)", mod: "434 (≅43%)", obs: "N/A" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Slide6Quishing({ idx }: { idx: number }) {
  return (
    <section data-slide-idx={idx} className="slide flex flex-col items-center justify-center px-4 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2"
      >
        Mass Quishing Analysis
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-sm font-mono text-gray-500 mb-8"
      >
        The 10k Pipeline &mdash; Automated DOCX-to-Threat-Intel
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <motion.div variants={item} className="flex flex-col gap-2 mb-4 w-full">
          <div className="glass rounded-xl p-2 sm:p-3 overflow-x-auto flex items-center justify-center">
            <div className="flex items-center gap-2 sm:gap-3 min-w-max">
              {pipelineSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-gray-300" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono text-gray-400 whitespace-nowrap">
                        {step.label}
                      </span>
                    </div>
                    {i < pipelineSteps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-gray-700 shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass rounded-xl p-2 sm:p-3 overflow-x-auto flex items-center justify-center">
            <div className="flex items-center gap-2 sm:gap-3 min-w-max">
              {pipelineSteps2.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-gray-300" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono text-gray-400 whitespace-nowrap">
                        {step.label}
                      </span>
                    </div>
                    {i < pipelineSteps2.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-gray-700 shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass rounded-xl p-2 sm:p-3 overflow-x-auto flex items-center justify-center">
            <div className="flex items-center gap-2 sm:gap-3 min-w-max">
              {pipelineSteps3.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-gray-300" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono text-gray-400 whitespace-nowrap">
                        {step.label}
                      </span>
                    </div>
                    {i < pipelineSteps3.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-gray-700 shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass rounded-xl p-2 sm:p-3 overflow-x-auto flex items-center justify-center">
            <div className="flex items-center gap-2 sm:gap-3 min-w-max">
              {pipelineSteps4.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-gray-300" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono text-gray-400 whitespace-nowrap">
                        {step.label}
                      </span>
                    </div>
                    {i < pipelineSteps3.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-gray-700 shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="glass rounded-2xl overflow-hidden">
          <div className="grid grid-cols-7 text-[10px] font-mono text-gray-500 px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <span>Dataset</span>
            <span>Files</span>
            <span>PhishStats</span>
            <span>Author</span>
            <span>Creation x Modify date</span>
            <span>Score system (v1)</span>
            <span>Observed</span>
          </div>
          {datasetComparison.map((d) => (
            <div
              key={d.name}
              className="grid grid-cols-7 text-xs font-mono px-5 py-4 border-b border-white/[0.04] last:border-0"
            >
              <span className="text-white font-semibold">{d.name}</span>
              <span className="text-gray-300">{d.files}</span>
              <span className="text-alert">{d.stat}</span>
              <span className="text-sky-400">{d.author}</span>
              <span className="text-amber-400">{d.date}</span>
              <span className="text-emerald-400">{d.mod}</span>
              <span className="text-purple-400">{d.obs}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section >
  );
}
