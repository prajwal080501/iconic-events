import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from "../Layouts/RootLayout"
import App from "../App";

import { Services, Gallery, Contact } from "../pages/pages"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RootLayout><App /></RootLayout>} />
                <Route path="/services" element={<RootLayout><Services /></RootLayout>} />
                <Route path="/gallery" element={<RootLayout><Gallery /></RootLayout>} />
                <Route path="/contact" element={<RootLayout><Contact /></RootLayout>} />
            </Routes>
        </Router>
    )
}

export default AppRouter;