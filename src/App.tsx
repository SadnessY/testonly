import React, {useState, useRef, useEffect, useLayoutEffect, useCallback} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import styles from "./App.module.scss";
import prevBtn from "./imgs/prevbtn.svg";
import nextBtn from "./imgs/nextbtn.svg";
import nextSlide from "./imgs/nextSlide.svg"
import circlePoint from "./imgs/circlePoint.svg"
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
        },
        { id: 3, name: 'Литература', startYear: 1992, endYear: 1997,
            slides: [
                {1992: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {1993: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {1994: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {1995: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {1996: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {1997: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
            ]
        },
        { id: 4, name: 'Культура', startYear: 1999, endYear: 2004,
            slides: [
                {1999: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2000: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2001: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2002: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2003: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2004: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
            ]
        },
        { id: 5, name: 'Спорт', startYear: 2006, endYear: 2014,
            slides: [
                {2006: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2007: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2008: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2009: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2010: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2011: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2012: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2013: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2014: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},

            ]
        },
        { id: 6, name: 'Наука', startYear: 2015, endYear: 2022,
            slides: [
                {2015: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2016: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2017: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2018: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2019: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2020: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2021: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
                {2022: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
            ]
        }
    ])
    const swiper = useRef(Swiper.prototype)
    const startEl = useRef(HTMLDivElement.prototype);
    const endEl = useRef(HTMLDivElement.prototype);
    const [start, setStart] = useState(data.filter(item => item.id === dates)[0].startYear || 0);
    const [end, setEnd] = useState(data.filter(item => item.id === dates)[0].endYear || 0);
    const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (e.target === document.getElementsByClassName(styles.nav__arrow)[0]) {
            setDates((dates) => dates - 1)
        }
        if (e.target === document.getElementsByClassName(styles.nav__arrow)[1]){
            setDates((dates) => dates + 1)
        }
    }
    const renderCircle = useCallback((() => {
        const R = 225;
        const IMG_SIZE = 6;
        let parent = document.getElementsByClassName(styles.nav__circle)[0];
        for (let i = 0; i < data.length; i++) {
            let radian = i * (2 * Math.PI / data.length) - 0.5 * Math.PI;
            let x = R * Math.cos(radian) - IMG_SIZE / 2;
            let y = R * Math.sin(radian) - IMG_SIZE / 2;
            let params = Object.assign({x, y}, data[i]);
            create_card(params);
        }
        interface dataItem{
            x: number,
            y: number,
            id: number,
            name: string,
            startYear: number,
            endYear: number,
            slides: object[]
        }
        function create_card(obj: dataItem) {
            let root = document.createElement("div");
            root.innerHTML = (`
                <div>
                    <img src="${circlePoint}" alt="Переключение темы">
                </div>
            `);
            let card = root.firstElementChild as HTMLElement;
            card.classList.add(styles.circle__point)
            card.style.left = obj.x + 226 + "px";
            card.style.top  = obj.y + 225 + "px";
            card.addEventListener('click', () => {
                const lastActive = document.getElementsByClassName(styles.point__active)[0] as HTMLElement
                lastActive.classList.remove(styles.point__active)
                lastActive.innerHTML = `<img src="${circlePoint}" alt="Переключение темы">`
                lastActive.style.top = Number(lastActive.style.top.replace('px', '')) + 25 + "px"
                lastActive.style.left = Number(lastActive.style.left.replace('px', '')) + 24 + "px"
                card.innerText = obj.id.toString()
                card.style.top = obj.y + 200 + "px"
                card.style.left = obj.x + 202 + "px";
                card.classList.add(styles.point__active)
            })
            card.addEventListener('mouseenter', () => {
                card.innerText = obj.id.toString()
                card.style.top = obj.y + 200 + "px"
                card.style.left = obj.x + 202 + "px";
            })
            card.addEventListener('mouseleave', () => {
                if (!card.classList.toString().includes(styles.point__active)) {
                    card.innerHTML = `<img src="${circlePoint}" alt="Переключение темы">`
                    card.style.left = obj.x + 226 + "px";
                    card.style.top  = obj.y + 225 + "px";
                }
            })
            parent.appendChild(card);
        }
        const first = document.getElementsByClassName(styles.circle__point)[0] as HTMLElement
        first.classList.add(styles.point__active)
        first.innerText = data[0].id.toString()
        first.style.top = (R * Math.cos(0) - IMG_SIZE / 2) - 250 + "px"
        first.style.left = (R * Math.sin(0) - IMG_SIZE / 2) + 202 + "px";
    }), [data])
    useEffect(() => {
        setStart(data.filter(item => item.id === dates)[0].startYear);
        setEnd(data.filter(item => item.id === dates)[0].endYear);
        gsap.to(startEl.current, {
            innerText: start,
            duration: 1,
            snap: {
                innerText: 1,
            },
        });
        gsap.to(endEl.current, {
            innerText: end,
            duration: 1,
            snap: {
                innerText: 1,
            },
        });
        gsap.from(`.${styles.swiperW__slide}`, {
            opacity: 0,
            duration: 1,
            ease: "power1.out"
        })
        gsap.to (`.${styles.swiperW__slide}`, {
            opacity: 1,
            duration: 1,
            ease: "power1.in"
        })
    }, [dates, start, end, swiper, data]);
    useLayoutEffect(() => {
        renderCircle()
    }, [renderCircle])
    return (
        <div className={styles.wind}>
            <div className={styles.main}>
                <h1 className={styles.main__h1}>Исторические даты</h1>
                <div className={styles.main__verticalLine}></div>
                <div className={styles.main__horizontalLine}></div>
                <div className={styles.main__years}>
                    <div ref={startEl} className={styles.year}></div>
                    <div ref={endEl} className={styles.year}></div>
                </div>
                <div className={styles.nav}>
                    <div className={styles.nav__circle}>{}</div>
                    <span className={styles.nav__counter}>0{dates}/0{data.length}</span>
                    <div className={styles.nav__btns}>
                        <button onClick={(e) => handleBtnClick(e)} disabled={dates === 1} className={styles.nav__arrow}><img src={prevBtn} className={styles.prevArrow} alt='Предыдущая тема'></img></button>
                        <button onClick={(e) => handleBtnClick(e)} disabled={dates === data.length} className={styles.nav__arrow}><img src={nextBtn} className={styles.nextArrow} alt='Следующая тема'></img></button>
                    </div>
                </div>
                <div className={styles.swiperW}>
                    <button className={styles.swiperButtonPrev}><img src={nextSlide} alt='Предыдущий слайд'></img></button>
                    <Swiper
                        ref={swiper}
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
