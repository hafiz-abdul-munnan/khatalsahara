import React from 'react';
import { FaUserTie, FaFileAlt, FaClipboardCheck } from 'react-icons/fa';
import { MdOutlineFindInPage } from 'react-icons/md';
import { HiOutlineDocumentText } from 'react-icons/hi';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: 'Professional Consultation',
            description: 'Our experts will provide a comprehensive consultation to understand your business needs and objectives in the UAE.',
            icon: <FaUserTie className="text-4xl text-mainYellow mb-4" />,
        },
        {
            id: 2,
            title: 'Gathering Requirements',
            description: 'We will collect all the necessary documents and information required to set up your business seamlessly.',
            icon: <HiOutlineDocumentText className="text-4xl text-mainYellow mb-4" />,
        },
        {
            id: 3,
            title: 'Finding the Best Plan',
            description: 'Based on your requirements, we will identify the best business setup options and strategies tailored for you.',
            icon: <MdOutlineFindInPage className="text-4xl text-mainYellow mb-4" />,
        },
        {
            id: 4,
            title: 'Completing Documentation',
            description: 'Our team will handle all the paperwork and legal documentation to ensure compliance with UAE regulations.',
            icon: <FaFileAlt className="text-4xl text-mainYellow mb-4" />,
        },
        {
            id: 5,
            title: 'Finalizing The Setup',
            description: 'We will finalize the setup process, ensuring your business is ready to operate in the UAE market smoothly.',
            icon: <FaClipboardCheck className="text-4xl text-mainYellow mb-4" />,
        },
    ];

    return (
        <section className="pt-16 ">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-darkBlue mb-10">How It Works?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="bg-mainBlue relative text-white p-6  shadow-md flex flex-col items-center"
                        >
                            <div className="absolute -top-4 -left-4 flex items-center justify-center w-12 h-12 bg-mainYellow text-darkBlue text-mainBlue font-bold rounded-full mb-4">
                                {step.id}
                            </div>
                            {step.icon}
                            <h3 className="text-xl font-bold mb-2 text-mainYellow">{step.title}</h3>
                            <p className="text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;