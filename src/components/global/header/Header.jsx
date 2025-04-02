import React, { useState } from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';


// import BusinessSetupMaincomponent from '../../pages/businessSetup/BusinessSetupMaincomponent';
const Header = () => {
    const [MenuOpen, setMenuOpen] = useState(false);
    return (
        <header className='h-20 w-full absolute z-99 flex flex-col items-center'>
            <section className="w-full text-sm flex justify-between  py-4 px-6 text-mainYellow  border-b border-[#ebebeb20]">
                <a href="tel:+971551520224" className='hover:text-white max-sm:text-[0px]'><IoLogoWhatsapp className='text-2xl inline mr-3' />WhatsApp: +971551520224</a>
                <div className='flex gap-10'
                ><a href="#" className='hover:text-white'>Book a Free Consultation</a>
                    <div className='text-2xl flex gap-4 [&>*]:hover:text-white [&>*]:hover:cursor-pointer max-sm:hidden'>
                        <a href="https://maps.app.goo.gl/SfW9TS7DiW7w5AKZ7" target='_blank'><HiLocationMarker /></a>
                        <a href="tel:+971551520224" ><BiSolidPhoneCall /></a>
                        <a href="contact@khatalsahara.com" ><FaEnvelope /></a>
                        <a href="https://www.facebook.com/profile.php?id=61562733523242&mibextid=LQQJ4d" target='_blank'><MdOutlineFacebook /></a>
                    </div>
                </div>
            </section>

            <section className='container max-sm:px-6 max-lg:px-0 px-10 py-2 flex justify-between text-white items-center'>
                <NavLink to="/" className='cursor-pointer text-6xl font-extrabold hover:text-mainYellow text-white'>K<span className='text-mainYellow'>.</span></NavLink>
                <nav className={`flex gap-6 text-sm max-sm:transition-all max-sm:duration-300 max-sm:ease-in-out ${MenuOpen ? ` max-sm:absolute max-sm:flex-col max-sm:left-0 max-sm:p-10 max-sm:top-[140px] max-sm:w-full max-sm:bg-mainBlue` : `max-sm:hidden`}`}>
                    <NavLink className={(e) => e.isActive ? "text-mainYellow hover:text-mainYellow" : "text-white hover:text-mainYellow"} to="/">Home</NavLink>
                    <NavLink className={(e) => e.isActive ? "text-mainYellow hover:text-mainYellow" : "text-white hover:text-mainYellow"} to="/business-setup">Business Setup</NavLink>
                    <NavLink className={(e) => e.isActive ? "text-mainYellow hover:text-mainYellow" : "text-white hover:text-mainYellow"} to="/our-services">Our Services</NavLink>
                    <NavLink className={(e) => e.isActive ? "text-mainYellow hover:text-mainYellow" : "text-white hover:text-mainYellow"} to="/visa-information">Visa Information</NavLink>
                    <NavLink className={(e) => e.isActive ? "text-mainYellow hover:text-mainYellow" : "text-white hover:text-mainYellow"} to="/about-us">About Us</NavLink>
                    <NavLink className={(e) => e.isActive ? "text-mainYellow hover:text-mainYellow" : "text-white hover:text-mainYellow"} to="/contact-us">Contact Us</NavLink>
                </nav>
                <button className='text-4xl min-sm:hidden' onClick={() => setMenuOpen(!MenuOpen)}>{MenuOpen ? <RxCross2 /> : <FiMenu />}</button>
            </section>

        </header>
    )
}

export default Header
