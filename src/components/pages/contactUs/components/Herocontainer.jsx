import React from 'react'

const Herocomponents = () => {
    return (
        <section className='relative h-[80vh] max-sm:h-[100vh] max-sm:pt-[100px] bg-[url(./home/people-meeting.webp)] bg-cover bg-center flex items-center'>
            <div className='bg-[#212d45e6] absolute inset-0'>
            </div>
            <div className=' z-10 text-white relative container mx-auto max-sm:px-6 max-sm:text-center px-10'>
                <h1 className='text-[#ffc03d] text-2xl font-semibold mb-2 max-sm:text-[16px]'>Contact Us        </h1>
                <h2 className='text-6xl mb-6 font-bold max-sm:text-[32px] max-sm:font-semibold max-sm:leading-10'>Reach Out to Us For All Kinds Of Queries        </h2>
                <h5 className='text-[17px] font-light leading-7 lg:w-[850px] max-sm:text-[15px] max-sm:leading-5'>Whether you have questions about our services, need assistance with your business setup, or simply want more information, our team is here to help.</h5>
            </div>
        </section>
    )
}

export default Herocomponents
