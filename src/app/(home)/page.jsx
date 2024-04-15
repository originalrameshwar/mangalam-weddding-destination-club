'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import Carousel from './components/Carousel'
import SemiCarousel from './components/SemiCarousel'

import couplebg from '@/public/home/couple_bg.png'

import exploreLine from '@/public/home/ExploreLine.png'

import masterplan from '@/public/home/MasterPlan.png'

// import video from '@/public/home/video.png'

import Background from './components/Background'
import Contact from './components/Contact'
import { Context } from './components/Context'

const page = () => {
  // return (
  //   <>
  //   <h1 className='bg-red-50 w-full h-screen' ></h1>
  //   </>
  // )
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 0.5 }}
      className=' overflow-x-hidden'>

      {/* Home background here >> */}
      <div
        className='w-full flex justify-center items-center bg-blue-50'
      >
        <Background />
      </div>
      {/* Home background here << */}

      {/* Content section starts here >> */}
      <section className='w-full h-[473px] bg-blue-50 flex flex-cols items-center justify-center lg:pl-[122px] px-3 py-2'>
        <Context />
      </section>
      {/* Content section starts here >> */}

      {/* Carousels starts here >> */}
      <div className='w-full'>
        <div className='h-[598px] bg-[#D9D9D9] w-full items-center justify-center py-[34px] px-[143px]  '>
          <div

          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='flex items-center justify-center text-center mb-[38px]' ><Image alt='exploreline' src={exploreLine} width='auto' height='auto' /></motion.div>
            <Carousel />
          </div>
        </div>

        <div className='h-[598px] bg-[#D9D9D9] w-full flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${couplebg.src})` }}>
          <SemiCarousel />
        </div>
      </div>
      {/* Carousels ends here << */}

      {/* Master Plan section Starts Here >> */}
      <section
        className='relative flex justify-center'>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='font-roboto font-bold text-[30px] leading-[35.16px] text-center absolute top-0 left-0 w-full mt-[61px]'>MASTER PLAN</motion.h2>
        <Image alt='masterplan' src={masterplan} width={"auto"} height='827px' />
      </section>
      {/* Master Plan section Ends Here << */}

      {/* Video playing Section start here >> */}
      <section className='items-center justify-center flex py-[78px] bg-white'>
        {/* <Image alt='video' className='shadow-2xl' src={video} width={"1196px"} height='452px' /> */}
        <iframe
          width="1196"
          height="452"
          src="https://www.youtube.com/embed/Fc-jGbXxOn0?si=-ECb1ntrTjcVl2h9"
          title="YouTube player"
          allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen

        ></iframe>

      </section>
      {/* Video playing Section Ends here << */}

      {/* Contact & Location section Starts here >>  */}
      <section className='py-[78px] bg-white text-black flex items-center justify-center'>
        <Contact />
      </section>
      {/* Contact & Location section Ends here <<  */}
    </motion.div>
  )
}

export default page
