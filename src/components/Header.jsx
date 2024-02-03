import {useEffect, useState} from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [lastScroppTop, setLastScroppTop] = useState(0)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            const show = window.pageXOffset || document.documentElement.scrollTop ;
            if (show > lastScroppTop) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
            setLastScroppTop(show <= 0 ? 0 : show);
        }

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, [lastScroppTop]);

    return (
        <header
            className={`bg-transparent absolute top-0 left-0 w-full items-center flex z-10 ${isScrolled ? 'navbar-fixed' : ''} `}>
            <div className="container">
                <div className="flex justify-between items-center relative">
                    <div className={'px-4'}>
                        <a href="#" className={'text-primary font-bold text-2xl block py-6'}>farhn<span
                            className={'text-secondary'}>Dev</span></a>
                    </div>
                    <div className="flex items-center px-4">
                        <button id={'hamburger'} onClick={toggleMenu} type={'button'}
                                className={`block absolute right-4 lg:hidden ${isOpen ? 'hamburger-active' : ''}`}>
                            <span
                                className={'hamburger-line origin-top-left transition duration-300 ease-in-out'}></span>
                            <span className={'hamburger-line transition duration-300 ease-in-out'}></span>
                            <span
                                className={'hamburger-line origin-bottom-left transition duration-300 ease-in-out'}></span>
                        </button>
                        <nav id={'nav-menu'}
                             className={`${isOpen ? '' : 'hidden'} absolute py-4 top-full max-w-[250px] -right-5 bg-white shadow-lg rounded-lg w-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
                             onClick={toggleMenu}>
                            <ul className={'block lg:flex'}>
                                <li  className={'group'}>
                                    <a href="#home"
                                       className={'navbar-list group-hover:text-primary '}>Beranda</a>
                                </li>
                                <li  className={'group'}>
                                    <a href="#about"
                                       className={'navbar-list group-hover:text-primary '}>Tentang Saya</a>
                                </li>
                                <li  className={'group'}>
                                    <a href="#portfolio"
                                       className={'navbar-list group-hover:text-primary '}>Portfolio</a>
                                </li>
                                <li  className={'group'}>
                                    <a href="#experience"
                                       className={'navbar-list group-hover:text-primary '}>Experience</a>
                                </li>
                                <li  className={'group'}>
                                    <a href="#certificate"
                                       className={'navbar-list group-hover:text-primary '}>Certificate</a>
                                </li>
                                <li  className={'group'}>
                                    <a href="#contact"
                                       className={'navbar-list group-hover:text-primary '}>Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
