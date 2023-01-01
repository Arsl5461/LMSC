import React,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay,Navigation } from "swiper";
import { EffectFade } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination';
function Order() {
    const [order,setOrder]=useState([
        {
            "step":1,
            "title":"Find The Nearest Lab for You",
            "desc":"Find the nearest location for you online through our contact page, or just call us.",
            "buttonText":"Contact US"
        },
        {
            "step":2,
            "title":"Make an Online Appointment",
            "desc":"Find the nearest location for you online through our contact page, or just call us.",
            "buttonText":"Book a home visit"
        },
        {
            "step":3,
            "title":"Collect Sample and send for testing",
            "desc":"Find the nearest location for you online through our contact page, or just call us.",
            "buttonText":"Order Test Kits"
        },
        {
            "step":4,
            "title":"Visit our patient service center",
            "desc":"Find the nearest location for you online through our contact page, or just call us.",
            "buttonText":"Service Center"
        },
        {
            "step":5,
            "title":"Get Your Results within 9 hours",
            "desc":"Find the nearest location for you online through our contact page, or just call us.",
            "buttonText":"View Results"
        },
])
  return (
    <div className='order'>
        <div className='container'>
<p className='text-light'>How To Order And Prepare For Your Test!</p>    
<h1 className='text-light'><b>Preparing for Test Help Us Ensure All Goes Smoothly</b></h1>
<p className='text-light'>To reduce your wait time, complete the personal information on the form in advance. Although most routine tests are covered under your provincial health insurance plan, some tests may not be covered with knowledge is power.</p>
<p className='text-light'>we connect directly with patients to deliver their results so they have valuable health information when they need it most, we care about our people.</p>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
<div className='d-flex justify-content-center'>
    {order.map((item,index)=>{
        return(
            <SwiperSlide key={index}>
<div className='orderCards'>
            <div className='orderStep'>{item.step}</div>
            <p className='orderTitle title'>{item.title}</p>
            <p className='orderDesc'>{item.desc}</p>
            <button className='btn btn-transparent orderBtn title'><b>{item.buttonText}</b></button>
</div>
            </SwiperSlide>
        )
    })}
   </div>
    </Swiper>
</div>
</div>

  )
}

export default Order