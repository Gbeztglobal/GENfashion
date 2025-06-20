import React from 'react';
import women1 from "../../assets/women/women1.jpg";
import women2 from "../../assets/women/women2.jpg";
import women3 from "../../assets/women/women3.jpg";
import women4 from "../../assets/women/women4.jpg";
import women6 from "../../assets/women/women6.jpg";
import {FaStar} from "react-icons/fa6";

const ProductsData = [

    {
    id:1,
    img:women1,
    title: "women ethnic",
    rating: 5.0,
    color:"white",
    aosDelay:"0",
  },
    {
    id:2,
    img:women2,
    title: "women western",
    rating: 4.5,
    color:"red",
    aosDelay:"200",
  },
    {
    id:3,
    img:women3,
    title: "Googles",
    rating: 4.3,
    color:"brown",
    aosDelay:"400",
  },
    {
    id:4,
    img:women4,
    title: "Printed T-shirt",
    rating: 4.4,
    color:"Yellow",
    aosDelay:"600",
  },
   {
    id:5,
    img:women6,
    title: "Fashion T-shirt",
    rating: 4.5,
    color:"Pink",
    aosDelay:"800",
  },
]

const product = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
          {/*Header section*/}
          <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary'>
              Top Collections For You
            </p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>
                Collections
            </h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliqui
              </p>     
          </div>
        
          {/*Body section*/}
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-3
            md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {/*Card section*/}
            {ProductsData.map((data) => (
                <div  
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}

                key = {data.id} 
                className='space-y-3'>
                  <img src={data.img} alt="" className='h-[220px] w-[150px]
                  object-cover rounded-md' />
                  <div>
                    <h3 className='font-semibold'>
                      {data.title}
                    </h3>
                    <p className='text-sm text-gray-600'>
                      {data.color}
                    </p>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-yellow-400' />
                        <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              ))
            }

            </div>
            {/*view all button*/}
            <div className='flex justify-center'>
              <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 rounded-md
              px-5'>
                View All
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default product