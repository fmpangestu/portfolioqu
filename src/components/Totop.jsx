import {useEffect, useState} from "react";

export default function Totop() {
    const [toTop,setToTop] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const checkScrollTop = () => {
        if (!toTop && window.pageYOffset > 0){
            setToTop(true)
        } else if (toTop && window.pageYOffset <= 0){
            setToTop(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [checkScrollTop, toTop]);

    return (
        <>
            <a href="#" className={`fixed bottom-4 right-4 z-[9999]  ${toTop ? 'flex' : 'hidden'} h-14 w-14 items-center justify-center rounded-full bg-primary p-4 transition duration-500 animate-bounce dark:bg-white `} id={'to-top'}>
                <span className={'mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2 dark:border-dark'}></span>
            </a>
        </>
    )
}