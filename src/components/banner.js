import React from 'react'
import Typewriter from 'typewriter-effect';

const Banner = () => {

    return (
        <>
       

            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-columns">
                        <div className="grid-child-elem">
                            <div className="banner-text">

                                <h2>
                             
                               
                                <Typewriter
                                    options={{ 
                                        loop: true,
                                        changeDelay: 300,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString('Remember that life’s greatest lessons are usually learned at the worst times from the worst mistakes. It will never be too late to start all over again and to find salvation and peace in God almighty. Keep believing! Keep moving! Keep praying!')
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(10000)
                                        .deleteAll(false)
                                        .callFunction(() => {
                                            console.log('All strings were deleted');
                                        })
                                        .start();
                                    }}
                                    />
                                </h2>
                                {/* <p className="right-sub-text">
                                    <span>
                                        Voting to save the American Dream
                                   </span>
                                </p> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;