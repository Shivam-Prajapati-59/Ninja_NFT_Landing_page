'use client';
import React from 'react'
import Image from 'next/image'
import TestImage from "@/public/assets/card1.svg"
import { ArrowRight } from 'lucide-react';


interface NFTcardProps {
    imageSrc: string;
    imageAlt: string;
    rarityScore: number;
}

const NFTcard = ({ imageSrc, imageAlt, rarityScore }: NFTcardProps) => {
    return (
        // border-[#ffff0633]
        <div className="relative border border-[#d9d9d980] rounded-[48px] p-3 md:w-[348px] h-[413px]">
            <Image
                src={TestImage}
                alt="image alt"
                className="w-full h-full"
            />

            {/* shadow bar */}
            <div className="
        absolute 
        bottom-8 
        left-7 right-7
        bg-transparent 
        backdrop-blur-md 
        py-5 
        border-2 border-[#d3ed05] 
        shadow-[0_6px_18px_rgba(220,255,0,0.18)] 
        rounded-4xl
    ">
                <div className="flex flex-row justify-between items-center px-4">
                    <div className='flex flex-col'>
                        <span className='font-inter font-extrabold text-lg'>Rarity score: </span>
                        <span className='text-xl font-dela'>8.87/10</span>
                    </div>
                    <span className='bg-[#d3ed05] rounded-full'>
                        <ArrowRight className='text-black w-13 h-13' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NFTcard