"use client";
import NFTcard from "@/components/custom/NFTcard"
import heroninja from "@/public/assets/HeroNinja.svg"
import grassImage from '@/public/assets/grass.png'
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const Hero = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 1], [60, -60]),
        { stiffness: 120, damping: 25 }
    );

    return (<>

        <section ref={sectionRef} className='relative py-15 bg-[linear-gradient(to_bottom,rgba(5,7,13,0.95),rgba(19,58,88,0.85),rgba(38,130,80,0.8),rgba(200,255,0,0.6))] h-full'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col items-center gap-7 mb-10'>
                    <h1 className='uppercase text-[40px] md:text-5xl lg:text-7xl font-dela font-bold text-center leading-tight sm:leading-none mt-5'>
                        <span className='block'>unmask the</span>
                        <span className='block md:inline'>
                            future of <span>NFTs</span>
                        </span>
                    </h1>
                    <p className='font-light text-lg text-center text-[#FFFFFF]/70 mt-5'>
                        <span className='block'>
                            Collect, trade, and stealth mint exclusive masked ninja nfts in
                        </span>
                        <span className='block'>
                            the shadows of the blockchain.
                        </span>
                    </p>
                    <button className='bg-[#d3ed05] text-black px-5 py-3 rounded-lg font-bold tracking-tight
                    '>
                        Explore all NFTs
                    </button>
                </div>

                {/* Cards container */}
                <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-stretch md:justify-center xl:justify-between">

                    {/* left card  */}
                    <div className="flex flex-col items-center justify-center md:w-[45%] xl:w-[35%]">
                        <NFTcard imageSrc="card1" imageAlt="Card Iamge" rarityScore={8.7} />
                        <div className="text-left space-y-4 mt-4">
                            <h2 className="font-dela text-3xl">
                                <span>Shadowfang #1729</span>
                            </h2>
                            <p className="font-medium text-lg">
                                Never reflects light — and his
                                <br />
                                presence is felt only after it's too late.
                            </p>
                        </div>
                    </div>

                    {/* Right details  */}
                    <div className="p-6 rounded-3xl bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.05)_100%)] backdrop-blur-sm flex flex-col justify-center gap-8 md:gap-18 md:w-[45%] xl:w-[35%]">
                        <div>
                            <h1 className="flex flex-col">
                                <span className="text-5xl font-dela">500+</span>
                                <span className="text-xl font-light opacity-80">
                                    Unique masked ninja NFTs
                                </span>
                            </h1>
                        </div>

                        <div>
                            <h1 className="flex flex-col">
                                <span className="text-5xl font-dela">48.5 Hrs</span>
                                <span className="text-xl font-light opacity-80">
                                    Sold Out during presale launch
                                </span>
                            </h1>
                        </div>

                        <div>
                            <h1 className="flex flex-col">
                                <span className="text-5xl font-dela">6.5%</span>
                                <span className="text-xl font-light opacity-80">
                                    Royalty Fee Breakdown
                                </span>
                            </h1>
                        </div>
                    </div>

                </div>
            </div>

            {/* Hero Ninja Image */}
            <div className="flex justify-center px-4 mt-8 xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:-bottom-30 xl:mt-10 pt-20 xl:z-10">
                <motion.img
                    src={heroninja.src}
                    alt="HeroNinja"
                    className="w-full h-auto max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[719px]"
                    style={{
                        translateY
                    }}
                />
            </div>
        </section>
        <div className="bg-[rgba(200,255,0,0.6)] z-10">
            <motion.img
                className=" w-full h-full"
                src={grassImage.src}
                alt="Grass Image"
            />
        </div>
    </>
    )
}

export default Hero