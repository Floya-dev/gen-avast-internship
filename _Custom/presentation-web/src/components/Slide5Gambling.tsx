import { motion } from "framer-motion";
import { Globe, Server, Target } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Slide5Gambling({ idx }: { idx: number }) {
  return (
    <section data-slide-idx={idx} className="slide flex flex-col items-center justify-center px-4 sm:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2"
      >
        The <span className="text-alert">Chinese Gambling</span> Cluster
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-sm font-mono text-gray-500 mb-10"
      >
        DGA-driven infrastructure mapped across 12 C2 nodes
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-3 gap-4 sm:gap-5 max-w-5xl w-full mb-8"
      >
        <motion.div variants={item} className="glass rounded-2xl p-6 sm:p-8 border-rose-500/20">
          <Globe className="w-6 h-6 text-rose-400 mb-4" />
          <h3 className="text-sm font-semibold text-white mb-2">DGA Pattern</h3>
          <p className="text-xs font-mono text-gray-400 leading-relaxed mb-3">
            Auto-generated domains following the scheme:
          </p>
          <code className="text-xs font-mono text-rose-300 bg-rose-500/10 px-3 py-2 rounded-lg block border border-rose-500/20">
            [adjective]-bet365.com.cn
          </code>
        </motion.div>

        <motion.div variants={item} className="glass rounded-2xl p-6 sm:p-8 border-amber-500/20">
          <Server className="w-6 h-6 text-amber-400 mb-4" />
          <h3 className="text-sm font-semibold text-white mb-2">TDS Infrastructure</h3>
          <p className="text-xs font-mono text-gray-400 leading-relaxed mb-3">
            Traffic direction system on non-standard port:
          </p>
          <code className="text-xs font-mono text-amber-300 bg-amber-500/10 px-3 py-2 rounded-lg block border border-amber-500/20">
            45.199.90.126:11212
          </code>
          <p className="text-[10px] font-mono text-gray-600 mt-2">
            Nginx reverse proxy hiding behind non-standard port
          </p>
        </motion.div>

        <motion.div variants={item} className="glass rounded-2xl p-6 sm:p-8 border-sky-500/20">
          <Target className="w-6 h-6 text-sky-400 mb-4" />
          <h3 className="text-sm font-semibold text-white mb-2">Payload Hub</h3>
          <p className="text-xs font-mono text-gray-400 leading-relaxed mb-3">
            Central distribution point for all malicious payloads:
          </p>
          <code className="text-xs font-mono text-sky-300 bg-sky-500/10 px-3 py-2 rounded-lg block border border-sky-500/20">
            600000[.]app
          </code>
          <p className="text-[10px] font-mono text-gray-600 mt-2">
            47 unique payloads served from this domain
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
