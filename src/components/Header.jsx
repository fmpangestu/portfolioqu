import React, { useState, useEffect } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import GoogleTranslateButton from './GoogleTranslate';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScroppTop, setLastScroppTop] = useState(0);
    const [isDark, setIsDark] = useState(() => {
        const saveMode = localStorage.getItem('darkMode');
        return saveMode ? JSON.parse(saveMode) : true;
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDarkMode = () => {
        const newMode = !isDark;
        setIsDark(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
        if (newMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDownload = (lang) => {
        const url = lang === 'en' ? '/resume_en.pdf' : '/resume_id.pdf';
        window.open(url, '_blank');
        closeModal();
    };

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.target.id !== 'hamburger' && e.target.id !== 'nav-menu') {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.pageYOffset || document.documentElement.scrollTop;
            if (show > lastScroppTop) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            setLastScroppTop(show <= 0 ? 0 : show);
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [lastScroppTop]);

    return (
        <header className={`bg-transparent absolute top-0 left-0 w-full items-center flex z-10 ${isScrolled ? 'navbar-fixed' : ''} `}>
            <div className="container my-[-8px]">
                <div className="flex justify-between items-center relative">
                    <div className="px-4">
                        <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-primary dark:text-[#CCCCCC] font-bold text-2xl block py-6">
                            farhn<span className="text-secondary dark:text-[#333333]">Dev</span>
                        </a>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" onClick={toggleMenu} type="button" className={`block absolute right-4 lg:hidden w-[40px] h-[40px] ${isOpen ? 'hamburger-active' : ''}`}>
                            <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                        </button>
                        <nav id="nav-menu" className={`${isOpen ? '' : 'hidden'} absolute py-4 top-full max-w-[250px] -right-5 bg-white shadow-lg rounded-lg w-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-dark lg:dark:bg-transparent`} onClick={toggleMenu}>
                            <ul className="block lg:flex">
                                <li className="group"><a href="#home" className="navbar-list group-hover:text-[#CCCCCC] dark:text-white">Beranda</a></li>
                                <li className="group"><a href="#about" className="navbar-list group-hover:text-[#CCCCCC] dark:text-white">Tentang Saya</a></li>
                                <li className="group"><a href="#portfolio" className="navbar-list group-hover:text-[#CCCCCC] dark:text-white">portfolio</a></li>
                                <li className="group"><a href="#experience" className="navbar-list group-hover:text-[#CCCCCC] dark:text-white">Pengalaman</a></li>
                                <li className="group"><a href="#certificate" className="navbar-list group-hover:text-[#CCCCCC] dark:text-white">Sertifikat</a></li>
                                <li className="group"><a href="#contact" className="navbar-list group-hover:text-[#CCCCCC] dark:text-white">Kontak</a></li>
                                <li className="mt-3 lg:mt-0 flex pl-8 items-center">
                                    <input type="checkbox" id="dark-toggle" className="hidden" checked={isDark} onChange={handleDarkMode} />
                                    <label htmlFor="dark-toggle">
                                        <div className="flex h-5 w-9 cursor-pointer items-center bg-slate-400 rounded-full dark:bg-white">
                                            <div className="toggle-circle h-5 w-5 rounded-full bg-white transition duration-300 ease-in-out dark:bg-dark"></div>
                                        </div>
                                    </label>
                                </li>
                                {/* <li className="mt-3 lg:mt-0 flex pl-8 items-center">
                                    <GoogleTranslateButton />
                                </li> */}
                                <li className="lg:mt-0 items-center flex">
                                    <button onClick={openModal} className="px-4 py-1 ml-4 rounded-full border border-dark dark:border-white dark:text-white font-base text-sm hidden lg:block">resume</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 h-[100vh] flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg" data-aos="zoom-in">
                        <div className="flex justify-center items-center gap-3">
                            <h2 className="text-lg font-bold mb-4 dark:text-white">selectLanguage</h2>
                            <button onClick={closeModal} className="mb-3 text-red-500">
                                <IoMdCloseCircle size={29}/>
                            </button>
                        </div>
                        <div className="flex justify-between gap-3">
                            <button onClick={() => handleDownload('en')} className="px-4 py-2 bg-primary text-white rounded">english</button>
                            <button onClick={() => handleDownload('id')} className="px-4 py-2 bg-primary text-white rounded">indonesia</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
