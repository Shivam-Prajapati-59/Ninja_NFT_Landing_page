"use client";

import Image from "next/image";
import { motion } from "motion/react";
import GridImage4 from "@/public/assets/gridImage/gridImage4.png";
import GridImage5 from "@/public/assets/gridImage/gridImage5.png";
import GridImage6 from "@/public/assets/gridImage/gridImage6.png";

const cardList = [
    { title: "Senseimint", descp: "Founder & Strategist", image: GridImage4 },
    { title: "Whispermancer", descp: "Illustrator & Trait Designer", image: GridImage5 },
    { title: "Kodekage", descp: "Lead Blockchain Developer", image: GridImage6 },
];

const TeamCard = () => {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 py-12 bg-black">
            {cardList.map((card, index) => (
                <div key={index} className="group relative">
                    {/* Border Wrapper */}
                    <div className="relative p-px overflow-hidden rounded-3xl">
                        {/* SINGLE COLOR MOVING LINE
                            We use a conic gradient that goes from Cyan to Transparent 
                        */}
                        <motion.div
                            style={{
                                background: "conic-gradient(from 0deg, #22d3ee 0deg, #22d3ee 90deg, transparent 90deg, transparent 360deg)",
                            }}
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                ease: "linear",
                            }}
                            className="absolute -inset-full z-0"
                        />

                        {/* Card Body */}
                        <div className="relative z-10 bg-zinc-950 rounded-[23px] p-2 overflow-hidden">
                            <Image
                                src={card.image}
                                alt={card.title}
                                className="rounded-2xl object-cover w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>

                    {/* Text Details */}
                    <div className="mt-4 px-2">
                        <h2 className="uppercase text-white text-2xl tracking-wider font-bold">
                            {card.title}
                        </h2>
                        <p className="text-gray-400 text-md font-medium mt-1">
                            {card.descp}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamCard;