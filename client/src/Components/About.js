// import User from "./User";
// import UserClass from "./UserClass";
import React, { useState, useEffect } from "react";
import delivery from "../../asset/fastest-delivery.png";
import bestPrice from "../../asset/best-prices.png";
import res from "../../asset/20+ restaurant.png";
import pizza from "../../asset/pizza-pan.png";
import pratham from "../../asset/pratham.jpg";
import vishal from "../../asset/vishal.png";
import cj from "../../asset/cj.jpg";
import side from "../../asset/side-dish.png";
import foodslider from "../../asset/food-slider-1.png";
import heropizza from "../../asset/hero-pizza.png";
import heroburger from "../../asset/hero-burger.png";
import reslogo from "../../asset/reslogo.png";
import visa from "../../asset/visa.png";
import paypal from "../../asset/paypal.png";
import mastercard from "../../asset/master-card.png";
import googlepay from "../../asset/google-pay.png";
import applepay from "../../asset/apple-pay.png";

// import discountImage from "../../asset/discount.png";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const data = [
    {
        image: cj,
        name: "CJ",
        rating: 4.5,
        reviewText: "Foody is the best website."
    },
    {
        image: vishal,
        name: "vishal",
        rating: 3,
        reviewText: "Foody is the best website but i dont have money."
    },
    {
        image: pratham,
        name: "Pratham",
        rating: 4,
        reviewText: "I know Foody is the best website"
    },
];

const faq = [
    {
        question: 'What is Foody Customer Care Number?',
        answer: 'You can reach Foodys customer care team at the following number:Customer Care Number: +91xxxxxxxxx and If you need to contact us via email, you can reach our support team at:Email: support@foody.com'
    },
    {
        question: 'Can i edit my order?',
        answer: 'Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents'
    },
    {
        question: 'I want to cancel my order',
        answer: 'We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  +91xxxxxxxxx).'
    }
]

const payment = [
    {
        image: visa
    },
    {
        image: paypal
    },
    {
        image: mastercard

    },
    {
        image: googlepay
    },
]

const slider = [
    {
        image: foodslider
    },
    {
        image: heropizza
    },
    {
        image: heroburger
    },
]

