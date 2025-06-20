import React from 'react'
import printed2 from "../../assets/rate/printed2.png";
import printed from "../../assets/rate/printed.png";
import rate3 from "../../assets/rate/rate3.png";
import {FaStar} from "react-icons/fa6";

const ProductsData = [
  {
    id:1,
    img:rate3,
    title: "Casual Wear",
    Description: "Lorem ipsum dodolor sit amet consectetur lor sit amet consectetur"
  },
   {
    id:2,
    img:printed2,
    title: "Printed Shirt",
    Description: "Lorem ipsum doldolor sit amet consecteturor sit amet consectetur"
  },
   {
    id:3,
    img:printed,
    title: "High Q-Shirt",
    Description: "Lorem ipsum dodolor sit amet consecteturlor sit amet consectetur"
  },
]
const TopRated = ({handleOrderPopup}) => {
  return (
    <div>
        <div className='container'>
            {/*Head section*/}
          <div data-aos="fade-up" className='text-left mb-20'>
            <p className='text-sm text-primary'>
              Top Rated Styles For You
            </p>
            <h1 className='text-3xl font-bold'>
               Best Styles
            </h1>
            <p className='text-xs text-gray-400'>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Tempore aliqui
              </p>     
          </div>
            {/*Body section*/}
            <div className='grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
              {ProductsData.map((data) => (
                <div
                data-aos="zoom-in"
                className='rounded-2xl bg-white dark:bg-gray-800
                 hover:bg-black/80
                dark:hover:bg-primary hover:text-white
                relative shadow-xl duration-300 group max-w-[230px]'>
                  {/*image section*/}
                  <div className='h-[100px]'>
                    <img
                     src={data.img} alt=""
                    className='max-w-[140px] block mx-auto
                    transform -translate-y-10
                    group-hover:scale-105 duration-300
                    drop-shadow-md' />
                  </div>
                  {/*Details section*/}
                  <div className='p-4 text-center'>
                    {/*Star rating*/}
                    <div className='w-full flex items-center
                    justify-center gap-1'>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                      <FaStar className='text-yellow-500'/>
                    </div>
                    <h1 className='text-xl font-bold'>
                      {data.title}
                    </h1>
                    <p
                    className='text-gray-500 group-hover:text-white
                    duration-400 text-sm line-clamp-2'>{data.Description}</p>
                    <button  
                   onClick={() => handleOrderPopup()}
                    className='bg-primary hover:scale-105
                    duration-300 text-white py-1 px-4
                    rounded-full mt-4 group-hover:bg-white
                    group-hover:text-primary' 
                    //onClick={handleOrderPopup}
                    >
                      Order Now
                    </button>

                  </div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default TopRated