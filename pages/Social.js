import styles from '@/styles/Home.module.css'
// import React from 'react';
import { FaLinkedin, FaTwitter, FaTelegram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
}

export default function Social() {
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
        <motion.div ref={ref} variants={boxVariant} initial='hidden' animate={control} className='flex gap-7 justify-center overflow-x-auto'>
            <div className='sm:py-1 sm:px-1 px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
                <a href=""><FaTwitter size={20} /></a>
            </div>
            <div className='sm:py-1 sm:px-1 px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
                <a href=""><FaGithub size={20} /></a>
            </div>
            <div className='sm:py-1 sm:px-1 px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
                <a href=""><FaInstagram size={20} /></a>
            </div>
            <div className='sm:py-1 sm:px-1 px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
                <a href=""><FaLinkedin size={20} /></a>
            </div>
            <div className='sm:py-1 sm:px-1 px-1 py-1 md:py-4 md:px-4 md:gap-10  md:m-10 bg-gradient-to-tr from-blue-200 to-red-200  rounded-lg'>
                <a href=""><FaTelegram size={20} /></a>
            </div>
        </motion.div>
    )
}