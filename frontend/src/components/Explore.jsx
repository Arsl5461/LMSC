import React,{useState} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { EffectFade } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination';
import Slide1 from "../assets/slide1.webp"
// Import Swiper styles

function Explore() {
    const [explore,setExplore]=useState([
        {
            "title":"General Diagnostic Testing",
            "descrip":"We are leader in ensuring exceptional quality testing in our facilities, driven by a passion to ensure you have critical information about your health give you access to diagnostic.",
            "point1":"Gastrontestinal Health",
            "point2":"Immunological Disorders",
            "point3":"Cardiovascular health"
        },
        {
            "title":"Food Sensitivity Testing",
            "descrip":"We are leader in ensuring exceptional quality testing in our facilities, driven by a passion to ensure you have critical information about your health give you access to diagnostic.",
            "point1":"Gastrontestinal Health",
            "point2":"Immunological Disorders",
            "point3":"Cardiovascular health"
        },
        {
            "title":"Genova Diagnostic Testing",
            "descrip":"We are leader in ensuring exceptional quality testing in our facilities, driven by a passion to ensure you have critical information about your health give you access to diagnostic.",
            "point1":"Gastrontestinal Health",
            "point2":"Immunological Disorders",
            "point3":"Cardiovascular health"
        },
        {
            "title":"Hormone Insight Testing",
            "descrip":"We are leader in ensuring exceptional quality testing in our facilities, driven by a passion to ensure you have critical information about your health give you access to diagnostic.",
            "point1":"Gastrontestinal Health",
            "point2":"Immunological Disorders",
            "point3":"Cardiovascular health"
        },
        {
            "title":"Specialized Genetic Testing",
            "descrip":"We are leader in ensuring exceptional quality testing in our facilities, driven by a passion to ensure you have critical information about your health give you access to diagnostic.",
            "point1":"Gastrontestinal Health",
            "point2":"Immunological Disorders",
            "point3":"Cardiovascular health"
        },
        {
            "title":"Natrupathic Lab Testing",
            "descrip":"We are leader in ensuring exceptional quality testing in our facilities, driven by a passion to ensure you have critical information about your health give you access to diagnostic.",
            "point1":"Gastrontestinal Health",
            "point2":"Immunological Disorders",
            "point3":"Cardiovascular health"
        },
    ])
  return (
    <div className='explore'>
    <div className='container'>
<p className='text-center pt-4 active'><b>Find The Right Test For Your Needs!</b></p>
<h1 className=' text-center w-50 margiLeft ml-3 title'><b>Providing High Quality Test Services For Your Health!</b></h1>   
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        
    
        className="mySwiper"
        >
            {explore.map((item,index)=>{
                return(
                <SwiperSlide key={index} className="mt-3 exploreCard p-3" effect="fade">
                <h4 className="title"><b>{item.title}</b></h4>
                <p>{item.descrip}</p>
                <div className='points'>
                    <p><b>{item.point1}</b></p>
                    <p><b>{item.point2}</b></p>
                    <p><b>{item.point3}</b></p>
                </div>
                <hr/>
                <div className='d-flex justify-content-center'>
                <button className='btn btn-primary'>Explore More</button>
                </div>
                </SwiperSlide>
                )
            })}

      </Swiper> 
     
    </div>
    </div>
  )
}

export default Explore 