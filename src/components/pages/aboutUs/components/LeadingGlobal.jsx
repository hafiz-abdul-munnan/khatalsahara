import React from 'react';


const LeadingGlobal = () => {
    const content = {
        title:"We Are a Leading Global Business Formation Expert.",
        bodyContent: "We excel in helping entrepreneurs and businesses establish their presence in Dubai and the UAE. Our all-inclusive services guarantee a seamless and efficient setup process, from the first consultation to complete business formation. Collaborate with us to bring your business vision to life in one of the world's most thriving markets. With years of experience and a deep understanding of the local business landscape, we provide expert guidance and support to ensure your venture's success. Trust us to navigate the complexities of business formation, so you can focus on growing your enterprise."
    };

    return (
        <section className="py-16 pb-0 bg-white">
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
                        src="./home/Full-Of-Benefits.jpg"
                        alt="Benefits of Setting Up Business in UAE"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default LeadingGlobal;