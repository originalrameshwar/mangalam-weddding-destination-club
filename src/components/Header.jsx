'use client'
import React from 'react'
import Image from 'next/image'
import logo from '@/public/header/logo.png'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {

  return (
    <motion.nav
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 0.5 }}
      className=' w-full bg-[#000000] px-[54px] font-roboto flex items-center justify-between'>
      <div className='flex items-center justify-center h-[122px] w-[100%]'>


        <Image alt='logo' src={logo} width='166' height='41' className='mr-[30px]' />


        <ul className='flex gap-[24px] items-center justify-center font-medium text-[17px] '> {/* // TODO: give a effect that will show what link is open ( when link is opend li items should be in red text color ) */}
          <li className='hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="/" >HOME</Link></li>
          <li className='hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="about-us" >ABOUT US</Link></li>
          <li className='hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="amenities" >AMENITIES</Link></li>
          <li className='hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="membership" >MEMBERSHIP</Link></li>
          <li className='hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="master-plan" >MASTER PLAN</Link></li>
          <li className='hover:cursor-pointer hover:text-[#ff0000] transition-all' ><Link href="gallery" >GALLERY</Link></li>
        </ul>


      </div>
      <div className='w-[34%] flex flex-col justify-center items-center'>
        <span className='text-[16px]'>For more details check our brochure</span>
        <button className='text-center px-[13px] py-[1px] text-[#000000] hover:bg-[#E80005] hover:text-white transition-all font-medium text-[23px] bg-[#FDB112]'>Download</button>
      </div>
    </motion.nav>
  )
}

export default Header
