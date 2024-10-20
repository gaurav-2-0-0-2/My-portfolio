import { FiGithub, FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export default function Projects() {
	
    return (
        <div className="font-JetBrainsMono">
            <section className='flex flex-col md:flex-row justify-center gap-4 mx-10 mt-16  text-[#d1d0d0]'>
                 {/******************* 1st Project *******************/}
                <div className='css-card-tile-cyan max-w-[380px] px-6  pb-10 rounded-lg'>
                    <div className='flex flex-row gap-4 justify-left mt-6'>
                        <Link href={"https://github.com/gaurav-2-0-0-2/DuckMart"}><FiGithub size={20} /></Link>
                    </div>
                    <h1 className='text-center text-2xl font-bold mt-6 '>Duck Mart</h1>
                    <p className='text-left'>
	    		• API endpoint for segmentaion usecases<br/>
                        • Data loaded into Duckdb<br/>
                        • Consumer can convert the JSON into SQL<br/>
                    </p>
                    <ul className='flex flex-row gap-3 justify-center text-[15px] sm:text-[10px] font-bold mt-4'>
                        <li>Python</li>
                        <li>Duck DB</li>
                    </ul>
                </div>
                  {/******************* 2nd Project **********************/}
                <div className='css-card-tile-blue max-w-[380px] px-10 pb-10 rounded-lg'>
                    <div className='flex flex-row gap-4 justify-left  mt-6'>
                        <Link href={"https://github.com/gaurav-2-0-0-2/suvidha-client"}><FiGithub size={20} /></Link>
                    </div>
                    <h1 className='text-center text-2xl font-bold mt-6 '>Suvidha</h1>
                    <p className='text-center'>
                        Suvidha aims to solve the issue exists in traditional way of distribution of ration by digitizing it and giving the control to the customer
                    </p>
                    <ul className='flex flex-row gap-3 justify-center text-[15px] sm:text-[10px]  font-bold mt-4'>
                        <li>Nextjs (App router)</li>
                        <li>Typescript</li>
                        <li>Tailwind CSS</li>
                        <li>Postgresql</li>
                    </ul>
                </div>
            </section>
        </div>
    )
} 
