import React from 'react'
import BannerImg from "../../assets/Banner/BannerImg.png"
import { IoFastFood } from 'react-icons/io5'
import { GrSecure } from 'react-icons/gr'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <div className='min-h-[550px] flex
    justify-center items-center py-12
    sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1
            sm:grid-cols-2 gap-6 items-center'>
              {/*image section*/}
              <div data-aos="zoom-in">
                <img src={BannerImg} alt=""
                className='max-w-[400px] h-[350px] w-full
                mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
              </div>
              {/*text details section*/}
              <div data-aos-delay="150"className='flex flex-col justify-center
              gap-6 sm:pt-0'>
                <h1 data-aos-delay="200" data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>
                Winter Sale Upto 50% off
              </h1>
              <p data-aos-delay="220"data-aos="fade-up" className='text-sm text-gray-500
              tracking-wide leading-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nesciunt nisi ratione. Placeat optio unde assumenda laborum harum impedit beatae, deserunt 
              </p>
              <div data-aos-delay="250"className='felx flex-col gap-4'>
                <div  data-aos="fade-up" className='flex items-center gap-4'>
                  <GrSecure className="text-4xl h-12 w-12 shadow-sm
                  p-3 rounded-full bg-violet-100
                  dark:bg-violet-400 my-1" />
                  <p>
                    Quality Products
                  </p>
                </div>
                <div data-aos-delay="300" data-aos="fade-up" className='flex items-center gap-4'>
                   <IoFastFood className='text-4xl h-12 w-12 shadow-sm
                  p-3 rounded-full bg-orange-100
                  dark:bg-orange-400 my-1' />
                  <p>Fast Delivery</p>
                </div>
                <div data-aos-delay="350"  data-aos="fade-up" className='flex items-center gap-4'>
                   <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm
                  p-3 rounded-full bg-orange-100
                  dark:bg-orange-400 my-1' />
                  <p>Easy Payment Method</p>
                </div>
                <div data-aos-delay="400" data-aos="fade-up" className='flex items-center gap-4'>
                   <IoFastFood className='text-4xl h-12 w-12 shadow-sm
                  p-3 rounded-full bg-orange-100
                  dark:bg-orange-400 my-1' />
                  <p>Get Offers</p>
                </div>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner