import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='flex flex-col bg-mainBlue [&>*]:text-white '>
            <section className='max-sm:px-6 p-[3rem] flex justify-between max-sm:flex-wrap max-sm:gap-10'>
                <div className='flex flex-col justify-start gap-5 max-sm:w-full'>
                    <a className='cursor-pointer text-7xl font-extrabold hover:text-mainYellow'>K<span className='text-mainYellow'>.</span></a>
                    <h5 className='text-lg font-semibold'>Turning Vision Into <br />
                        <span className='text-mainYellow'>Reality</span></h5>
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-lg font-semibold'>Pages</h4>
                    <div className='flex flex-col gap-2 text-sm'>
                        <NavLink className={(e) => e.isActive ? "text-mainYellow hover:text-mainYellow" : "text-white hover:text-mainYellow"} to="/">Home</NavLink>
                        <NavLink className={(e) => e.isActive ? "text-mainYellow hover:text-mainYellow" : "text-white hover:text-mainYellow"} to="/business-setup">Business Setup</NavLink>
                        <NavLink className={(e) => e.isActive ? "text-mainYellow hover:text-mainYellow" : "text-white hover:text-mainYellow"} to="/our-services">Our Services</NavLink>
                        <NavLink className={(e) => e.isActive ? "text-mainYellow hover:text-mainYellow" : "text-white hover:text-mainYellow"} to="/visa-information">Visa Information</NavLink>
                        <NavLink className={(e) => e.isActive ? "text-mainYellow hover:text-mainYellow" : "text-white hover:text-mainYellow"} to="/about-us">About Us</NavLink>
                        <NavLink className={(e) => e.isActive ? "text-mainYellow hover:text-mainYellow" : "text-white hover:text-mainYellow"} to="/contact-us">Contact Us</NavLink>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-lg font-semibold'>Services</h4>
                    <div className='flex flex-col gap-2 text-sm'>
                        <NavLink className='hover:text-mainYellow' to="/our-services">Consultation</NavLink>
                        <NavLink className='hover:text-mainYellow' to="/our-services">License Application</NavLink>
                        <NavLink className='hover:text-mainYellow' to="/our-services">Office Setup</NavLink>
                        <NavLink className='hover:text-mainYellow' to="/our-services">Visa</NavLink>
                        <NavLink className='hover:text-mainYellow' to="/our-services">Bank Accounts</NavLink>
                    </div>
                </div><div className='flex flex-col gap-2 text-sm'>
                    <a className='hover:text-mainYellow' href="tel:+971551520224"><IoLogoWhatsapp className='inline mr-2 text-2xl'/>+971551520224</a>
                    <a className='hover:text-mainYellow' href="mainto:contact@khatalsahara.com"><FaEnvelope className='inline mr-2 text-2xl'/>contact@khatalsahara.com</a>
                    <a className='hover:text-mainYellow' href="https://maps.google.com/?q=25.275846,55.311996" target='_blank'><HiLocationMarker className='inline mr-2 text-2xl' />Naif Road, Diera, Dubai - UAE</a>

                </div>
            </section>
            <section className='text-center p-4 text-sm border-t border-[#ebebeb20] '>
                <h5 className='text-mainYellow font-medium'>Copy Right © {currentYear} | All Rights Reserved®</h5>
            </section>
        </footer>
    )
}

export default Footer
