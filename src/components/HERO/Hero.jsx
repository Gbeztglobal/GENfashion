import React from 'react'
import women from "../../assets/hero/women.png";
import woman from "../../assets/hero/woman.png";
import woman2 from "../../assets/hero/woman2.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: women,
    title: "Up to 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet",
  },
  {
    id: 2,
    img: woman,
    title: "Up to 30% off on all Women's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet",
  },
  {
    id: 3,
    img: woman2,
    title: "Up to 20% off on all Trending Fashion",
    description:
      "Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet",
  },
]

const Hero = ({handleOrderPopup}) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  }

  return (
    <div
      className='relative overflow-hidden min-h-[550px] 
    sm:min-h-[650px] bg-gray-100 flex justify-center 
    items-center dark:bg-gray-950 dark:text-white duration-200'
    >
      {/* background pattern*/}
      <div
        className='h-[700px] w-[700px] bg-primary/40 absolute 
        -top-1/2 right-0 rounded-3xl
        rotate-45 -z-9'
      ></div>

      {/* hero section*/}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* text content section */}
                <div
                   className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center
                sm:text-left order-2 sm:order-1 relative z-10'
                 >
                   <h1
                   data-aos ="zoom-out"
                   data-aos-once="true"
                   data-aos-duration="500"
                     className='text-5xl sm:text-6xl
                    lg:text-7xl font-bold text-black dark:text-white'
                   >
                     {data.title}
                   </h1>
                   <p 
                   data-aos ="zoom-out"
                   data-aos-once="true"
                   data-aos-duration="200"
                   className='text-sm text-black dark:text-white'>{data.description}</p>

                   <div
                   data-aos ="fade-up"
                   data-aos-duration="500"
                   data-aos-delay="300">
                     <button
                    onClick={() => handleOrderPopup()}
                       className='bg-gradient-to-r from-primary to-secondary 
                hover:scale-105
                duration-200 text-white py-2 px-4 rounded-full'
                     >
                       Order Now
                     </button>
                   </div>
                 </div>
                 {/* image section*/}
                 <div className='order-1 sm:order-2'>
                   <div 
                   data-aos ="zoom-in"
                   data-aos-once="true"
                   className='
                   
                   relative z-10'>
                     <img
                       src={data.img}
                       alt=''
                       className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] 
                        sm:scale-125 object-contain
                        mx-auto lg:scale-125'
                     />
                   </div>
                 </div>
               </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero;
