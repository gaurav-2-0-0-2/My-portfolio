import Link from "next/link";
// import { useLayoutEffect } from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className='text-center'>
      <section className='md:flex my-4 text-center md:justify-center md:gap-4 font-JetBrainsMono'>
        <h2 className=' text-gray-400 mt-16 mb-6 md:my-0'>{year}</h2>
        <p className=' text-gray-400 mb-7'>Created by <span className='hover:text-cyan-400'>Gaurav Tak</span></p>
        <span className='mr-2 md:mr-0 text-white'>Inspired by</span><Link href={"https://gridfolio.framer.website/"} className="text-white">Gridfolio</Link>
      </section>
    </div>
  )
}
