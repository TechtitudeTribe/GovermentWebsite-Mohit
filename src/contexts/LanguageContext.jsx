import { createContext, useEffect, useState } from "react";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "hindi");
  useEffect(()=>{
    localStorage.setItem('language',language)
  },[language])
  return (
    <LanguageContext.Provider value={{ language, setLanguage }} >
      {children}
    </LanguageContext.Provider>
  );
}

export {LanguageContext,LanguageProvider}