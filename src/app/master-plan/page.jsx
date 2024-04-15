'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import Developing from '@/components/Develop'
import React from 'react'
import masterplan from '@/public/home/MasterPlan.png'

const page = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'just', duration: 0.5 }}

      className='bg-white py-16'>
      {/* <Developing /> */}

      <h1 className='pb-10 font-roboto font-bold text-[32px] leading--[37.5px] text-[#FF0000] text-center'>MASTER PLAN</h1>
      <Image alt='masterplan' src={masterplan} width={"auto"} height='827px' />

    </motion.div>
  )
}

export default page
