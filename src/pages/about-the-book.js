import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/book-min.jpg'
import Book2 from '../../static/books/book-min1.jpg'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'ruben-silva-aguilar',
        config: { identifier: 12, slug }    
    }


    return (
        <>
            <Layout>
            <Helmet title='About the Book | Ruben Silva Aguilar '/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Prisoner's Love`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: 'forgotten-men-and-women',
                                content:
                                    `
                                        <p>
                                        This is not just another poetry book!
                                        <br/>
                                        This is my solitude and sorrow!
                                        <br/>
                                        This is my feeling at the moment.
                                        <br/>
                                        For this is my love from afar, and I live
                                        <br/>
                                        waiting for a good tomorrow to come.
                                        <br/>
                                        This was my way out of boredom and loneliness.
                                        <br/>
                                        By my heart and mind, I'll be free!
                                        <br/>
                                        Someday I'll be free!
                                        <br/>
                                        This is not just another poetry book!
                                        <br/>
                                        This is my life story!
                                        </p>
                                       
                
                                    `,

                                ebooks: {
                                    // stratton: '',
                                    barnes: 'https://www.barnesandnoble.com/w/prisoners-love-ruben-s-aguilar/1140866979?ean=9781648956355',
                                    amazon: 'https://www.amazon.com/Prisoners-Love-Spanish-Ruben-Aguilar-ebook/dp/B09Q79DSJ2/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1648200585&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Prisoners-Love-Ruben-S-Aguilar/dp/1648956343/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1648200585&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/prisoners-love-ruben-s-aguilar/1140866979?ean=9781648956348',
                                    booksamillion: 'https://www.booksamillion.com/p/Prisoners-Love/Ruben-S-Aguilar/9781648956348?id=8353755552402',
                                  
                                }
                            }}
                        />
                        
                        <BookInfo
                            data={{
                                title: `Life's Greatest Adventure`,
                                spanFirst: ``,
                                imgSrc: Book2,
                                id: 'forgotten-men-and-women',
                                content:
                                    `
                                        <p>
                                        Life's Greatest Adventure is the author's true to life story of his life's greatest adventure facing the consequences of a mistake committed from the past where longing for love and family prospers as he spent day after day trapped in a cell, but he found salvation through God.
                                        <br/>
                                        Ruben is hoping that through this story, the new generation would learn from his mistake and live life with hope that it will never be too late to dream and be happy again.
                                        <br/>
                                        Every day is a new day! Love, hope, and be happy.
                                        </p>
                                       
                
                                    `,

                                ebooks: {
                                    // stratton: '',
                                    barnes: 'https://www.barnesandnoble.com/w/lifes-greatest-adventure-ruben-s-aguilar/1140505762?ean=9781648956331',
                                    amazon: 'https://www.amazon.com/dp/B09LCT8G6Z/ref=sr_1_1?keywords=9781648956331&qid=1636485532&qsid=145-4607600-8403252&sr=8-1&sres=B09LCT8G6Z&srpt=ABIS_BOOK',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Lifes-Greatest-Adventure-Ruben-Aguilar/dp/1648956327/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1636485532&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/lifes-greatest-adventure-ruben-s-aguilar/1140505762?ean=9781648956324',
                                    booksamillion: 'https://www.booksamillion.com/p/Lifes-Greatest-Adventure/Ruben-S-Aguilar/9781648956324?id=8407851309216',
                                }
                            }}
                        />



                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;