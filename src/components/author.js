import React from 'react'
import { Link } from 'gatsby'
import ImageSlider from "../components/image-slider"
import AuthorImg from '../../static/author/jim.png'
import AuthorImg1 from '../../static/author/pic1.jpeg'
import AuthorImg2 from '../../static/author/pic2.jpeg'
import AuthorImg3 from '../../static/author/pic3.jpeg'
import AuthorImg4 from '../../static/author/pic4.jpeg'
import { Helmet } from "react-helmet"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


const Author = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      };
    return (
        <>
            <section className="upper-main bg-color" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                        I was born in Tlaxiaco Plan Aleman Oaxaca Mexico on April 5, 1989 as the 6th among 8 siblings. My parents are Julian Silva Helario and Valentina Maria Roxas Aguilar. Due to unfortunate circumstances, my parents broke up when I was born leaving my mom with all the responsibility all by herself. 

                        </p>
                        
                        <button className="btn-book-featured-red">
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                        <h1 className="author-name-tag">
                            <span></span>
                            <span>Ruben Silva Aguilar</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                    </div>
                    <div className="author-image-container">
                    <Slider {...settings}>
                                <div className="slide-autohor">
                                    <img
                                        src={AuthorImg}
                                        alt="_main_author" />
                                </div>
                                <div className="slide-autohor">
                                    <img
                                        src={AuthorImg1}
                                        alt="_main_author" />
                                </div>
                                <div className="slide-autohor">
                                    <img
                                        src={AuthorImg2}
                                        alt="_main_author" />
                                </div>
                                <div className="slide-autohor">
                                    <img
                                        src={AuthorImg3}
                                        alt="_main_author" />
                                </div>
                                <div className="slide-autohor">
                                    <img
                                        src={AuthorImg4}
                                        alt="_main_author" />
                                </div>
                            </Slider>
                      </div>
                </div>
            </section>
        </>
    )
}

export default Author;