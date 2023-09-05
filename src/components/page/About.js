import React from 'react'
import Image from '../assets/undraw_about_us.svg'

const About = () => {
    return (
        <div className='grid grid-cols-2  items-center min-h-[530px] mx-[150px]'>
            <img src={Image} alt='about-us' width={300} />
            <h1 className='text-center italic text-[20px] font-bold'>
                "Notepreneur is a company designed to assist entrepreneurs in recording every item that comes in and goes out, as well as tracking the profits they earn every day."
            </h1>
        </div>
    )
}

export default About