import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <main className="flex flex-col h-screen overflow-x-hidden pt-20">   { /* pt-20 is navbar size */ }
            <div className="flex flex-col flex-1">

                <section className="relative flex flex-row h-[50%] bg-cover bg-center bg-white">

                    {/* Text Left */}
                    <div className="relative w-[50%]">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative flex flex-col items-start justify-center h-full"
                        >

                        <div className="relative flex flex-col items-start justify-center h-full">
                            <h1
                                className="text-5xl font-medium text-left text-black mt-10 ml-[10%] mr-[10%]"
                                style={{ fontFamily: "'EB Garamond', serif" }}
                            >
                                Engineer state-of-the-art software integrity
                            </h1>
                            <p className="text-lg font-extralight text-black mt-5 ml-[10%] mr-[10%]">
                                Join us as a software developer or game architect.
                            </p>
                        </div>
                        </motion.div>
                    </div>

                    {/* Text Right */}
                    <div className="relative w-[50%]">

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative flex flex-col items-start justify-center h-full"
                        >

                        <div className="relative flex flex-col items-end justify-center h-full">
                            <h1
                                className="text-5xl font-medium text-right text-black mt-10 ml-[10%] mr-[10%]"
                                style={{ fontFamily: "'EB Garamond', serif" }}
                            >
                                Empower players and game designers worldwide
                            </h1>
                            <p className="text-lg font-extralight text-black mt-5 ml-[10%] mr-[10%]">
                                Reach hundreds of creators and thousands of players.
                            </p>
                        </div>
                        </motion.div>
                    </div>
                </section>

                { /* <div className="h-px w-full bg-gray-700 mt-4"></div> */ }

                { /* Connect */ }
                <section className="flex flex-1 items-center justify-center text-center bg-gray-100 text-black">
                    <div className="border rounded-lg p-5 ">
                        <h1 
                            className="text-5xl font-medium text-black"
                            style={{ fontFamily: "'EB Garamond', serif" }}
                        >
                            Contact Us
                        </h1>

                        <p className="text-3xl flex flex-row font-extralight text-black mt-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                                className="w-10 h-10 mr-1"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            info@remnant-studios.com
                        </p>
                    </div>
                </section>
            </div>

            <footer className="w-full bg-black text-white font-light text-center text-sm py-4">
                    Copyright © 2025 Remnant Studios. All rights reserved.
            </footer>
        </main>
    );
}