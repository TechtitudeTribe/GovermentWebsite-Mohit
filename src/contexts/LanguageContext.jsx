import { createContext, useEffect, useState } from "react";

const LanguageContext = createContext();
/*eslint-disable-next-line react/prop-types*/
function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "english");
  useEffect(()=>{
    if(language !=='english' && language!=='hindi'){
      setLanguage("english")
      localStorage.setItem('language',"english")
      return 
    }
    localStorage.setItem('language',language)
  },[language])
  return (
    <LanguageContext.Provider value={{ language, setLanguage }} >
      {children}
    </LanguageContext.Provider>
  );
}

export {LanguageContext,LanguageProvider}