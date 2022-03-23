import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/jim.png'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
            <Helmet title='About the Author | Ruben Silva Aguilar '/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={AuthorImg}
                                    alt="_main_author" />

                            </div>

                            <div className="heading-quote">
                                <h4>
                              -  I have always taken care of you
                                I was always there.
                                I am always here and will always be here. 
                                You forgot about me and my teachings,
                                but I forgive you. Everything will be fine, 
                                and you will be a better person. 
                                Trust my word.”
                                    - </h4>
                                {/* <span className="ata-span-fx">
                                    
                                </span> */}
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            I was born in Tlaxiaco Plan Aleman Oaxaca Mexico on April 5, 1989 as the 6th among 8 siblings. My parents are Julian Silva Helario and Valentina Maria Roxas Aguilar. Due to unfortunate circumstances, my parents broke up when I was born leaving my mom with all the responsibility all by herself. Grandmother took care of me and my other siblings as my mom worked in the city during most of my childhood. Life back in Mexico was not abundant for all of us. I wanted to give my mom a break and my grandmother a good life. I decided to come to the land of dream America to make a difference but ended up behind bars. 

                            2009, I started paying the sentence of the mistake I ever regretted until this very day. 13 years being locked up in these four corners has given me a lot of time to think and realize how much time I wasted because I was young and naïve not realizing the consciences it may cause me.  

                            Three years more and I will be free. I will redeem what I have lost and have as many children as I can have. This time I will do what is right and find happiness in a simpler life. Family is everything. God is salvation. 
 

                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Ruben Silva Aguilar </span>
                                </span>
                            </p>

                        </article>
                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;