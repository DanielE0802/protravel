import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';

import Img1 from '../img/Img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.png'
import img4 from '../img/sanAndres.jpg'
import './scss/slideDestinos.scss'

SwiperCore.use([Autoplay,Navigation, Pagination, Scrollbar, A11y, EffectFade]);

class SlideDestinos extends React.Component {
    render() {
        return (
            <Swiper
                effect="fade"
                spaceBetween={150}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                    "delay": 4000,
                    "disableOnInteraction": false
                }}
            >
                <SwiperSlide><img src={Img1} alt=""/></SwiperSlide>
                <SwiperSlide><img src={img2} alt=""/></SwiperSlide>
                <SwiperSlide><img src={img3} alt=""/></SwiperSlide>
                <SwiperSlide><img src={img4} alt=""/></SwiperSlide>
                <SwiperSlide><img src={img4} alt=""/></SwiperSlide>
                <SwiperSlide><img src={img4} alt=""/></SwiperSlide>
                <SwiperSlide><img src={img4} alt=""/></SwiperSlide>
                <br></br>
            </Swiper>
        );

    };
};

export default SlideDestinos;