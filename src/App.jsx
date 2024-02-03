import { Routes, Route } from "react-router-dom";
import ContentPage from "./pages/ContentPage.jsx";

export default function App() {
    return (
            <>
                <Routes>
                    <Route path="/" element={<ContentPage/>} />
                </Routes>
            </>
    )
}