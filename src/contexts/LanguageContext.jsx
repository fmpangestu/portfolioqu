/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';
import i18n from '../components/i18n';

// Buat context bahasa default
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const changeLanguage = (lang) => {
        setCurrentLanguage(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
