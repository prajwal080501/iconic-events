import React from 'react'
import { motion } from 'framer-motion';
import Logo from './Logo'
import { navMenu } from '../data/data'
import Button from './Button'
import { CgMenuLeftAlt } from "react-icons/cg";

const Header = ({ openModal, handleComponent }) => {

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}

      className="hidden lg:flex fixed top-0 lg:w-[50%] lg:mx-auto mt-6 left-0 right-0 z-10 text-white px-5 py-2 items-center bg-black/40 backdrop-blur-lg bg-opacity-30 h-fit justify-between rounded-3xl">
      <div className='flex items-center'>
        <Logo brand={'Iconic Events'} />
      </div>
      <div className='hidden lg:inline-flex gap-14 px-6 items-center'>
        {navMenu.map((item, index) => (
          <p onClick={() => {
            handleComponent(item.name)
          }} key={index} className='text-white hover:text-orange-300 duration-200 ease font-medium cursor-pointer'>{item.menuName}</p>
        ))}
      </div>
      <div className='hidden lg:flex items-center'>
        <Button onClick={openModal} className="text-normal font-bold hover:bg-blue-600 duration-200 hover:scale-105 p-2 rounded-lg bg-blue-500" btnText={'Get a quote'} />
      </div>
    </motion.nav>
  )
}

export default Header
