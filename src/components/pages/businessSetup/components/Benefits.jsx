import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Benefits = () => {
    const benefits = [
        'Commercial spaces available for lease in various locations',
        'Ability to conduct a wide range of commercial activities',
        '100% foreign ownership with trading rights across the UAE',
        'No currency restrictions',
        'Simplified process for obtaining work visas',
        'Eligibility to bid on government contracts',
        'Easy setup of corporate bank accounts',
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Section: Benefits List */}
                <div>
                    <h2 className="text-3xl font-bold text-darkBlue mb-6">
                        Benefits of Setting Up Business In UAE
                    </h2>
                    <ul className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <FaCheckCircle className="text-mainYellow text-xl mt-1" />
                                <p className="text-gray-700">{benefit}</p>
                            </li>
                        ))}
                    </ul>
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

export default Benefits;