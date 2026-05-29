import { motion } from "framer-motion";

const defangedDomains = [
  "vellum[.]fund",
  "sonhaberleri255[.]shop",
  "secure-avast-alert[.]com",
  "tiktok-verify-login[.]info",
  "lovable-ai-panel[.]net",
  "meta-business-center[.]tk",
  "paypal-secure-check[.]xyz",
  "google-docs-verify[.]me",
  "netflix-billing-update[.]co",
  "amazon-account-claim[.]com",
  "instagram-verif-badge[.]xyz",
  "microsoft-365-auth[.]info",
  "quishing-qr-scan[.]net",
  "linkedin-security-check[.]tk",
  "bet365-win-adjective[.]cn",
  "600000[.]app",
  "c2-panel[.]net",
];

const doubled = [...defangedDomains, ...defangedDomains];

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Slide1Hero({ idx }: { idx: number }) {
  return (
    <section data-slide-idx={idx} className="slide flex flex-col items-center justify-center text-center px-4 scan-line">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
        <div className="animate-scroll-vertical">
          {doubled.map((d, i) => (
            <p key={i} className="text-xs font-mono text-gray-500 leading-9 tracking-wider whitespace-nowrap">
              {d}
            </p>
          ))}
        </div>
      </div>

      <motion.p
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className="relative text-xs font-mono tracking-[0.35em] uppercase text-gray-500 mb-6"
      >
        Avast Cybersecurity Internship &mdash; Research Presentation
      </motion.p>

      <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={variants}>
        <h1 className="relative text-5xl sm:text-7xl lg:text-8xl font-bold tracking-widest text-white select-none leading-none">
          <span className="relative">
            PHISH_
            <br className="sm:hidden" />
            DECODE
            <span className="text-alert neon-glow" style={{ textShadow: "0 0 40px rgba(255,77,77,0.3)" }}>_2026</span>
          </span>
        </h1>
      </motion.div>

      <motion.p
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className="relative mt-6 max-w-xl text-gray-400 text-sm sm:text-base leading-relaxed"
      >
        Phishing hunting and detection @ Gen / Avast
      </motion.p>

      <motion.div
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className="relative mt-8 glass rounded-xl px-4 py-2.5 flex items-center gap-3 border-white/[0.06]"
      >
        <img
          src="https://avatars.githubusercontent.com/Floya-dev?s=48"
          alt="Floya-dev avatar"
          className="w-8 h-8 rounded-full ring-1 ring-white/20"
        />
        <div className="text-left">
          <p className="text-xs font-semibold text-white">Floya-dev</p>
          <p className="text-[10px] font-mono text-gray-500">github.com/Floya-dev</p>
        </div>
      </motion.div>
    </section>
  );
}
