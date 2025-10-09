import React, {useState} from 'react';
import styles from "./App.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiper.css';
import 'swiper/css/pagination';

const App : React.FC = () : React.ReactElement => {
    const [dates, setDates] = useState(1)
    return (
        <div className={styles.main}>
            <h1 className={styles.main__h1}>Исторические даты</h1>
            <div className={styles.main__years}>
                <div className={styles.year}>1980</div>
                <div className={styles.year}>1986</div>
            </div>
            <div className={styles.main__swiperBlock}>
                <Swiper className="mySwiper">
                    <SwiperSlide><h2>1980</h2><hr/><span>zxc</span></SwiperSlide>
                    <SwiperSlide><h2>1980</h2><br/><span>zxc</span></SwiperSlide>
                    <SwiperSlide><h2>1980</h2><br/><span>zxc</span></SwiperSlide>
                    <SwiperSlide><h2>1980</h2><br/><span>zxc</span></SwiperSlide>
                    <SwiperSlide><h2>1980</h2><br/><span>zxc</span></SwiperSlide>
                    <SwiperSlide><h2>1980</h2><br/><span>zxc</span></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default App;
