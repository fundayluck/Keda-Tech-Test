import React from 'react'
import Home from '../page/Home'
import About from '../page/About'
import Pricing from '../page/Pricing'
import Contact from '../page/Contact'

const MainBar = ({ homeRef, aboutRef, pricingRef, contactRef }) => {

    return (
        <div className=''>
            <div ref={homeRef} className={`min-h-[610px] bg-home-bg bg-cover`}>
                <Home />
            </div>
            <div ref={aboutRef} className='min-h-[530px] '>
                <About />
            </div>
            <div ref={pricingRef} className='min-h-[530px] '>
                <Pricing />
            </div>
            <div ref={contactRef} className=''>
                <Contact />
            </div>
        </div>
    )
}

export default MainBar