import React from 'react'

const ReachOutToUs = () => {
  return (
    <section className=' flex items-center justify-center'>
      <div className='p-[3rem] flex-wrap min-md:flex-row flex min-md:flex-nowrap gap-6 max-md:p-6 max-md:my-10 min-xl:container min-lg:gap-14 min-lg:p-20'>
      <div className='w-full min-md:w-1/2 space-y-6'>
        <h2 className='text-3xl font-semibold'>Still Facing a Problem? <br />
          Reach out to us about it and let's get it fixed</h2>
        <img className='object-vover' src="/home/people-meeting.webp" alt="people Meeting" />
      </div>
      <div className='bg-mainBlue w-full min-md:w-1/2 p-10 min-lg:p-16 flex flex-col justify-between'>
        <div>
        <h3 className='text-mainYellow text-center font-semibold text-2xl'>Reach Out To Us</h3>
        <p className='text-white text-sm leading-4 mt-2 text-center'>Fill out the below form to directly send us a message</p>
        </div>
        <form action="" className='mt-4 text-white flex gap-4 flex-col'>
          <input required type="text" placeholder='Your Full Name' className=' border-b p-2 text-sm text-[#9da3ae] w-full appearance-none focus:outline-0 font-light placeholder:text-[#9da3ae]' />
          <input required type="tel" placeholder='Your Phone Number' className=' border-b p-2 text-sm text-[#9da3ae] w-full appearance-none focus:outline-0 font-light placeholder:text-[#9da3ae]' />
          <input required type="email" placeholder='Your Email Address' className=' border-b p-2 text-sm text-[#9da3ae] w-full appearance-none focus:outline-0 font-light placeholder:text-[#9da3ae]' />
        <select name="service-required" className='py-2 border-b bg-mainBlue text-[#9da3ae] outline-0'>
          <option>Select a Service Required</option>
          <option value="Advertising">Banking</option>
          <option value="Advertising">Business Setup</option>
          <option value="Advertising">Consuitancy</option>
          <option value="Consuitancy">Office, Coworking and Meeting Space</option>
          <option value="Architecture">Visa</option>
          <option value="Other">Other</option>
        </select>
         <textarea name="" id="" rows="3" placeholder='Enter Your Message Here ...' className=' border-b p-2 text-sm text-[#9da3ae] w-full appearance-none focus:outline-0 font-light placeholder:text-[#9da3ae]'></textarea>
        <input type="submit" value="Submit" className='mt-4 bg-mainYellow text-mainBlue px-14 py-3 hover:bg-transparent hover:text-mainYellow border-2 border-mainYellow  transition delay-150 duration-300 ease-in-out'/>
        </form>
      </div>
      </div>
    </section>
  )
}

export default ReachOutToUs
