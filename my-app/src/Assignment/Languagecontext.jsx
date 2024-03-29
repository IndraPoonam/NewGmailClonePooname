import React, { createContext, useState, useContext } from 'react';

const Languagecontext = createContext();

export const useLanguageContext = () => useContext(Languagecontext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); 

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <Languagecontext.Provider value={{ language, changeLanguage }}>
      {children}
    </Languagecontext.Provider>
  );
};
export default Languagecontext;