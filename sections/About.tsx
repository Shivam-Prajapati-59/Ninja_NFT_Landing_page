'use client';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import AnimatedText from '@/components/ui/AnimatedText';
import AboutCard from '@/components/custom/AboutCard';
import Card1 from "@/public/assets/AboutCard1.svg";
import Card2 from "@/public/assets/AboutCard2.svg";
import Card3 from "@/public/assets/AboutCard3.svg";

const About = () => {
    const sectionRef = useRef(null);
    const secondTextRef = useRef(null);
    // Trigger when just 10% of section is visible, with 100px margin to start earlier
    const sectionInView = useInView(sectionRef, {
        once: true,
        amount: 0.1,
        margin: "0px 0px -100px 0px"  // Triggers 100px before element enters viewport
    });

    const secondTextview = useInView(secondTextRef, {
        once: true,
        amount: 0.1,
        margin: "0px 0px -100px 0px"  // Triggers 100px before element enters viewport
    });

    return (
        <div className="relative bg-[#030e14] py-10">
            <section ref={sectionRef} className="container mx-auto px-4">
                <div className="text-center xl:px-20 lg:mt-20">
                    <p className="text-[#D3eD05] text-xl font-medium mb-6 uppercase">
                        About nftninja
                    </p>
                    <h2 className="text-4xl md:text-5xl xl:text-6xl text-white font-dela font-medium uppercase">
                        <AnimatedText
                            text="nftninja is a limited collection of 5,000 warriors."
                            highlightText="5,000 warriors."
                            highlightClassName="text-[#FFFFFF80]"
                            staggerDelay={0.04}
                            isActive={sectionInView}
                        />
                    </h2>
                </div>

                <div className='mt-15 lg:mt-25 flex flex-col lg:flex-row items-center justify-center gap-10'>
                    <AboutCard imageSrc={Card1} imageAlt='card1Image' rarityScore={8.7} tiltDeg={10} />
                    <AboutCard imageSrc={Card2} imageAlt='card2Image' rarityScore={8.7} tiltDeg={-10} />
                    <AboutCard imageSrc={Card3} imageAlt='card3Image' rarityScore={8.7} tiltDeg={10} />
                </div>

                <div className="text-center xl:px-20 mt-25" ref={secondTextRef}>
                    <h2 className="text-4xl md:text-5xl xl:text-6xl text-white font-dela font-medium uppercase">
                        <AnimatedText
                            text="Each ninja is uniquely crafted with rare traits and hidden power."
                            highlightText="with rare traits and hidden power."
                            highlightClassName="text-[#FFFFFF80]"
                            staggerDelay={0.04}
                            isActive={secondTextview}  // Changed from sectionInView to secondTextview
                        />
                    </h2>
                </div>
            </section>
        </div>
    );
};

export default About;