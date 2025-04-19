import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from ".";

type LanguageContextType = {
  locale: string;
  setLocale: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key: string) => key,
});

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const defaultLocale = getLocales()[0]?.languageCode || "en";
  const [locale, setLocale] = useState(defaultLocale);

  const i18n = useMemo(() => {
    const instance = new I18n(translations);
    instance.enableFallback = true;
    instance.locale = locale;
    return instance;
  }, [locale]);

  useEffect(() => {
    i18n.locale = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: (key: string) => i18n.t(key) }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useI18n = () => useContext(LanguageContext);
