import i18next from "i18next";
import { initReactI18next } from "react-i18next";
i18next.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: {
        "hero.title": "Transform with FastFitHub",
        "hero.subtitle": "Led by Kashish Wadhwa, 15,000+ transformations.",
        "hero.cta": "Join Now"
      }
    }
  }
});
