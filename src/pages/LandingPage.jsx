import { useState, useRef, useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import MyComponent from "../components/TypingText";
// import Typed from 'react-typed'; // Correct import for react-typed

export default function LandingPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const typedRef = useRef(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDownload = (language) => {
        const url = language === 'en' ? '/resume_en.pdf' : '/resume_id.pdf';
        window.open(url, '_blank');
        closeModal();
    };

    return (
        <section className={'pt-24 lg:pt-48 pb-12 dark:bg-[#1A1A1A]'} id={'home'}>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2"
                        data-aos="fade-right"
                        data-aos-anchor="#example-anchor"
                    >
                        <h1 className={'text-base font-semibold text-primary dark:text-[#e5e5e5] md:text-xl'}>
                            Hai Apa Kabar 👋 saya <span className={'block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white'}>Farhan Maulana Pangestu</span>
                        </h1>
                        <h2 className={'font-medium text-lg mb-5 text-secondary lg:text-2xl dark:text-[#414040]'}>
                            {/* <Typed
                                strings={['Junior Web Developer', 'JavaScript Developer', 'Laravel Developer']}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                                ref={typedRef} // Set ref for Typed
                            /> */}
                            <MyComponent style={{backgroundColor:'transparent'}} />
                        </h2>
                        <p className={'font-medium text-secondary mb-10 leading-relaxed dark:text-[#333333]'}>
                            Terkadang merasa lelah itu wajar, tetapi ingat kata menyerah itu <span className={'text-dark font-bold dark:text-white'}>Kurang BELAJAR!</span>
                        </p>
                        <div className="flex gap-2">
                            <a href="#contact" className={'text-[12px] font-semibold text-white dark:text-[#1A1A1A] py-3 px-8 bg-dark dark:bg-[#CCCCCC] hover:opacity-75 rounded-full transition duration-300 ease-in-out'}>
                                Hubungi Saya
                            </a>
                            <button onClick={openModal} className={'text-[12px] font-semibold text-dark py-3 px-8 border dark:text-white border-dark dark:border-white rounded-full lg:hidden'}>
                                Resume
                            </button>
                        </div>
                    </div>
                    <div className={'w-full self-end px-4 lg:w-1/2'} data-aos="fade-left" data-aos-anchor="#example-anchor">
                        <div className={'relative lg:mt-[-140px] lg:right-0'}>
                            <img src="/img/35.png" alt="" className={'relative max-w-[400px] mx-auto brightness-110 object-cover z-10 right-0 sm:right-0 top-16 lg:top-10'} />
                            <span className={'absolute -bottom-20 left-1/2 -translate-x-1/2 lg:scale-110'}>
                                <svg width={'400'} height={'400'} viewBox="0 0 200 200" className="fill-[#222222] dark:fill-[#CCCCCC]" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M49.9,-64.8C64.2,-58.4,74.7,-43.1,77.7,-26.9C80.6,-10.8,75.9,6.2,70.6,23.2C65.4,40.1,59.6,57.1,47.8,66.7C35.9,76.2,18,78.4,1.5,76.3C-15,74.3,-30,68.2,-43.3,59.1C-56.5,49.9,-68,37.9,-72.9,23.5C-77.8,9.1,-76.2,-7.5,-68.9,-20C-61.6,-32.5,-48.6,-40.8,-36.2,-47.7C-23.8,-54.6,-11.9,-60.2,3,-64.3C17.9,-68.4,35.7,-71.1,49.9,-64.8Z" transform="translate(100 100) scale(1)" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg" data-aos="zoom-in">
                        <div className="flex justify-center items-center gap-3">
                            <h2 className="text-lg font-bold mb-4 dark:text-white">Pilih Bahasa Resume</h2>
                            <button onClick={closeModal} className="mb-3 text-red-500">
                                <IoMdCloseCircle size={29} />
                            </button>
                        </div>
                        <div className="flex justify-between gap-3">
                            <button onClick={() => handleDownload('en')} className="px-4 py-2 bg-primary text-white rounded">English</button>
                            <button onClick={() => handleDownload('id')} className="px-4 py-2 bg-primary text-white rounded">Indonesia</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
