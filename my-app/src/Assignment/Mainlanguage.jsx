
import React from 'react';
import { LanguageProvider } from './Languagecontext';
import LanguageSelector from './LanguageSelector';

function Mainlanguage() {
  return (
    <LanguageProvider>
     <center> <div className="App">
        <h1>Language Selector Example</h1>
        <LanguageSelector />
      </div></center>
    </LanguageProvider>
  );
}

export default Mainlanguage;
