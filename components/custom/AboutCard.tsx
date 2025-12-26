'use client';
import { motion } from "motion/react";
import Image from 'next/image'
import { ArrowRight } from 'lucide-react';


interface AboutCardProps {
    imageSrc: string;
    imageAlt: string;
    rarityScore: number;
    tiltDeg: number
}

const AboutCard = ({ imageSrc, imageAlt, rarityScore, tiltDeg }: AboutCardProps) => {
    return (
        // border-[#ffff0633]
        <motion.div
            whileHover={{ rotate: tiltDeg }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="relative border border-[#d9d9d980] rounded-[48px] p-3 md:w-[365px] h-[423px]">
            <Image
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full rounded-[48px]"
            />

            {/* shadow bar */}
            <div className="
        absolute 
        bottom-8 
        left-7 right-7
        bg-transparent 
        backdrop-blur-md 
        py-5 
        border border-[#d3ed05] 
        shadow-[0_6px_18px_rgba(220,255,0,0.18)] 
        rounded-4xl
    ">
                <div className="flex flex-row justify-between items-center px-4">
                    <div className='flex flex-col'>
                        <span className='font-inter font-medium text-lg'>Rarity score: </span>
                        <span className='text-xl  font-light font-dela'>{rarityScore}/10</span>
                    </div>
                    <span className='bg-[#d3ed05] rounded-full'>
                        <ArrowRight className='text-black w-13 h-13' />
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutCard