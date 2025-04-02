import React from 'react';

const ReachOutUs = () => {
    return (
        <div className="w-full py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-[200px]">
                {/* Left Section */}
                <div>
                    <h2 className="text-3xl font-bold text-darkBlue mb-4">
                        We are Always <span className="text-mainYellow">Available for You!</span>
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Contact us using the details above or fill out this form to schedule a consultation session with one of our Business Setup Advisors.
                    </p>
                    <div className='flex gap-10'>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-darkBlue">Working Hours</h3>
                        <p>Monday to Saturday</p>
                        <p>9 am to 9 pm</p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-darkBlue">Office Location</h3>
                        <p>Naif Road, Diera, Dubai - UAE</p>
                    </div>
                    </div>
                    <div className="w-full">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.123456789!2d55.123456789!3d25.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f123456789!2sNaif%20Road%2C%20Dubai!5e0!3m2!1sen!2sae!4v123456789"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Right Section */}
                <div className="bg-mainBlue text-white p-8 shadow-md text-center">
                    <h2 className="text-2xl font-bold mb-2 text-mainYellow">Reach Out To Us</h2>
                    <p className="mb-6">Fill out the below form to directly send us a message</p>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Full Name"
                            className="focus:outline-0 w-full p-3 border-b border-b-[#d9d9d9] border-gray-300 focus:outline-none focus:ring-2 focus:ring-mainYellow"
                        />
                        <input
                            type="text"
                            placeholder="Your Phone Number"
                            className="focus:outline-0 w-full p-3 border-b border-b-[#d9d9d9]  border-gray-300 focus:outline-none focus:ring-2 focus:ring-mainYellow"
                        />
                        <input
                            type="email"
                            placeholder="Your Email Address (optional)"
                            className="w-full p-3 border-b border-b-[#d9d9d9]  border-gray-300 focus:outline-none focus:ring-2 focus:ring-mainYellow"
                        />
                        <select required="" name="service-required" class="py-2 px-4 border-b border-b-[#d9d9d9] bg-mainBlue text-[#9da3ae] w-full focus:outline-0"><option value="">Select a Service Required</option><option value="Advertising">Banking</option><option value="Advertising">Business Setup</option><option value="Advertising">Consultancy</option><option value="Consultancy">Office, Coworking and Meeting Space</option><option value="Architecture">Visa</option><option value="Other">Other</option></select>
                        <textarea
                            placeholder="Enter Your Message Here ..."
                            rows="4"
                            className="w-full p-3 border-b border-b-[#d9d9d9]  border-gray-300 focus:outline-none focus:ring-2 focus:ring-mainYellow"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full  bg-mainYellow border-2 hover:text-mainYellow cursor-pointer text-mainBlue  py-3 hover:bg-mainBlue transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReachOutUs;