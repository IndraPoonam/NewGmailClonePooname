// import React, { useContext } from 'react';

// const LanguageContext = React.createContext();

// export const useLanguage = () => useContext(LanguageContext);

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = React.useState('en'); 

//   const changeLanguage = (newLanguage) => {
//     setLanguage(newLanguage);
//   };

//   return (
//     <LanguageContext.Provider value={{ language, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// const Language= () => {
//   const { language, changeLanguage } = useLanguage();

//   const handleLanguageChange = (e) => {
//     changeLanguage(e.target.value);
//   };

//   return (
//     <select value={language} onChange={handleLanguageChange}>
//       <option value="en">English</option>
//       <option value="hi">Hindi</option>
//       <option value="pa">Punjabi</option>
//       <option value="mr">Marathi</option>
//       <option value="ur">Urdu</option>
//     </select>
//   );
// };

// export default Language;



import React, { useState } from 'react';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(); 

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>      <label htmlFor="language">Select Language:</label>

      <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        <option value="Hindi">Hindi</option>
        <option value="Marathi">Marathi</option>
      </select>
      <p>Selected Language: {selectedLanguage}</p>
    </div>
  );
};

export default Language;