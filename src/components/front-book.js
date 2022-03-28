import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/book-min.jpg'
import FrontBook1 from '../../static/books/book-min1.jpg'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook} alt="book-img"/>
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p>
                            This is not just another poetry book!
                            <br/>
                            This is my solitude and sorrow!
                            <br/>
                            This is my feeling at the moment.
                            </p>

                            <button className="btn-book-featured">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>


                    <div className="grid-two-columns" id="wrapper-two-books">

                    <div className="book-wraps">
                        <img src={FrontBook1} alt="book-img"/>
                    </div>

                    <div className="content-wraps">

                        {/* <span className="italic-tag">
                            Read, listen, and learn in various formats
                        </span>

                        <h1 className="heading--featured">
                            <span>Featured</span>
                            <span>Book</span>
                        </h1> */}

                        <p>
                        Life's Greatest Adventure is the author's true to life story of his life's greatest adventure facing the consequences of a mistake committed from the past where longing for love and family prospers as he spent day after day trapped in a cell, but he found salvation through God.
                        </p>

                        <button className="btn-book-featured">
                            <Link to="/about-the-book">
                                Read More
                            </Link>
                        </button>

                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook