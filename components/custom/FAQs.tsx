"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FAQS = [
    {
        question: "What is nftninja?",
        answer: "nftninja is a collection of 5,000 unique, masked ninja NFTs living on the Ethereum blockchain. Each ninja is packed with distinct traits, rarity, and hidden utility within the ecosystem."
    },
    {
        question: "How can I mint a ninja?",
        answer: "You can mint a ninja directly from our official website during the public mint. Connect your Ethereum wallet and follow the minting instructions provided."
    },
    {
        question: "Will there be a game or metaverse integration?",
        answer: "Yes, we're building an immersive ninja-themed game and metaverse experience where your NFTNinjas will play a key role. Stay tuned for updates!"
    },
    {
        question: "What is $shadow and how do I earn it?",
        answer: "$shadow is our native utility token. You can earn it by staking your NFTNinja or participating in community events and challenges."
    },
    {
        question: "What can I do with my nftninja?",
        answer: "You can trade, stake, or use your NFTNinja in future games and metaverse experiences. Holding also unlocks exclusive rewards and community perks."
    }
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-4">
                {FAQS.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-[#FFFFFF]/40 rounded-2xl overflow-hidden "
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <h3 className="text-lg md:text-xl font-light font-inter text-white pr-4">
                                {index + 1}. {faq.question}
                            </h3>

                            {/* Animated Plus/Minus Icon */}
                            <div className="shrink-0 w-9 h-9 bg-[#d3ed05] rounded-full flex items-center justify-center relative">
                                {/* Horizontal line - always visible */}
                                <motion.div
                                    className="absolute w-5 h-0.5 bg-black"
                                />
                                {/* Vertical line - rotates to hide when open */}
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 90 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="absolute w-0.5 h-5 bg-black"
                                />
                            </div>
                        </button>

                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 pt-2">
                                        <p className="text-[#FFFFFF]/70 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;