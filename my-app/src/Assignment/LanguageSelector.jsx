import React from 'react';
import { useLanguageContext } from './Languagecontext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguageContext();

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option >English</option>
      <option >French</option>
      <option >Spanish</option>
      <option >Hindi</option>
      <option >Punjabi</option>
      <option >Urdu</option>
    </select>
  );
};

export default LanguageSelector;
