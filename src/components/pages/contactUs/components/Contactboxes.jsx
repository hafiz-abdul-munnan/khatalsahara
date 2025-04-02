import React from 'react';

import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { PiPhoneCallFill } from "react-icons/pi";


const Contactboxes = () => {
    return (
        <div className="w-full py-10 -mt-40 max-sm:mt-0 z-20 relative">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Phone Box */}
                <div className="bg-mainYellow text-center p-6 rounded-lg shadow-md">
                    <PiPhoneCallFill className="text-5xl text-darkBlue mx-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">Phone</h2>
                    <p>+971551520224</p>
                    <p>Alternative:</p>
                    <p>+971505359319</p>
                    <p>+971527178050</p>
                    <a href="tel:+971551520224" className="text-darkBlue font-bold mt-4 inline-block hover:underline">
                        Call Now
                    </a>
                </div>

                {/* Email Box */}
                <div className="bg-mainYellow text-center p-6 rounded-lg shadow-md">
                    <MdEmail className="text-5xl text-darkBlue mx-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">Email</h2>
                    <p>contact@khatalsahara.com</p>
                    <a href="mailto:contact@khatalsahara.com" className="text-darkBlue font-bold mt-4 inline-block hover:underline">
                        Contact Now
                    </a>
                </div>

                {/* WhatsApp Box */}
                <div className="bg-mainYellow text-center p-6 rounded-lg shadow-md">
                    <IoLogoWhatsapp className="text-5xl text-darkBlue mx-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">Whatsapp</h2>
                    <p>+971551520224</p>
                    <p>Alternative:</p>
                    <p>+971505359319</p>
                    <p>+971527178050</p>
                    <a href="https://wa.me/971551520224" target="_blank" rel="noopener noreferrer" className="text-darkBlue font-bold mt-4 inline-block hover:underline">
                        Message Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contactboxes;