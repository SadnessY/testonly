import React, {useState, useRef, useEffect, useCallback} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import * as styles from './App.module.scss';
import prevBtn from "./imgs/prevbtn.svg";
import nextBtn from "./imgs/nextbtn.svg";
import nextSlide from "./imgs/nextSlide.svg"
import circlePoint from "./imgs/circlePoint.svg"
import "swiper/css";
interface dataItem{
    x: number,
    y: number,
    id: number,
    name: string,
    startYear: number,
    endYear: number,
    slides: object[]
}
const App : React.FC = () : React.ReactElement => {
    const [dates, setDates] = useState(6)  //выбранная тема по номеру, не назвал theme, тк зачастую это слово используется для темы приложения, но можно че нить придумать интереснее
    const [data, setData] = useState([
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
    ]) // можно загрузить данные с сервера, в моем варианте не используется setData, тк данные введены вручную, к тому же не знаю структуру данных на сервере, так что типизировать тоже не стал
    const swiper = useRef(Swiper.prototype)
    const startEl = useRef(HTMLDivElement.prototype);
    const endEl = useRef(HTMLDivElement.prototype);
    const [start, setStart] = useState(data.filter(item => item.id === dates)[0].startYear || 0);
    const [end, setEnd] = useState(data.filter(item => item.id === dates)[0].endYear || 0);
    const lastActive = useRef(HTMLElement.prototype)
    const upData = useRef<dataItem[]>([])
    const removeActivePoint = () => {
        const prevActive = document.getElementsByClassName(styles.point__active)[0] as HTMLElement
        lastActive.current = prevActive
        prevActive.classList.remove(styles.point__active)
        prevActive.innerHTML = `<img src="${circlePoint}" alt="Переключение темы">`
        gsap.to(prevActive, {
            duration: 0,
            width: 6,
            height: 6,
            border: "none",
            ease: "power1.in",
            top: `${upData.current.filter(el => el.id === Number(prevActive.id))[0].y + 225}px`,
            left: `${upData.current.filter(el => el.id === Number(prevActive.id))[0].x + 226}px`
        })
    }
    const setActivePoint = () => {
        const active = document.getElementsByClassName(styles.circle__point)[dates - 1] as HTMLElement
        active.classList.add(styles.point__active)
        active.innerText = data[dates - 1].id.toString()
        gsap.to(active,  {
            duration: 0.3,
            width: 56,
            height: 56,
            border: "1px solid rgb(66, 86, 122, 40%)",
            backgroundColor: "#fff",
            borderRadius: "50%",
            ease: "power1.in",
            top: `${upData.current.filter(el => el.id === Number(active.id))[0].y + 200}px`,
            left: `${upData.current.filter(el => el.id === Number(active.id))[0].x + 202}px`
        });
    }
    const evLisCl = (card: HTMLElement) => {
        setDates(Number(card.id))
    }
    const evLisME = (card: HTMLElement, obj: dataItem) => {
        card.innerText = obj.id.toString()
        if (!card.classList.toString().includes(styles.point__active)) {
            gsap.to(card,  {
                duration: 0.3,
                width: 56,
                height: 56,
                border: "1px solid rgb(66, 86, 122, 40%)",
                backgroundColor: "#fff",
                borderRadius: "50%",
                ease: "power1.in",
                top: `${obj.y + 200}px`,
                left: `${obj.x + 202}px`
            });
        }
    }
    const evLisML = (card: HTMLElement, obj: dataItem) => {
        if (!card.classList.toString().includes(styles.point__active)) {
            card.innerHTML = `<img src="${circlePoint}" alt="Переключение темы">`
            gsap.to(card, {
                duration: 0,
                width: 6,
                height: 6,
                border: "none",
                ease: "power1.in",
                top: `${obj.y + 225}px`,
                left: `${obj.x + 226}px`
            });
        }
    }
    const renderCircle = useCallback((() => {
        let parent = document.getElementsByClassName(styles.nav__circle)[0];
        for (let i = 0; i < data.length; i++) {
            let radian = i * (2 * Math.PI / data.length) - 0.5 * Math.PI;
            let x = 225 * Math.cos(radian) - 6 / 2;
            let y = 225 * Math.sin(radian) - 6 / 2;
            let params = Object.assign({x, y}, data[i]);
            upData.current.push(params)
            create_card(params);
        }
        function create_card(obj: dataItem) {
            let root = document.createElement("div");
            root.innerHTML = (`
                <div id=${obj.id}>
                    <img src="${circlePoint}" alt="Переключение темы">
                </div>
            `);
            let card = root.firstElementChild as HTMLElement;
            card.classList.add(styles.circle__point)
            card.style.left = obj.x + 226 + "px";
            card.style.top  = obj.y + 225 + "px";
            card.style.color = "#42567A"
            card.style.fontSize = "20"
            card.addEventListener('click', () => evLisCl(card))
            card.addEventListener('mouseenter', () => evLisME(card, obj))
            card.addEventListener('mouseleave', () => evLisML(card, obj))
            parent.appendChild(card);
        }
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
    useEffect(() => {
        renderCircle()
        setActivePoint()
        return () => {
            Array.from(document.getElementsByClassName(styles.circle__point)).forEach((el) => {
                el.removeEventListener("click", () => evLisCl)
                el.removeEventListener("mouseenter", () => evLisME)
                el.removeEventListener("mouseleave", () => evLisML)
            })
        }
    }, [renderCircle])
    useEffect(() => {
        removeActivePoint()
        setActivePoint()
        let parentRot = (Number(lastActive.current.id) + dates) * (360 / data.length)
        const parent = document.getElementsByClassName(styles.nav__circle)[0] as HTMLElement;
        console.log(parent)
        gsap.to(parent, {
            rotation: parentRot,
            ease: "none",
            transformOrigin: "center"
        });
        Array.from(document.getElementsByClassName(styles.circle__point)).forEach((el) => {
            gsap.to(el,{
                rotation: -parentRot,
                ease: "none",
                transformOrigin: "center"
            })
        })
    }, [dates])
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
                    <div className={styles.nav__circle}>
                    </div>
                    <span className={styles.nav__counter}>0{dates}/0{data.length}</span>
                    <div className={styles.nav__btns}>
                        <button onClick={() => setDates((dates) => dates - 1)} disabled={dates === 1} className={styles.nav__arrow}><img src={prevBtn} className={styles.prevArrow} alt='Предыдущая тема'></img></button>
                        <button onClick={() => setDates((dates) => dates + 1)} disabled={dates === data.length} className={styles.nav__arrow}><img src={nextBtn} className={styles.nextArrow} alt='Следующая тема'></img></button>
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
