import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import SmallBook from '../SmallBook/SmallBook';
import styles from './RecommendBooks.module.scss'
const RecommendBooks = () => {

    let ArrayLenght = Array(20).fill(1).map((v, i) => i + 1)
    return (
        <div className={styles.RecommendBooksContainer}>
            <Swiper className="mySwiper"
                slidesPerView={4}
                spaceBetween={50}
            >
                {ArrayLenght.map((key, index) => {
                    console.log(index);
                    return (
                        <SwiperSlide key={index}><SmallBook /></SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default RecommendBooks
