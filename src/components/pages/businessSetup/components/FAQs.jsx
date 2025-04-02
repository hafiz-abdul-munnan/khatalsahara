import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What services does Khat Al Sahara Consultancies provide?',
            answer: 'We provide business setup services, visa assistance, office space solutions, and more to help you establish your business in the UAE.',
        },
        {
            question: 'Why should I choose Dubai for my business setup?',
            answer: 'Dubai offers a strategic location, tax benefits, and a thriving business environment, making it an ideal choice for entrepreneurs.',
        },
        {
            question: 'What types of licenses can Khat Al Sahara Consultancies help me obtain?',
            answer: 'We assist in obtaining trade licenses, professional licenses, and industrial licenses based on your business needs.',
        },
        {
            question: 'How long does the business setup process take?',
            answer: 'The process typically takes 1-2 weeks, depending on the type of business and required approvals.',
        },
        {
            question: 'What are the costs involved in setting up a business in Dubai?',
            answer: 'The costs vary based on the type of business, location, and other factors. Contact us for a detailed cost breakdown.',
        },
        {
            question: 'Can Khat Al Sahara Consultancies help with visa processing?',
            answer: 'Yes, we provide visa assistance for investors, employees, and dependents.',
        },
        {
            question: 'What support do you offer after the business is set up?',
            answer: 'We offer ongoing support, including PRO services, accounting, and compliance assistance.',
        },
        {
            question: 'Is it mandatory to have a local sponsor for setting up a business in Dubai?',
            answer: 'It depends on the type of business. Free zone companies do not require a local sponsor, while mainland companies may require one.',
        },
        {
            question: 'How do I start the process of setting up my business with Khat Al Sahara Consultancies?',
            answer: 'Contact us through our website or call us to schedule a consultation with our business setup advisors.',
        },
        {
            question: 'What documents are required to set up a business in Dubai?',
            answer: 'The required documents include a passport copy, visa copy, and business plan. Additional documents may be needed based on the business type.',
        },
    ];

    return (
        <section className="container mx-auto py-10" id="faqs">
            <div className="px-6 space-y-2 mb-4">
                <h1 className="text-3xl font-bold">FAQs</h1>
                <p>
                    Got questions? We've got answers. Explore our frequently asked questions to find everything you need to know about Khat Al Sahara Consultancies. Whether it's about setting up your business, our services, visas, office space, or anything regarding setting up a healthy business in UAE. We're here to provide clarity and support you.
                </p>
            </div>

            <div className="mt-8 px-6">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-300 py-4"
                    >
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h3 className="text-lg font-semibold text-darkBlue">
                                {faq.question}
                            </h3>
                            {activeIndex === index ? (
                                <FaChevronUp className="text-mainYellow" />
                            ) : (
                                <FaChevronDown className="text-mainYellow" />
                            )}
                        </div>
                        {activeIndex === index && (
                            <p className="mt-2 text-gray-600">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQs;