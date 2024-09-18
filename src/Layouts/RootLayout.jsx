import {useState} from "react"
import { Header, Footer, Contact, Mobilenav } from "../components/components"
const RootLayout = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="h-full bg-zinc-900">
            <Header openModal={openModal} closeModal={closeModal} />
            <Mobilenav openModal={openModal} />

            <Contact isOpen={isModalOpen} onClose={closeModal} />
            {children}
            <Footer brandName={'Iconic Events'} />
        </div>
    )
}

export default RootLayout;