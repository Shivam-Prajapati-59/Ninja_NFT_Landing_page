"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";
import GridImage4 from "@/public/assets/gridImage/gridImage4.png";
import GridImage5 from "@/public/assets/gridImage/gridImage5.png";
import GridImage6 from "@/public/assets/gridImage/gridImage6.png";

const cardList = [
    { title: "Senseimint", descp: "Founder & Strategist", image: GridImage4 },
    { title: "Whispermer", descp: "Illustrator & Trait Designer", image: GridImage5 },
    { title: "Kodekage", descp: "Lead Blockchain Developer", image: GridImage6 },
];

/* Parent container controls stagger */
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.25, // delay between cards
        },
    },
} satisfies Variants;

/* Same animation for all cards */
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
} satisfies Variants;

const TeamCard = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 py-12 overflow-x-hidden"
        >
            {cardList.map((card, index) => (
                <motion.div
                    variants={cardVariants}
                    key={index}
                    className="group relative"
                >
                    {/* Border Wrapper */}
                    <div className="relative p-px overflow-hidden rounded-3xl">
                        <motion.div
                            style={{
                                backgroundImage: `conic-gradient(from 0deg,
                                    transparent 0deg, 
                                    transparent 300deg, 
                                    #d3ed05 330deg, 
                                    transparent 360deg),
                                    conic-gradient(from 180deg,
                                    transparent 0deg,
                                    transparent 300deg,
                                    white 330deg,
                                    transparent 360deg)`,
                                willChange: "transform",
                            }}
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                duration: 8,
                                ease: "linear",
                            }}
                            className="absolute -inset-full z-0"
                        />

                        {/* Card Body */}
                        <div className="relative z-10 bg-[#030e14] rounded-[23px] p-2 overflow-hidden">
                            <Image
                                src={card.image}
                                alt={card.title}
                                className="rounded-2xl object-cover w-full h-auto"
                                width={500}
                                height={500}
                                priority={index === 0}
                            />
                        </div>
                    </div>

                    {/* Text Details */}
                    <div className="mt-4 px-2">
                        <h2 className="uppercase text-white text-2xl tracking-wider font-bold font-dela">
                            {card.title}
                        </h2>
                        <p className="text-gray-400 text-md font-medium mt-1">
                            {card.descp}
                        </p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default TeamCard;