import React, { useEffect, useRef } from 'react';

const GoogleTranslate = () => {
    const googleTranslateRef = useRef(null);

    useEffect(() => {
        let intervalId;
        const checkGoogleTranslate = () => {
            if (window.google && window.google.translate) {
                clearInterval(intervalId);
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'id',
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        includedLanguages: 'en,id,ja',
                    },
                    googleTranslateRef.current
                );
            }
        };

        intervalId = setInterval(checkGoogleTranslate, 100);
        return () => clearInterval(intervalId); // Clear interval on unmount
    }, []);

    useEffect(() => {
        // Custom CSS untuk menyembunyikan elemen yang tidak diperlukan dan mengatur dropdown bahasa
        const style = document.createElement('style');
        style.innerHTML = `
            .goog-logo-link {
                display: none !important;
            }
            .goog-te-gadget .goog-te-gadget-simple {
                display: flex !important;
                align-items: center;
                height: 20px !important;
            }
            .goog-te-gadget-simple > img {
                display: none !important;
            }
            .goog-te-gadget-simple > div {
                display: none !important;
            }
            .goog-te-gadget-simple .goog-te-combo {
                background-color: #ffffff !important;
                color: #000000 !important;
                border: 1px solid #ccc !important;
                border-radius: 4px !important;
                padding: 5px 8px !important;
                font-size: 14px !important;
                line-height: 1.5 !important;
                height: auto !important;
                box-shadow: none !important;
                transition: none !important;
                width: auto !important;
            }
            .goog-te-gadget-simple .goog-te-combo option {
                display: none; /* Sembunyikan opsi bahasa individu */
            }
            .skiptranslate, iframe{
                
            }
            
        `;
        document.head.appendChild(style);
    }, []);

    return (
        <div>
            <div id="google_translate_element" ref={googleTranslateRef}></div>
        </div>
    );
};

export default GoogleTranslate;


// import React, { useRef, useEffect } from 'react';

// const GoogleTranslateCustom = () => {
//     const googleTranslateRef = useRef(null);
//     const selectLanguageRef = useRef(null);

//     useEffect(() => {
//         let intervalId;
//         const checkGoogleTranslate = () => {
//             if (window.google && window.google.translate) {
//                 clearInterval(intervalId);

//                 // Inisialisasi Google Translate API dengan opsi bahasa yang diinginkan
//                 const googleTranslate = new window.google.translate.TranslateElement(
//                     {
//                         pageLanguage: 'id', // Bahasa halaman (opsional)
//                         layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//                         autoDisplay: false, // Nonaktifkan tampilan terjemahan otomatis
//                     },
//                     googleTranslateRef.current
//                 );

//                 // Fungsi untuk menerjemahkan teks
//                 const translateText = (text, targetLanguage) => {
//                     googleTranslate.showBanner(false); // Sembunyikan banner iklan (opsional)
//                     googleTranslate.translate(text, targetLanguage);
//                 };

//                 // Event listener untuk perubahan dropdown bahasa
//                 selectLanguageRef.current.addEventListener('change', (event) => {
//                     const selectedLanguage = event.target.value;
//                     const textToTranslate = 'Teks yang ingin Anda terjemahkan'; // Ganti dengan teks yang ingin Anda terjemahkan
//                     translateText(textToTranslate, selectedLanguage);
//                 });
//             }
//         };

//         intervalId = setInterval(checkGoogleTranslate, 100);
//         return () => clearInterval(intervalId); // Bersihkan interval saat komponen dibongkar
//     }, []);

//     return (
//         <div>
//             {/* Dropdown untuk memilih bahasa */}
//             <select id="select-language" ref={selectLanguageRef}>
//                 <option value="en">English</option>
//                 <option value="id">Indonesian</option>
//                 {/* Tambahkan opsi bahasa lain yang diinginkan di sini */}
//             </select>


//             {/* Kontainer untuk Google Translate widget */}
//             {/* <div id="google_translate_element" ref={googleTranslateRef}></div> */}
//         </div>
//     );
// };

// export default GoogleTranslateCustom;
