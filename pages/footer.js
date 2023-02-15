import styles from '@/styles/Home.module.css'
// import React from 'react';
import { FaLinkedin, FaTwitter, FaTelegram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
// import { useLayoutEffect } from 'react';


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }},
  hidden: { opacity: 0, scale: 0 }
}







export default function Contact() {

  const control = useAnimation()

  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView])





  return (
    <div className='text-center mt-20'>
    <h1 className=' text-fuchsia-700 font-bold text-[25px] md:text-[30px] mb-12'>Portfolio</h1>
      <motion.div ref={ref} variants={boxVariant} initial='hidden' animate={control} className='flex gap-7 justify-center overflow-x-auto'>
        <div className='px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 sm:py-4 sm:px-4 sm:gap-4 sm:m-4  bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
          <a href=""><FaTwitter size={20} /></a>
        </div>
        <div className='px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 sm:py-4 sm:px-4 sm:gap-4 sm:m-4  bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
          <a href=""><FaGithub size={20} /></a>
        </div>
        <div className='px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 sm:py-4 sm:px-4 sm:gap-4 sm:m-4  bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
          <a href=""><FaInstagram size={20} /></a>
        </div>
        <div className='px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 sm:py-4 sm:px-4 sm:gap-4 sm:m-4  bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
          <a href=""><FaLinkedin size={20} /></a>
        </div>
        <div className='px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 sm:py-4 sm:px-4 sm:gap-4 sm:m-4  bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
          <a href=""><FaTelegram size={20} /></a>
        </div>
      </motion.div>


      {/* bg-gradient-to-tr from-red-500 via-pink-200 to-red-600 */}

      <section className='md:flex my-4 text-center md:justify-center md:gap-4'>
        <h2 className=' text-white mt-16 mb-6 md:my-0'>copyright @ 2023</h2>
        <p className=' text-white mb-7'>Created by <span className=' text-fuchsia-600'>Gaurav Tak</span></p>
      </section>


    </div>
  )
}