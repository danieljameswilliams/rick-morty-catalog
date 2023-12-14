import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/HomePage/HomePage";

export const App = () => {
    return (
        <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
};