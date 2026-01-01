"use client";
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import FatLogo from '@/public/assets/fatlogo.svg';
import Link from 'next/link';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    // useMotionValueEvent is more performant for tracking scroll
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <motion.header
            className='sticky top-0 z-20 font-inter border-b border-transparent'
            animate={{
                backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0)",
                backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
                borderColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
            }}
            transition={{ duration: 0.3 }}
        >
            <div className='py-5'>
                <div className='container mx-auto px-4 sm:px-6'>
                    <div className='flex items-center gap-4'>
                        <Image
                            src={FatLogo}
                            alt='Fat Ninja Logo'
                            height={140}
                            width={140}
                        />

                        <nav className='hidden md:flex flex-1 justify-center gap-6 text-[#FFFFFF]/80 items-center'>
                            <Link href="#" className='hover:text-[#c9ec06] transition'>About</Link>
                            <Link href="#" className='hover:text-[#c9ec06] transition'>Features</Link>
                            <Link href="#" className='hover:text-[#c9ec06] transition'>Pricing</Link>
                            <Link href="#" className='hover:text-[#c9ec06] transition'>Blog</Link>
                            <Link href="#" className='hover:text-[#c9ec06] transition'>Contact</Link>
                        </nav>

                        <button className='hidden md:inline-flex bg-[#d3ed05] text-black px-4 py-2 rounded-lg font-medium tracking-tight'>
                            Explore NFTs
                        </button>

                        <Menu className='h-5 w-5 md:hidden ml-auto text-white' />
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;