const About = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [rotation, setRotation] = useState(0);
    const toggle = (index) => {
        setSelected(selected === index ? null : index);


    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) =>
                prevIndex === data.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change review every 3 seconds

        return () => clearInterval(interval);
    }, [data.length]);



    useEffect(() => {
        const rotationInterval = setInterval(() => {
            setRotation((prevIndex) => prevIndex
                === slider.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(rotationInterval);
    }, [slider.length]);

    return (
        <>
            <section className="about-section pb-0 mt-[4rem] relative ">
                <div className="before-content absolute top-0 left-0 w-full h-[90%] bg-slate-200 z-[-1]"></div>

                <div className="about-us-review-container absolute left-[-10%] w-[40rem] h-[40rem]">

                    <div className="circle absolute  w-full h-full top-[50%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 z-[1] rounded-full bg-transparent border-[0.1rem] border-solid border-teal-800 scale-[0.8]"></div>
                    <div className="circle absolute  w-full h-full top-[50%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 z-[1] rounded-full bg-transparent border-[0.1rem] border-solid border-teal-800 scale-[0.9]"></div>
                    <div className="circle absolute  w-full h-full top-[50%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 z-[1] rounded-full bg-transparent border-[0.1rem] border-solid border-teal-800 scale-[1.0]"></div>
                    <img className=" absolute w-full h-full object-contain transform scale-[0.9] left-[-18%] z-[2] drop-shadow-lg" src={pizza}></img>

                    <div className="reviews-container">
                        {data.map((review, index) => (

                            <div className={`review-wrapper absolute flex gap-[1rem] z-[2] ${index === 0 ? 'bottom-[74%] left-[38%]' : index === 1 ? 'bottom-[44%] left-[62%]' : 'bottom-[2%] left-[55%]'} ${index === currentReviewIndex ? "opacity-100 scale-100 transition-opacity ease-in duration-500" : "opacity-0 scale-50"}`}>
                                <img className="reviewer-img w-[3rem] h-[3rem] rounded-[100%] z-[2]" src={review.image}></img>

                                <div className="review-box relative  inset-0 py-[1rem] px-[1.5rem] w-[30rem]  rounded-[.5rem] bg-white z-[2]   shadow-md shadow-gray-200 origin-top-left ">
                                    <div className="reviewer-info flex gap-[1rem] ">
                                        <div className="reviewer">
                                            <div className="reviewer-rating flex gap-[.1rem] text-[.7rem]">
                                                {[...Array(Math.floor(review.rating))].map((_, i) => (
                                                    <FontAwesomeIcon key={i} className="text-yellow-500" icon={faStar} />
                                                ))}
                                                {(review.rating % 1 !== 0) && <FontAwesomeIcon className="text-yellow-500" icon={faStarHalf} />}
                                                <p>{review.rating}</p>

                                            </div>
                                            <h2 className="reviewer-name font-[400]">{review.name}</h2>
                                        </div>
                                    </div>
                                    <div className="review-body flex gap-[1rem] mt-[.5rem] py-[1rem] px-0">
                                        <FontAwesomeIcon className="text-[1.4rem] text-yellow-500" icon={faQuoteLeft} />
                                        <p className="review leading-[1.75rem]">{review.reviewText}</p>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>



                <div className="about w-[25%] ml-auto min-w-[250px] mr-[5rem]"> {/* Add some right margin */}
                    <h2 className="about-title text-[2rem] font-bold capitalize text-teal-800">Why US?</h2>
                    <p className="about-info mt-[2rem] mx-0 mb-[2rem] leading-[2rem]">
                        Discover Foody Your premier destination for culinary delights, offering unbeatable prices and swift delivery from a diverse selection of 11+ restaurants.</p>
                    <div className="services-container">
                        <div className="service bg-white rounded-[.5rem] mb-[2rem] p-[1.5rem] shadow-lg shadow-gray-200">
                            <div className="service-title flex gap-[1rem] items-center">
                                <img className="service-img w-[3rem] h-[3rem] rounded-[.2rem]" src={delivery} alt="fastest delivery"></img>
                                <h3 className="service-name font-medium">Fastest Delivery</h3>
                                <p className="service-detail mt-[1rem] leading-[2rem] opacity-75">Foody is one of the fastest delivery website which can deliver in 30 min</p>
                            </div>
                        </div>
                        <div className="service bg-white rounded-[.5rem] mb-[2rem] p-[1.5rem] shadow-lg shadow-gray-200">
                            <div className="service-title flex gap-[1rem] items-center">
                                <img className="service-img w-[3rem] h-[3rem] rounded-[.2rem]" src={bestPrice} alt="best prices"></img>
                                <h3 className="service-name font-medium">Best Prices</h3>
                                <p className="service-detail mt-[1rem] leading-[2rem] opacity-75">Foody savoring Delights, Offering the Best Price on Every Bite.</p>
                            </div>
                        </div>
                        <div className="service bg-white rounded-[.5rem] mb-[2rem] p-[1.5rem] shadow-lg shadow-gray-200">
                            <div className="service-title flex gap-[1rem] items-center flex-col md:flex-row">
                                <img className="service-img w-[3rem] h-[3rem] rounded-[.2rem]" src={res} alt="restaurants"></img>
                                <h3 className="service-name font-medium">11+ Restaurants</h3>
                                <p className="service-detail mt-[1rem] leading-[2rem] opacity-75">Foody is Your Gateway to 11+ Restaurants, Always Offering the Best Price!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="faq-section min-h-[100vh] w-full overflow-x-hidden">
                <h1 className="section-title text-[3rem] mb-[8rem] text-center font-[400]">Frequently Ask Questions</h1>

                {faq.map((item, index) => (
                    <div key={index} className="faq m-auto w-[70%] rounded-[.5rem] border-[.1rem] border-solid border-slate-200 mb-[2rem] relative shadow-md shadow-slate-200">
                        <div className="question-box flex gap-[1rem] justify-between items-center p-[2rem] cursor-pointer" onClick={() => toggle(index)}>
                            <h3 className="question font-[400]">{item.question}</h3>
                            <FontAwesomeIcon
                                className={`font-[1.5rem] text-center transition duration-200 text-teal-800 cursor-pointer ${selected === index ? 'transform rotate-45' : ''}`}
                                icon={faPlus}
                            />
                        </div>
                        <div
                            className={`answer-box transition-all duration-500 ease-in-out ${selected === index ? 'block h-auto py-[2rem] px-[2rem]' : 'h-0 overflow-hidden'
                                }`}
                        >
                            <p className="answer leading-[2rem]">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="leaf-layer-right absolute  right-0 w-[10rem] h-[12rem] overflow-hidden z-[2] overflow-x-hidden">
                    <img className="absolute z-[2] w-full h-full object-cover left-[35%] transform scale-[0.8] rotate-[30]" src={side} alt="Leaf"></img>
                </div>

            </section>


            <div className="discount-banner relative flex mt-[0] mx-[10vw] mb-[5rem] p-[4rem] rounded-[.5rem] bg-[url('./asset/discount.png')] bg-cover text-white overflow-hidden ">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-800 to-teal-800 opacity-80"></div>
                <div className="section-detail w-[50%] min-w-[300px] ml-0 z-[2]">
                    <h1 className="section-title my-[2rem] mt-[0] mx-[0] text-[3rem] font-[400]">Get an extra 20% off on your first order.</h1>
                    <p className="section-info leading-[2rem] mb-[2rem] font-[700]">Use this code during checkout</p>
                    <p className="discount-code py-[1rem] px-[2rem] bg-white text-teal-800 border-[.25trem] w-fit" > WELCOME20</p>
                </div>

                {slider.map((dish, index) => (
                    <div key={index} className={`dish-slide absolute top-[50%] right-[-17.5rem]  transform -translate-y-1/2 w-[35rem] h-[35rem] rounded-[100%] origin-center ${index === rotation ? "opacity-100 scale-100 transition-opacity ease-in duration-500" : "opacity-0 scale-50"}`} >
                        <img className={`w-[15rem] h-[15rem] object-cover absolute z transform -translate-y-1/2  ${index === 0 ? 'bottom-[12%] left-[-15%] ' : index === 1 ? 'bottom-[12%] left-[-15%]' : 'bottom-[12%] left-[-15%]'} `} src={dish.image}></img>
                    </div>
                ))}
            </div>


            <section className="footer relative pt-[4rem] px-[10vw] pb-[8rem] flex gap-[5%] bg-slate-200 ">
                <div className="company-info h-[3rem] mb-[2rem] ">
                    <img className="logo h-20" src={reslogo}></img>
                    <div className="social-links flex gap-[1rem]">
                        <a className="w-[3rem] h-[3rem] p-[.5rem] rounded-[100%] bg-white flex justify-center items-center no-underline text-black text-[1.5rem] transition duration-500" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className="w-[3rem] h-[3rem] p-[.5rem] rounded-[100%] bg-white flex justify-center items-center no-underline text-black text-[1.5rem] transition duration-500" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a className="w-[3rem] h-[3rem] p-[.5rem] rounded-[100%] bg-white flex justify-center items-center no-underline text-black text-[1.5rem] transition duration-500" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a className="w-[3rem] h-[3rem] p-[.5rem] rounded-[100%] bg-white flex justify-center items-center no-underline text-black text-[1.5rem] transition duration-500" href="#"><FontAwesomeIcon icon={faDiscord} /></a>
                        <a className="w-[3rem] h-[3rem] p-[.5rem] rounded-[100%] bg-white flex justify-center items-center no-underline text-black text-[1.5rem] transition duration-500" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </div>
                
                <div className=" usefull-footer-links-container ml-auto">
                    <h5 className="footer-link-title capitalize mb-[1rem] text-[#007676]">Usefull Links</h5>
                    <a className="footer-links text-black no-underline leading-[1.5rem] mb-[0.5rem] opacity-90 block capitalize  hover:text-[#007676] hover:opacity-[1]" href="#">Menu</a>
                    <a className="footer-links text-black no-underline leading-[1.5rem] mb-[0.5rem] opacity-90 block capitalize hover:text-[#007676] hover:opacity-[1]" href="#">Restaurants</a>
                    <a className="footer-links text-black no-underline leading-[1.5rem] mb-[0.5rem] opacity-90 block capitalize hover:text-[#007676] hover:opacity-[1]" href="#">Your Orders</a>
                    <a className="footer-links text-black no-underline leading-[1.5rem] mb-[0.5rem] opacity-90 block capitalize hover:text-[#007676] hover:opacity-[1]" href="#">Support</a>
                </div>

                <div className=" information-footer-links-container ml-auto">
                    <h5 className="footer-link-title capitalize mb-[1rem] text-[#007676]">Information</h5>
                    <a className="footer-links text-black no-underline leading-[1.5rem] mb-[0.5rem] opacity-90 block capitalize hover:text-[#007676] hover:opacity-[1]" href="#">About us</a>
                    <a className="footer-links text-black no-underline leading-[1.5rem] mb-[0.5rem] opacity-90 block capitalize hover:text-[#007676] hover:opacity-[1]" href="#">Privacy Policy</a>
                    <a className="footer-links text-black no-underline leading-[1.5rem] mb-[0.5rem] opacity-90 block capitalize hover:text-[#007676] hover:opacity-[1]" href="#">Terms & Condition</a>
                    <a className="footer-links text-black no-underline leading-[1.5rem] mb-[0.5rem] opacity-90 block capitalize hover:text-[#007676] hover:opacity-[1]" href="#">What info we collect?</a>
                </div>
                <div className=" contact-footer-links-container  ml-auto w-[20%]">
                    <h5 className="footer-link-title capitalize mb-[1rem] text-[#007676]">Contact Us</h5>
                    <p className="footer-links text-black no-underline leading-[1.5rem]  opacity-90 block capitalize hover:text-[#007676] hover:opacity-[1] mb-[1rem]"> Phone - +91XXXXXXXX</p>
                    <p className="footer-links text-black no-underline leading-[1.5rem] mb-[1rem] opacity-90 block capitalize hover:text-[#007676] hover:opacity-[1]">Email-foody@support</p>

                </div>
                <div className="payment-partner absolute flex gap-[1rem] right-[10%] bottom-[20%]">
                    {payment.map((pay, index) => (
                        <img key={index} className="h-[2rem]" src={pay.image}></img>
                    ))}
                </div>
                <p className="payment-partner-text absolute bottom-[12%] right-[10vw] font-[.8rem] opacity-70">
                    Fully secured payment gateway by trusted companies.
                </p>
                <p className="copyright absolute w-[100%] left-0 bottom-0 text-center p-[.5rem] text-white bg-teal-800">
                    Designed by @yagyanshTyagi
                </p>

            </section>

        </>
    )

}

export default About;
