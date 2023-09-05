import React from 'react'
import Logo from '../assets/logo.svg'
import { useScrollPosition } from '../hooks/useScrollPosition'



const NavBar = ({ scrollToHome, scrollToAbout, scrollToPricing, scrollToContact }) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const scrollPosition = useScrollPosition()
    // flex bg-transparent min-w-full h-[80px] text-[#00000] p-[10px] justify-between items-center z-10 border

    const listNavBar = [
        {
            name: 'ABOUT',
            path: scrollToAbout
        },
        {
            name: 'PRICING',
            path: scrollToPricing
        },
        {
            name: 'CONTACT',
            path: scrollToContact
        },
    ]
    return (
        <nav className={classNames(
            scrollPosition > 50 ? "fixed transition ease-in-out duration-700 bg-[#26C1F7] flex min-w-full h-[80px] text-white p-[10px] justify-between items-center z-10" : "fixed w-[100%] transition ease-in-out duration-700 flex bg-transparent  min-w-full h-[80px] text-[#00000] p-[10px] justify-between items-center z-10"
        )}>
            <div onClick={scrollToHome} className='flex items-center hover:cursor-pointer'>
                <img src={Logo} width={75} height={75} alt='logo' />
                <h1 className='font-bold text-xl'>
                    Notepreneur
                </h1>
            </div>
            <ul className='flex flex-row list-none m-0 p-0 md:flex-row sm:flex-col base:flex-col'>
                {listNavBar.map((list, index) =>
                    <li className='mx-[20px] mt-[5px] font-bold' key={index}>
                        <div onClick={list.path} className='hover:cursor-pointer'>
                            {list.name}
                        </div>
                    </li>
                )}
                <button className={classNames(
                    scrollPosition > 50 ?
                        'mx-10 border-2 border-white text-white px-10 py-1 rounded hover:text-[#26C1F7] hover:bg-white hover:border-white'
                        :
                        'mx-10 border-2 border-[#26C1F7] text-[#26C1F7] px-10 py-1 rounded hover:text-white hover:bg-[#26C1F7]'
                )}>Login</button>
            </ul>
        </nav>
    )
}

export default NavBar