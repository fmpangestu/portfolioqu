import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContentPage from "./pages/ContentPage.jsx";

export default function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
            <>
                <Routes>
                    <Route path="/" element={<ContentPage/>} />
                </Routes>
            </>
    )
}