import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            home: 'Home',
            about: 'About Me',
            portfolio: 'Portfolio',
            experience: 'Experience',
            certificate: 'Certificate',
            contact: 'Contact',
            resume: 'Resume',
            selectLanguage: 'Select Resume Language',
            english: 'English',
            indonesia: 'Indonesia',
        },
    },
    id: {
        translation: {
            home: 'Beranda',
            about: 'Tentang Saya',
            portfolio: 'Portfolio',
            experience: 'Pengalaman',
            certificate: 'Sertifikat',
            contact: 'Kontak',
            resume: 'Resume',
            selectLanguage: 'Pilih Bahasa Resume',
            english: 'Inggris',
            indonesia: 'Indonesia',
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Bahasa default
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
