import React from "react"
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Layout = ({ children }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}

export default Layout