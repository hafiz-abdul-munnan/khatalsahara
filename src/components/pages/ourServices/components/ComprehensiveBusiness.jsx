import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ComprehensiveBusiness = () => {
    const content = {
        title:"Comprehensive Business Formation Services",
        bodyContent: "At Khat-al-Sahara, we specialize in guiding entrepreneurs and professionals through every aspect of setting up their businesses in Dubai and the UAE. From location selection and trade license applications to visa processing and corporate banking, our expert advisors ensure a streamlined process tailored to your needs. With in-depth local knowledge and personalized service, we're committed to helping you navigate regulations and achieve your business objectives efficiently. Choose us for expert support and strategic advice tailored to the UAE's business landscape. With our dedicated team and extensive local network, we simplify business setup while ensuring compliance and fostering growth opportunities."
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center xl:gap-[200px]">
                {/* Left Section: Benefits List */}
                <div>
                    <h2 className="text-4xl font-bold text-darkBlue mb-6">
                       {content.title}
                    </h2>
                    <p>
                        {content.bodyContent}
                    </p>
                </div>

                {/* Right Section: Image */}
                <div>
                    <img
                        src="./home/dubai-office-3.webp"
                        alt="Benefits of Setting Up Business in UAE"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default ComprehensiveBusiness;