import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../../static/author/jim.jpg'
import ImageSlider from "../components/image-slider"

const Author = () => {
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
                    <div className="group-sec">
                        <img src={AuthorImg}/>
                      </div>
                </div>
            </section>
        </>
    )
}

export default Author;