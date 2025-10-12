import React, {useState} from 'react';
import styles from "./App.module.scss";
import prevBtn from "./imgs/prevbtn.svg";
import nextBtn from "./imgs/nextbtn.svg";
import nextSlide from "./imgs/nextSlide.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";


const App : React.FC = () : React.ReactElement => {
    const [dates, setDates] = useState(1)  //выбранная тема по номеру, не назвал theme, тк зачастую это слово используется для темы приложения, но можно че нить придумать интереснее
    const [data, setData] = useState([      // можно загрузить данные с сервера, в моем варианте не используется setData, тк данные введены вручную, к тому же не знаю структуру данных на сервере, так что типизировать тоже не стал
        { id: 1, name: 'Технологии', startYear: 1980, endYear: 1986, 
            slides: [
            {1980: 'Sinclare Research выпускают домашний компьютер ZX80'},
            {1981: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
            {1982: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
            {1983: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
            {1984: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
            {1986: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'} 
            ]
        },
        { id: 2, name: 'Кино', startYear: 1987, endYear: 1991,
            slides: [
            {1987: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
            {1988: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
            {1989: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
            {1990: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
            {1991: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
            ]
        }
    ])
    const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (e.target === document.getElementsByClassName(styles.nav__arrow)[0]) {
            setDates((dates) => dates - 1)
        } else {
            setDates((dates) => dates + 1)
        }
    }
    return (
        <div className={styles.wind}>
            <div className={styles.main}>
                <h1 className={styles.main__h1}>Исторические даты</h1>
                <div className={styles.main__verticalLine}></div>
                <div className={styles.main__horizontalLine}></div>
                <div className={styles.main__years}>
                    <div className={styles.year}>{data.filter(item => item.id === dates)[0].startYear}</div>
                    <div className={styles.year}>{data.filter(item => item.id === dates)[0].endYear}</div>
                </div>
                <div className={styles.nav}>
                    <span className={styles.nav__counter}>0{dates}/06</span>
                    <div className={styles.nav__btns}>
                        <button onClick={(e) => handleBtnClick(e)} disabled={dates === 1} className={styles.nav__arrow}><img src={prevBtn} className={styles.prevArrow} alt='Предыдущая тема'></img></button>
                        <button onClick={(e) => handleBtnClick(e)} disabled={dates === data.length} className={styles.nav__arrow}><img src={nextBtn} className={styles.nextArrow} alt='Следующая тема'></img></button> 
                    </div>       
                </div>
                <div className={styles.swiperW}>
                    <button className={styles.swiperButtonPrev}><img src={nextSlide} alt='Предыдущий слайд'></img></button>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={70}
                        slidesPerView={3}
                        watchOverflow
                        navigation={{
                            nextEl: `.${styles.swiperButtonNext}`,
                            prevEl: `.${styles.swiperButtonPrev}`
                        }}
                    >
                        {data.filter(item => item.id === dates)[0].slides.map(el => <SwiperSlide><div className={styles.swiperW__slide}><span>{Object.keys(el)[0]}</span><p>{Object.values(el)[0]}</p></div></SwiperSlide>)}
                    </Swiper>
                    <button className={styles.swiperButtonNext}><img src={nextSlide} alt='Следующий слайд'></img></button>
                </div>
            </div>
        </div>
    )
}

export default App;
