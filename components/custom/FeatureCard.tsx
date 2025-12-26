"use client";
import GridImage1 from "@/public/assets/gridImage/gridImage1.png";
import GridImage2 from "@/public/assets/gridImage/gridImage2.png";
import GridImage3 from "@/public/assets/gridImage/gridImage3.png";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";

const slideInFromTopLeft = {
    initial: { opacity: 0, x: -50, y: -50 },
    animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
} satisfies Variants;

const slideInFromRight = {
    initial: { opacity: 0, x: 50 },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
} satisfies Variants;

const slideInFromBottomLeft = {
    initial: { opacity: 0, x: -50, y: 50 },
    animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
} satisfies Variants;

// NEW VARIANT: Pure Bottom-to-Top Animation
const slideInFromBottom = {
    initial: { opacity: 0, y: 50 }, // No X movement, just Y
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
} satisfies Variants;


const FeatureCard = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-10 gap-5 p-5 px-4 md:px-10 lg:px-20 xl:px-40">

            {/* CARD 1 (Top Left) */}
            <motion.div
                className="lg:row-span-5 bg-[#04141C] flex flex-col justify-between overflow-hidden rounded-3xl"
                variants={slideInFromTopLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className='text-left p-6 md:p-10 pb-0'>
                    <h2 className='text-3xl md:text-4xl font-dela font-bold text-white uppercase'>
                        Collectible and
                        <br />
                        Unique Ninjas
                    </h2>
                    <p className='font-light text-sm text-[#FFFFFF]/70 mt-5'>
                        Every ninja is one of a kind — crafted
                        <br />
                        with hundreds of traits, clans, weapons, and skills.
                    </p>
                </div>
                <div className="flex justify-center w-full mt-5">
                    <div className="h-[300px] md:h-[390px] w-full max-w-[400px] overflow-hidden relative flex justify-center">
                        <Image
                            src={GridImage3}
                            alt="Robot1"
                            className="object-cover object-top min-w-[125%] h-auto"
                            width={450}
                            height={400}
                        />
                    </div>
                </div>
            </motion.div>

            {/* CARD 2 (Right Tall) */}
            <motion.div
                className="lg:row-span-7 bg-[#04141C] flex flex-col overflow-hidden rounded-3xl"
                variants={slideInFromRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 }}
            >
                <div className='text-left p-6 md:p-10 pb-0'>
                    <h2 className='text-3xl md:text-4xl font-dela font-bold text-white uppercase'>
                        Staking and
                        <br />
                        $shadow Rewards
                    </h2>
                    <p className='font-light text-md text-[#FFFFFF]/70 mt-5 leading-relaxed'>
                        Every ninja is one of a kind — crafted with hundreds
                        <br />
                        of traits, clans, weapons, and skills.
                    </p>
                </div>

                <div className="flex justify-center w-full flex-1 items-end mt-0 pb-20">
                    <div className="relative w-full h-full flex justify-center items-end ">
                        <Image
                            src={GridImage1}
                            alt="Robot2"
                            width={520}
                            height={520}
                            className="object-contain object-bottom w-full h-full max-h-[580px] scale-110 origin-bottom"
                        />
                    </div>
                </div>
            </motion.div>

            {/* CARD 3 (Bottom Left) */}
            <motion.div
                className="lg:row-span-5 lg:row-start-6 bg-[#04141C] flex flex-col justify-between overflow-hidden rounded-3xl"
                variants={slideInFromBottomLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2 }}
            >
                <div className='text-left p-6 md:p-10 pb-0'>
                    <h2 className='text-3xl md:text-4xl font-dela font-bold text-white uppercase'>
                        Community
                        <br />
                        Powered DAO
                    </h2>
                    <p className='font-light text-md text-[#FFFFFF]/70 mt-5 leading-relaxed'>
                        The rarer your ninja, the more rewards and
                        <br />
                        special access you unlock.
                    </p>
                </div>
                <div className="flex justify-center w-full mt-5">
                    <div className="h-[300px] md:h-[390px] w-full max-w-[400px] overflow-hidden relative flex justify-center">
                        <Image
                            src={GridImage2}
                            alt="Robot1"
                            className="object-cover object-top min-w-[125%] h-auto"
                            width={450}
                            height={400}
                        />
                    </div>
                </div>
            </motion.div>

            {/* CARD 4 (Bottom Right - Call to Action) */}
            <motion.div
                className="lg:row-span-3 lg:col-start-2 lg:row-start-8 bg-[#072733] flex flex-col justify-between rounded-3xl p-6 md:p-10"
                /* UPDATED: Uses the new pure bottom-to-top variant */
                variants={slideInFromBottom}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.3 }}
            >
                <div className='text-left'>
                    <h2 className='text-3xl md:text-4xl font-dela font-bold text-white uppercase leading-tight'>
                        Ready To Join
                        <br />
                        The Clan?
                    </h2>
                    <p className='font-light text-md text-[#FFFFFF]/70 mt-5 leading-relaxed'>
                        Start your journey with nftninja and unlock access to rareninjas
                        <br />
                        and a powerful Web3 community.
                    </p>
                </div>
                <div className="pt-8">
                    <button className='bg-[#d3ed05] hover:scale-105 transition-transform text-black px-6 py-4 rounded-xl font-bold tracking-tight flex items-center gap-3 w-fit'>
                        Mint Your Ninja
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

export default FeatureCard