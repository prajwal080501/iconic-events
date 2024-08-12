import Logo from '../assets/Logo.jpeg';
import Image from "./Image";
import {motion} from 'framer-motion'
const MobileIcon = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        
        className='flex z-20 lg:hidden w-full items-center justify-center h-fit'>
            <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
            
            className="fixed top-4 mx-auto rounded-full bg-gray-500/50 backdrop-blur-lg p-2">
                <Image src={Logo} className="w-16 h-16 rounded-full" />
            </motion.div>
        </motion.div>
    )
}

export default MobileIcon;
