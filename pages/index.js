import styles from '@/styles/Home.module.css'
import Projects from '../pages/projects.js'
import Contact from "../pages/contact.js";
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa"
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

// https://rxresu.me/gauravtak996/gaurav-tak //Resume link

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 }
}

export default function Home() {
   
  const router = useRouter();

  const control = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible")
    }
    else {
      control.start("hidden")
    }

  }, [control, inView]);




  return (
    <div>
      <div>
        <ul className='flex flex-row justify-center '>
          <Link href="/"><li className='ml-3 p-2 text-white hover:text-fuchsia-400 font-extrabold text-[15px] lg:text-[20px]' >Home</li></Link>
          <Link href="/projects"><li className='ml-3 p-2 text-white hover:text-fuchsia-400 font-extrabold text-[15px] lg:text-[20px]' >Projects</li></Link>
          <Link href="/contact"><li className='ml-3 p-2 text-white hover:text-fuchsia-400 font-extrabold text-[15px] lg:text-[20px]'>Contact</li></Link>
        </ul>
      </div>


      <div className='flex text-center md:text-left min-h-[55vh]'>
        <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className='basis-[40%] py-12 px-10 m-10 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
          <div className=" text-zinc-800 font-sans">
            <img className=' shadow-2xl lg:mx-4 mx-auto w-20 rounded-full' src="https://www.meme-arsenal.com/memes/5ee99d558641255d6e670bbd54953397.jpg" alt="flower" />
            <div className='lg:flex ml-5 lg:flex-col'>
              <h1 className='lg:mt-5 text-3xl font-bold'>Hi, This is Gaurav</h1>
              <p className='lg:pr-40 lg:mb-4 mt-4'>A Frontend Web Developer</p>
            </div>

          </div>

          
          {/* */}

        </motion.div>
        <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className=' py-10 px-12 my-10 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
          <div className=" text-zinc-800 font-sans">
            <div className='lg:flex ml-2 lg:flex-col'>
              <HiOutlineClipboardDocumentList size={80}/>
              <h1 className='lg:mt-5 mb-5 text-3xl font-bold'>See My Resume</h1>
              
              <button type='button' onClick={()=> router.push('/resume')} className='transition-all ease-in-out shadow-xl rounded-xl hover:translate-y-2 duration-300 hover:scale-100 hover:rounded-3xl hover:bg-gradient-to-tr from-pink-400 to-red-400 mt-10 lg:m-0 lg:w-[120px] bg-gray-800 text-lg text-gray-200 px-4 py-2'>Resume</button>
            </div>

          </div>

          
          {/* */}

        </motion.div>

        <motion.div ref={ref} variants={boxVariant} initial="hidden" animate={control} className=' py-14 px-20 my-10 ml-10 bg-gradient-to-tr from-pink-200 via-violet-300 to-red-300 rounded-lg'>
          <div className=" text-zinc-800 font-sans">
            <div className='lg:flex ml-2 lg:flex-col'>
              <FaTwitter size={100}/>
              <button type='button' onClick={()=> router.push('/twitter')} className='transition-all ease-in-out shadow-xl hover:translate-y-2 duration-300 hover:scale-100 hover:bg-gradient-to-tr from-pink-400 to-red-400 mt-10 lg:m-0 lg:w-[120px] bg-gray-800 text-lg text-gray-200 px-4 py-2'><FaTwitter/></button>
            </div>

          </div>

          
          {/* */}

        </motion.div>
       
      </div>
      {/* Projects Section */}
      
      <div>
        <Contact />
      </div>

    </div>

















  )
}


// random code ignore ----------------------- 


{/* <div className="flex relative bg-neutral-800 rounded-xl"> */ }
{/* Navbar division  */ }
{/* <nav className='w-96 mt-10 mb-10 mr-20 flex justify-evenly absolute top-0 right-0 rounded-full'>
          <ul className='flex flex-row '>
            <li className='ml-3 p-2 text-white'><a href="#">Home</a></li>
            <li className='ml-3 p-2 text-white'><a href="#">About</a></li>
            <li className='ml-3 p-2 text-white'><a href="#">Contact</a></li>
          </ul>
        </nav> */}
{/* Intro division  */ }
// <div className=''>
{/* <img className='' src="https://www.meme-arsenal.com/memes/5ee99d558641255d6e670bbd54953397.jpg" alt="flower" /> */ }
// </div>

// <div className=''>

{/* <h1 className=''>Hi, I'm Gaurav Tak</h1> */ }
{/* <p className='text-white'>A Frontend Web Developer</p>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nulla repellendus totam eligendi temporibus culpa inventore sit eveniet quas cum nesciunt, dolorem itaque quos perferendis sapiente delectus minus ex nemo!</p> */}
      //   </div>



      // </div>