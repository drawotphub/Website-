import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import VoiceAgent from "../components/VoiceAgent";
function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-fithub-black text-white min-h-screen flex items-center justify-center"
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-fithub-gold tracking-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <a
            href="https://instagram.com/aesthetic.illusionist"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-fithub-gold text-fithub-black px-8 py-3 rounded-full hover:bg-yellow-600 font-sans text-lg font-semibold transition-colors"
          >
            {t("hero.cta")}
          </a>
        </div>
      </motion.section>
      <VoiceAgent />
    </div>
  );
}
export default Home;
