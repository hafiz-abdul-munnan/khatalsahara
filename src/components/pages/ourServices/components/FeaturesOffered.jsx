import React from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { FaIdCardAlt } from "react-icons/fa";
import { FaRegIdCard } from "react-icons/fa";
import { MdIncompleteCircle } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
const FeaturesOffered = () => {
    const Features = [
        { icon: <FaPencilAlt className='text-3xl group-hover:text-mainYellow' />, content: "Trade Name" },
        { icon: <FaCheck className='text-3xl group-hover:text-mainYellow' />, content: "Initiative Approval" },
        { icon: <FaClipboardCheck className='text-3xl group-hover:text-mainYellow' />, content: "MOE" },
        { icon: <FaHandshake className='text-3xl group-hover:text-mainYellow' />, content: "Sponsor" },
        { icon: <IoDocumentText className='text-3xl group-hover:text-mainYellow' />, content: "EJARI" },
        { icon: <FaAddressCard className='text-3xl group-hover:text-mainYellow' />, content: "License" },
        { icon: <FaIdCardAlt className='text-3xl group-hover:text-mainYellow' />, content: "Immigration Card" },
        { icon: <FaRegIdCard className='text-3xl group-hover:text-mainYellow' />, content: "Labor Computer Card" },
        { icon: <MdIncompleteCircle className='text-3xl group-hover:text-mainYellow' />, content: "Quota Approval (20)" },
        { icon: <TiStarFullOutline className='text-3xl group-hover:text-mainYellow' />, content: "PRO Services" },

    ]
    return (
        <section>
            <div className='container mx-auto px-4 text-center items-center [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:first:text-mainYellow'>
                <h2>Features Offered By</h2>
                <h2>Khat Al Sahara Consultancies</h2>
                <p className='mt-2'>We provide a wide range of services suited for our customers so they can get their businesses established in Dubai in the easiest and best possible way.</p>
                <div className='flex flex-wrap gap-4 justify-between mt-6'>
                    {Features.map((item, index) => {
                        return <div key={index} className='bg-mainYellow hover:bg-mainBlue h-40 group flex flex-col items-center justify-center gap-3 [&>h4]:text-lg [&>h4]:font-semibold w-full sm:w-[30%] md:w-[31%] lg:w-[23%] xl:w-[19%]'>
                            {item.icon}
                            <h4 className='group-hover:text-mainYellow'>{item.content}</h4>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default FeaturesOffered
