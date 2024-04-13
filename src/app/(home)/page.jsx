'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import homebg2 from '@/public/home/homebg2.png'

import Carousel from './components/Carousel'
import SemiCarousel from './components/SemiCarousel'

import couplebg from '@/public/home/couple_bg.png'

import exploreLine from '@/public/home/ExploreLine.png'

import masterplan from '@/public/home/MasterPlan.png'

import video from '@/public/home/video.png'

import callIcon from '@/public/home/contact/call_icon.png'
import email from '@/public/home/contact/email_icon.png'
import location from '@/public/home/contact/location_icon.png'
import map from '@/public/home/contact/map.png'
import Background from './components/Background'

const page = () => {
  // return (
  //   <>
  //   <h1 className='bg-red-50 w-full h-screen' ></h1>
  //   </>
  // )
  return (
    <div className=' overflow-x-hidden'>

      {/* Home background here >> */}
      <div
        className='w-full flex justify-center items-center bg-blue-50'
      >
        <Background />
      </div>
      {/* Home background here << */}

      {/* Content section starts here >> */}
      <section className='w-full h-[473px] bg-blue-50 flex flex-cols items-center justify-center pl-[122px]'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // initial={{ opacity: 0, y: 20  }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}

          className='text-black'>
          <h1 className='font-medium text-[32px] text-[#FF0000] leading-[37.5px] mb-[6px]'>Our Story</h1>
          <p className='text-[15px] font-light font-poppins text-justify leading-[22.5px]'>MANGALAM WEDDING DESTINATION CLUB is a proposed dream project of Gadiya Group that aims at creating a destination where much awaited Weddings & Events will happen with access to Luxury Amenities, an eye-catching environment as well as incorporating the religious beliefs in the design. A rich and significant design of Indian architecture was an idea behind the development of the site. This guides us to harmonize the project with both beauty and utility of given requirements. Three large lush green Wedding Lawns, eye-catching Photoshoot Garden, Parikrama Amphitheater for Wedding, Kids Play Area, Restaurant, Cottages and a Parking that can accommodate over thousand cars - all this sum to a perfect location for Weddings, Conferences, Parties, Family Outings and much more</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='ml-[92px]'>
          <div className='w-[659px]'>
            <Image alt='home2' src={homebg2} width='659px' height='444px' />
          </div>
        </motion.div>

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
        <div className='w-[45%]'>
          <div className=''>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className='font-roboto font-light text-xl leading-6 relative'>
                CONTACT
                <div className='bg-red-600 w-[128px] absolute top-1/2 transform -translate-y-1/2 h-[2px] translate-x-[97px]'></div>
              </h2>
              <h3 className='font-roboto font-medium text-[25px] leading-[29.3px]  pb-14 text-[#FF0000] mt-[14px]'>Get in Touch With US</h3>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='bg-[#D9D9D9] h-[172px] w-full flex items-center flex-col py-3'>
              <Image alt='location' src={location} width={"auto"} height={"auto"} />
              <div className='text-center'>
                <p className='mb-[4px] '>Site : Mauje Puri, Dhoregoan, Tal. Gangapur,</p>
                <p className='mb-[4px] translate-x-10'>Dist. Chh. Sambhajinagar (MS) - 431133</p>
                <p className='mb-[4px] '>Office : “Gadiya Group”, 3rd Floor, ShreeHari Bldg,</p>
                <p className='mb-[4px] translate-x-10'>Golwadi-Waluj Link Road, Chh. Sambhajinagar (MS)</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='py-9 flex justify-between w-full'>
            <div className='py-10 px-[13px] bg-[#D9D9D9] h-[182px] w-[48%] flex flex-col items-center'>
              <Image alt='email' src={email} width={"auto"} height={"auto"} />
              <h3 className='font-roboto text-[17px] leading-[19.92px] mt-1' >Email Us</h3>
              <a className='mt-5 hover:text-red-800 transition-all text-[16px] leading-[16.41px] ' href="mailto:marketing@mangalamwedding.com">marketing@mangalamwedding.com</a>
            </div>

            <div className='py-10 px-[13px] bg-[#D9D9D9] h-[182px] flex flex-col items-center w-[48%]' >
              <Image alt='callIcon' src={callIcon} width={"auto"} height={"auto"} />
              <h3 className='font-roboto text-[17px] leading-[19.92px] mt-1'>Call Us</h3>
              <div className='text-center py-2 flex flex-col gap-1'>
                <a className='hover:text-red-800 transition-all font-light text-[15px] leading-[17.58px] ' href="tel:7091949194"> +91 7091949194</a>
                <a className='hover:text-red-800 transition-all font-light text-[15px] leading-[17.58px] ' href="tel:9090983636">+91 9090983636</a>
                <a className='hover:text-red-800 transition-all font-light text-[15px] leading-[17.58px] ' href="tel:8237107177">+91 8237107177</a>

              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='ml-[27px] w-[45%]'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480713.9729875258!2d75.1790864!3d19.7305864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9db3448e5d87%3A0xf042ced887b3d505!2sMangalam%20Wedding%20Destination%20Club!5e0!3m2!1sen!2sin!4v1712477917226!5m2!1sen!2sin"
            width="100%"
            height="580"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </motion.div>
      </section>
      {/* Contact & Location section Ends here <<  */}
    </div>
  )
}

export default page
