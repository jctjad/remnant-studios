import { useState } from "react";
import { motion } from 'framer-motion';

export default function Security() {
    const [isOpenAC1, setIsOpenAC1] = useState(false);
    const [isOpenAC2, setIsOpenAC2] = useState(false);
    const [isOpenAC3, setIsOpenAC3] = useState(false);
    const [isOpenAC4, setIsOpenAC4] = useState(false);
    const [isOpenAC5, setIsOpenAC5] = useState(false);

    const [isOpenAlt1, setIsOpenAlt1] = useState(false);
    const [isOpenAlt2, setIsOpenAlt2] = useState(false);
    const [isOpenAlt3, setIsOpenAlt3] = useState(false);
    const [isOpenAlt4, setIsOpenAlt4] = useState(false);
    const [isOpenAlt5, setIsOpenAlt5] = useState(false);

    return (
        <main className="flex flex-col overflow-x-hidden">
            {/* Hero Section with Background Image */}
            <section className="relative flex flex-row items-center justify-start h-screen bg-cover bg-center bg-black">
                
                { /* Image */ }
                <div className="relative flex flex-col items-center justify-start w-full">
                    <div className="w-full h-[500px] flex justify-start items-center overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={"/anti-cheat.png"}
                            alt="Feature Image"
                            className="max-w-full max-h-full object-contain"
                        />

                        { /* Gradients */ }
                        <div className="absolute bottom-0 w-full h-35 bg-gradient-to-t from-black to-transparent z-10"></div>
                        <div className="absolute top-0 w-full h-35 bg-gradient-to-b from-black to-transparent z-10"></div>
                        <div className="absolute left-0 w-40 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
                        <div className="absolute right-0 w-40 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
                    </div>
                </div>

                {/* Text */}
                <div className="relative items-start justify-start h-[500px]">
                    <div className="relative flex flex-col items-start justify-center h-full">
                        <h1
                            className="text-5xl font-medium text-white mr-10"
                            style={{ fontFamily: "'EB Garamond', serif" }}
                        >
                            Remnant Security
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-lg font-extralight text-white mt-15 mr-10">
                                Cheating undermines the gaming experience. We provide protection software that identifies and eliminates malicious gameplay.
                            </p>
                            <p className="text-lg font-extralight text-white mt-10 mr-10">
                                We specialize in cutting-edge autoclicking prevention and alternate account detection.
                            </p>
                        </motion.p>
                    </div>
                </div>
            </section>

            { /* <div className="h-px w-full bg-gray-700"></div> */ }

            {/* Products */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 pb-12 bg-black text-white">

                {/* Anti-AC */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >

                <div className="p-6 border border-gray-700 rounded flex flex-col justify-between bg-black">
                    <h2
                        className="text-2xl font-medium mb-6"
                        style={{ fontFamily: "'EB Garamond', serif" }}
                    >
                        Anti-Autoclicker Software
                    </h2>

                    {/* Dropdown toggle 1 */}
                    <button
                        onClick={() => setIsOpenAC1(!isOpenAC1)}
                        className="mb-4 font-extralight text-left w-full flex items-center justify-between cursor-pointer"
                    >
                        What is autoclicking?
                        <span className="inline-block transform transition-transform"
                              style={{ transform: isOpenAC1 ? "rotate(90deg)" : "rotate(0deg)" }}>
                        ▶
                        </span>
                    </button>

                    {/* Dropdown content 1 */}
                    {isOpenAC1 && (
                        <p className="mb-4 font-extralight pl-6">
                            Autoclickers are software that automatically click for players at rapid speed. Widely considered an exploit, 
                            autoclicking provides an unfair advantage over other uses.
                        </p>
                    )}

                    {/* Dropdown toggle 2 */}
                    <button
                        onClick={() => setIsOpenAC2(!isOpenAC2)}
                        className="mb-4 font-extralight text-left w-full flex items-center justify-between cursor-pointer"
                    >
                        Main Challenge
                        <span className="inline-block transform transition-transform"
                              style={{ transform: isOpenAC2 ? "rotate(90deg)" : "rotate(0deg)" }}>
                        ▶
                        </span>
                    </button>

                    {isOpenAC2 && (
                        <p className="mb-4 font-extralight pl-6">
                            The challenge is detecting autoclicking without flagging manual clicking. Our software detects
                            autoclickers through patterns in user clicks, not speed.
                        </p>
                    )}

                    {/* Dropdown toggle 3 */}
                    <button
                        onClick={() => setIsOpenAC3(!isOpenAC3)}
                        className="mb-4 font-extralight text-left w-full flex items-center justify-between cursor-pointer"
                    >
                        Our Software
                        <span className="inline-block transform transition-transform"
                              style={{ transform: isOpenAC3 ? "rotate(90deg)" : "rotate(0deg)" }}>
                        ▶
                        </span>
                    </button>

                    {isOpenAC3 && (
                        <p className="mb-4 font-extralight pl-6">
                            Using data collected from users, our software functions through a state-of-the-art 
                            detection algorithm that identifies users autoclicking even at slow speeds.
                        </p>
                    )}

                    {/* Dropdown toggle 4 */}
                    <button
                        onClick={() => setIsOpenAC4(!isOpenAC4)}
                        className="mb-4 font-extralight text-left w-full flex items-center justify-between cursor-pointer"
                    >
                        Community Impact
                        <span className="inline-block transform transition-transform"
                              style={{ transform: isOpenAC4 ? "rotate(90deg)" : "rotate(0deg)" }}>
                        ▶
                        </span>
                    </button>

                    {isOpenAC4 && (
                        <p className="mb-4 font-extralight pl-6">
                            Over 100 developers have implemented our software in their personal games spanning 
                            1,000+ unique players and 100,000+ total visits.
                        </p>
                    )}

                    {/* Dropdown toggle 5 */}
                    <button
                        onClick={() => setIsOpenAC5(!isOpenAC5)}
                        className="mb-4 font-extralight text-left w-full flex items-center justify-between cursor-pointer"
                    >
                        Development Status
                        <span className="inline-block transform transition-transform"
                              style={{ transform: isOpenAC5 ? "rotate(90deg)" : "rotate(0deg)" }}>
                        ▶
                        </span>
                    </button>

                    {isOpenAC5 && (
                        <p className="mb-4 font-extralight pl-6">
                            We are in the process of converting to a machine learning model to better improve the outreach
                            and reliability of our software across a variety of games.
                        </p>
                    )}
                </div>

                </motion.div>
                
                { /*******************************************************************************************************/ }

                {/* Alt Detector */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                
                <div className="p-6 border border-gray-700 rounded flex flex-col justify-between bg-black">
                    <h2
                        className="text-2xl font-medium mb-6"
                        style={{ fontFamily: "'EB Garamond', serif" }}
                    >
                        Alternate Account Detector (AAD)
                    </h2>
                    
                    {/* Dropdown toggle 1 */}
                    <button
                        onClick={() => setIsOpenAlt1(!isOpenAlt1)}
                        className="mb-4 font-extralight text-left w-full flex items-center justify-between cursor-pointer"
                    >
                        What are alternate accounts?
                        <span className="inline-block transform transition-transform"
                              style={{ transform: isOpenAlt1 ? "rotate(90deg)" : "rotate(0deg)" }}>
                        ▶
                        </span>
                    </button>

                    {/* Dropdown content 1 */}
                    {isOpenAlt1 && (
                        <p className="mb-4 font-extralight pl-6">
                            Alternate accounts (alts) are secondary accounts made by a single user with 
                            the goal of cheating, exploiting, or smurfing inside a game without punishment.
                        </p>
                    )}

                    {/* Dropdown toggle 2 */}
                    <button
                        onClick={() => setIsOpenAlt2(!isOpenAlt2)}
                        className="mb-4 font-extralight text-left w-full flex items-center justify-between cursor-pointer"
                    >
                        Main Challenge
                        <span className="inline-block transform transition-transform"
                              style={{ transform: isOpenAlt2 ? "rotate(90deg)" : "rotate(0deg)" }}>
                        ▶
                        </span>
                    </button>

                    {isOpenAlt2 && (
                        <p className="mb-4 font-extralight pl-6">
                            Identifying an alternate account in comparison to a main account is difficult.
                            Each game has its own unique flags and indicators.
                        </p>
                    )}

                    {/* Dropdown toggle 3 */}
                    <button
                        onClick={() => setIsOpenAlt3(!isOpenAlt3)}
                        className="mb-4 font-extralight text-left w-full flex items-center justify-between cursor-pointer"
                    >
                        Our Software
                        <span className="inline-block transform transition-transform"
                              style={{ transform: isOpenAlt3 ? "rotate(90deg)" : "rotate(0deg)" }}>
                        ▶
                        </span>
                    </button>

                    {isOpenAlt3 && (
                        <p className="mb-4 font-extralight pl-6">
                            Our software uses machine learning algorithms to analyze user accounts and calculates the probability that a given account is an alt.
                        </p>
                    )}

                    {/* Dropdown toggle 4 */}
                    <button
                        onClick={() => setIsOpenAlt4(!isOpenAlt4)}
                        className="mb-4 font-extralight text-left w-full flex items-center justify-between cursor-pointer"
                    >
                        Community Impact
                        <span className="inline-block transform transition-transform"
                              style={{ transform: isOpenAlt4 ? "rotate(90deg)" : "rotate(0deg)" }}>
                        ▶
                        </span>
                    </button>

                    {isOpenAlt4 && (
                        <p className="mb-4 font-extralight pl-6">
                            Our software can be implemented directly in-game to detect and punish alternate accounts. We 
                            also provide a Discord bot interface through which users can manually check accounts.
                        </p>
                    )}

                    {/* Dropdown toggle 5 */}
                    <button
                        onClick={() => setIsOpenAlt5(!isOpenAlt5)}
                        className="mb-4 font-extralight text-left w-full flex items-center justify-between cursor-pointer"
                    >
                        Development Status
                        <span className="inline-block transform transition-transform"
                              style={{ transform: isOpenAlt5 ? "rotate(90deg)" : "rotate(0deg)" }}>
                        ▶
                        </span>
                    </button>

                    {isOpenAlt5 && (
                        <p className="mb-4 font-extralight pl-6">
                            Upon release we hope to reduce the prevelancy of alts in online gaming platforms.
                            Every barrier added prevents a subset of illegal activity.
                        </p>
                    )}
                </div>
                </motion.div>
            </section>

            <footer className="w-full bg-black text-white font-light text-center text-sm py-4 px-4">
                <div className="h-px w-full bg-gray-700 mb-4"></div>
                    Copyright © 2025 Remnant Studios. All rights reserved.
            </footer>
        </main>
    );
}