import styles from '@/styles/Home.module.css';
import Header from "./Header";
import Footer from "./footer";
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";




const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
}


export default function Projects() {
    const control = useAnimation();

    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible")
        }

    }, [control, inView]);



    return (
        <div>

            <Header />
            <section className='flex flex-col md:flex-row justify-center gap-4 mx-10 mt-16 font-Nunito'>
                 {/******************* 1st Project *******************/}
                <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='max-w-[380px] px-10 pb-10 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
                    <div className='flex flex-row gap-4 justify-left mt-6'>
                        <Link href={"https://github.com/gaurav-2-0-0-2/Weather-App"}><FiGithub size={20} /></Link>
                        <Link href={"https://weather-app-eight-plum.vercel.app/"}><FiExternalLink size={20} /></Link>
                    </div>
                    <h1 className='text-center text-2xl font-bold mt-6 font-Comfortaa'>Weather App</h1>
                    <p className='text-center'>
                        Ask it the city and it tells you the weather.
                    </p>
                    <ul className='flex flex-row gap-3 justify-center text-[15px] sm:text-[10px] font-bold mt-4'>
                        <li>Nextjs</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </motion.div>
                  {/******************* 2nd Project **********************/}
                <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='max-w-[380px] px-10 pb-10 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
                    <div className='flex flex-row gap-4 justify-left  mt-6'>
                        <Link href={"https://github.com/gaurav-2-0-0-2/Klove"}><FiGithub size={20} /></Link>
                    </div>
                    <h1 className='text-center text-2xl font-bold mt-6 font-Comfortaa'>Klove</h1>
                    <p className='text-center'>
                        A Social Media Application for the people who loves cooking and like shaing their food-code.
                    </p>
                    <ul className='flex flex-row gap-3 justify-center text-[15px] sm:text-[10px]  font-bold mt-4'>
                        <li>Nextjs (App router)</li>
                        <li>Firebase</li>
                        <li>Tailwind CSS</li>
                    </ul>

                </motion.div>
                   {/***************** 3rd Project ****************/}
                <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='max-w-[380px] px-10 pb-10 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
                    <div className='flex flex-row gap-4 justify-left  mt-6'>
                        <Link href={"https://github.com/gaurav-2-0-0-2/MoviesDB"}><FiGithub size={20}/></Link>
                        <Link href={"https://movies-db-llon.vercel.app/"}><FiExternalLink size={20}/></Link>
                    </div>
                    <h1 className='text-center text-2xl font-bold mt-6 font-Comfortaa'>Movies DB</h1>
                    <p className='text-center'>
                        Your movies DB which fetches data from API. Its a PWA.
                    </p>
                    <ul className='flex flex-row gap-3 justify-center text-[15px] sm:text-[10px] font-bold mt-4'>
                        <li>ReactJs</li>
                        <li>Tailwind CSS</li>
                        
                    </ul>

                </motion.div>


                
            </section>

            <Footer />

        </div>
    )
} 