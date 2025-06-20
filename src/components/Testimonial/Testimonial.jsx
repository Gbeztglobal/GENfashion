import React from 'react'
import Slider from "react-slick";
import casandra from "../../assets/commenters/casandra.jpg"
import victor from "../../assets/commenters/victor.jpg"
import merlin from "../../assets/commenters/merlin.jpg"
import melissa from "../../assets/commenters/melissa.jpg"
import rukky from "../../assets/commenters/rukky.jpg"


const TestimonialData = [
{
    id:1,
    Name:"Victor",
    Text: "lorem   Lorem ipsum dolor sit lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquiamet consectetur adipisicing elit. Tempore aliqui",
    img:victor
},
{
    id:2,
    Name:"Merlin",
    Text: "lorem   Lorem ipsum dolor sit lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquiamet consectetur adipisicing elit. Tempore aliqui",
    img:merlin
},
{
    id:3,
    Name:"Casandra",
    Text: "lorem   Lorem ipsum dolor sit lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquiamet consectetur adipisicing elit. Tempore aliqui",
    img:casandra
},
{
    id:4,
    Name:"Rukky",
    Text: "lorem   Lorem ipsum dolor sit lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquiamet consectetur adipisicing elit. Tempore aliqui",
    img:rukky
},
{
    id:5,
    Name:"Melissa",
    Text: "lorem   Lorem ipsum dolor sit amet consectetur lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquiadipisicing elit. Tempore aliqui",
    img:melissa
},
]
    


const Testimonial = () => {
  var settings ={
    dots:true,
    arrows:false,
    infinite:true,
    speed:500,
    /*Slides to show*/
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase:"linear",
    pauseOnHover:true,
    pauseOnFocus:true,
    responsive: [
      {
      breakpoint:10000,
      settings:{
        slidesToShow:3,
        slidesToScroll:1,
        infinite:true,
      },
    },
    {
      breakpoint:1024,
      settings:{
        slidesToShow:2,
        slidesToScroll:1,
        initialSlide:2,
      },
    },
    {
        breakpoint:640,
        settings:{
        slidesToShow:1,
        slidesToScroll:1,
        },
    }
  ]
  }
  return (
    <div className='container'>
        <div data-aos="fade-up" className='text-center mb-20'>
            <p className='text-sm text-primary'>
              What Our Customers Are Saying
            </p>
            <h1 className='text-3xl font-bold'>
              Testimonials
            </h1>
            <p className='text-xs text-gray-400'>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Tempore aliqui
              
              </p>     
          </div>
          {/*Testimonial Cards*/}
          <div data-aos="zoom-in">
           <Slider {...settings}>
  {TestimonialData.map((data) => (
    <div className='my-6' key={data.id}>
      <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
        <div className='mb-4 flex justify-center'>
          <img src={data.img} alt={`${data.Name}'s testimonial`} className='rounded-full w-20 h-20' />
        </div>
        <div className='flex flex-col items-center gap-4'>
          <div className='space-y-3 text-center'>
            <p className='text-xs text-gray-500'>{data.Text}</p>
            <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.Name}</h1>
          </div>
        </div>
        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
      </div>
    </div>
  ))}
</Slider>
          </div>
    </div>
  )
}

export default Testimonial