import React from 'react'
import { A11y, Navigation, Scrollbar, Autoplay, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/slider.css'
import { motion, AnimatePresence } from 'framer-motion'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import the required images for slider
import img_slide_1 from '../res/images/slider/beefOne.jpg'
import img_slide_2 from '../res/images/slider/burger.jpg'
import img_slide_3 from '../res/images/slider/kofta.jpg'
import ReadMoreBtn from './ReadMoreBtn';

const SlideInfo = ({name, text}) => {
  

  return(
    <AnimatePresence>
    <motion.div 
        initial={{ opacity: 0, y: '30%'}}
        whileInView={{ opacity: 1, y: '-60%' }}
       transition={{ duration: .1, ease: "linear" }}
    
        
        className='slide_info_container'>
      <motion.h2>{name}</motion.h2>
      <motion.p>{text}</motion.p>
      <ReadMoreBtn text={'إقرأ المزيد'} />
    </motion.div>
    </AnimatePresence>
  )
}

const Slider = () => {
  const sliderData = [{
    name: 'مصنع النخيل للحوم',
    imgSrc: img_slide_1,
    text: 'الجودة شعارنا وهدفنا ارضائكم'
  },
  {
    name: 'بيرقر النخيل',
    imgSrc: img_slide_2,
    text: 'مصنع من اجود انواع اللحوم'
  },
  {
    name: 'كفتة النخيل',
    imgSrc: img_slide_3,
    text: 'مصنع من اجود انواع اللحوم'
  }
  
  ]
  return (
    <div className='slide_container'>
   <Swiper
      modules={[Navigation, A11y, Scrollbar, Autoplay, Lazy]}
      spaceBetween={0}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      navigation
      autoplay
      lazy
      loop={true}
      
     
    >
    {sliderData.map((sl, i) => (
      <SwiperSlide className='slider' key={i}>
        <img src={sl.imgSrc} alt='Slide' className='slide_img' />
        <SlideInfo name={sl.name} text={sl.text}/>
      </SwiperSlide>
    ))}
      
      
    </Swiper>
    </div>
  )
}

export default Slider
