import { motion } from 'framer-motion';

export default function About() {
    const features = [
        {
            title: "Anti-Autoclicker Software",
            description: `Upon release, our software instantly became the dominant security product in the market.
                            Creators have implemented our work in over a hundred games visited by thousands of players.`,
            image: "/total_purchases.png",
        },
        {
            title: "Outreach and Awareness",
            description: `Because of its game-changing capabilities, our software redefined how autoclicking was perceived by players.
                            For the first time, creators were given the opportunity to design games protected from cheaters.`,
            image: "/awareness.png",
        },
        {
            title: "The Defining Innovation",
            description: `Historically, anti-autoclickers relied on clicks-per-second (CPS). However, autoclicking remains effective
                            at click speeds comparable to those of many players, so detection attempts failed to prevent cheaters. Our software
                            identifies patterns in user clicks without relying on CPS.`,
            image: "/average_cps.png",
        },
        {
            title: "Community Impact",
            description: `Within the first year of release, our anti-autoclicker is used internationally with hundreds
                            of thousands of users having played games containing our software.`,
            image: "/impact.png",
        },
    ];

    return (
        <main className="flex flex-col overflow-x-hidden pt-20">

            { /* Header Blurb */ }
            <section className="flex items-center justify-center text-center pt-5 pb-4 bg-gray-100">
                <div className="relative flex flex-col items-center px-4">
                    <p className="text-lg font-extralight"> { /* max-w-xl */ }
                        We create secure and accessible products and games to enrich the experience of the virtual world.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="grid gap-8 px-8 py-2 bg-white text-black items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group/feature transition-colors"
                        >
                            <div
                                className={` flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-4
                                ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                { /* Text */ }
                                <div className="w-[50%]">
                                    <h2 className={`text-5xl font-medium transition-colors mb-4`} 
                                    style={{ fontFamily: "'EB Garamond', serif"}}>
                                        {feature.title}
                                    </h2>

                                    <p className={`font-extralight mt-2 max-w transition-colors`}>
                                        {feature.description}
                                    </p>
                                </div>
                                
                                { /* Image */ }
                                <div className="w-[full] h-[300px] flex justify-center items-center overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={feature.image}
                                        alt="Feature Image"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            </div>

                            { /* Separator line */ }
                            <div className={`${index % 4 < 3 ? 'h-px w-full bg-gray-700 my-2' : ''}`}></div>
                        </div>
                    ))}
                </motion.div>
            </section> 

            <footer className="w-full bg-black text-white font-light text-center text-sm py-4">
                    Copyright © 2025 Remnant Studios. All rights reserved.
            </footer>
        </main>
    );
}