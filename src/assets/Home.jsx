import RotatingRiWord from '../components/RotatingRiWord';
import { useState } from 'react';
import OpportunitiesNetwork from '../components/OpportunitiesNetwork';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
    const [activeImage, setActiveImage] = useState('/default-image.png')

    const features = [
        {
            title: "Remnant Security",
            description: `High-end security software protecting online environments from client-side exploits and 
                        alternate account violations.`,
            image: "/ac_thumbnail.png",
        },
        {
            title: "Cowabunga Games",
            description: `Game development group that builds dynamic, community-driven experiences to deliver
                            virtual adventures worldwide.`,
            image: "/cowabunga.png",
        },
    ];

    return (
        <main className="flex flex-col overflow-x-hidden">
            {/* Hero Section with Background Image */}
            <section
                className="relative flex flex-col items-center justify-center text-center h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/lock_colored.png')" }}
            >
                <div className="absolute inset-0 bg-black/30"></div> {/* Determines darkness feature of bg image */}
                
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
                
                <div className="relative z-10 flex flex-col items-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl font-medium text-white"
                        style={{ fontFamily: "'EB Garamond', serif"}}
                    >
                    </motion.h1>
                    <h1 className="text-8xl font-medium text-white" 
                        style={{
                            fontFamily: "'EB Garamond', serif",
                            textShadow: "0 0 8px rgba(255,255,255,0.3)",
                        }}
                    >
                        Remnant Studios
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link to="/about" className="group border font-extralight border-white mt-5 text-white px-6 py-2 text-lg rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-colors mt-8">
                            About Remnant Studios
                            <span className="transform transition-transform group-hover:translate-x-2">→</span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16 bg-black text-white items-center">

                {/* Text Column */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col gap-8 group" onMouseLeave={() => setActiveImage('/default-image.png')}
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="cursor-pointer group/feature transition-colors my-5"
                            onMouseEnter={() => setActiveImage(feature.image)}
                            onMouseLeave={() => setActiveImage('/default-image.png')}
                        >
                            <h2 className={`
                                text-3xl font-medium transition-colors
                                group-hover:text-gray-500
                                group-hover/feature:text-white
                            `}style={{ fontFamily: "'EB Garamond', serif"}}>
                                {feature.title}
                            </h2>

                            <p className={`
                                text-white font-extralight mt-2 max-w transition-colors
                                group-hover:text-gray-500
                                group-hover/feature:text-white
                            `}>
                                {feature.description}
                            </p>
                            
                            <div className="h-px w-full bg-gray-700 mt-4 group-hover/feature:bg-white"></div>
                        </div>
                    ))}
                </motion.div>

                {/* Image Column */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex justify-center items-center"
                >
                        <div className="w-[80%] h-[400px] flex justify-center items-center overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={activeImage}
                                alt="Feature Image"
                                className="max-w-full max-h-full object-contain rounded-lg"
                            />
                        </div>
                </motion.div>
            </section> 

            {/* Explore Section */}
            <section className="flex flex-col items-center justify-center pb-14 px-4 bg-black text-white">
                <div className="h-px w-full bg-gray-700 mb-20"></div>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-4xl font-medium mb-4"
                    style={{ fontFamily: "'EB Garamond', serif" }}
                >
                    Explore Our Products
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-xl text-lg mb-8 text-center font-extralight"
                >
                    Check out our contributions to anti-cheat security and the game development industry.
                </motion.p>
                
                <div className="flex space-x-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Link to="/security" className="group border font-light border-white text-white px-6 py-2 text-lg rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                            Remnant Security
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Link to="/cowabunga" className="group border font-light border-white text-white px-6 py-2 text-lg rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                            Cowabunga Games
                        </Link>
                    </motion.div>
                </div>
            </section>

            <footer className="w-full bg-black text-white font-light text-center text-sm py-4 px-4">
                <div className="h-px w-full bg-gray-700 mb-4"></div>
                    Copyright © 2025 Remnant Studios. All rights reserved.
            </footer>

        </main>
    );
}