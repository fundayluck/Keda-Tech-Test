import React from 'react'
import Image from '../assets/undraw_metrics.svg'

const Home = () => {
    return (
        <div>
            <h1 className='pl-[400px] pt-[150px] text-center mx-[100px] text-[25px]'>
                with Notepreneur, entrepreneurs will be assisted.
            </h1>
            <img className='ml-[100px] pt-[50px]' src={Image} alt='metrix' width={350} />
        </div>
    )
}

export default Home