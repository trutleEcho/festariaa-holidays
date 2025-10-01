"use client"

import {ArrowRight, GlassWater, Umbrella} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function BaliPackagesSection() {
    return (
        <main
            className="relative h-[80vh] md:h-screen rounded-3xl m-2 md:m-4 flex items-center justify-center text-center overflow-hidden"
            style={{
                backgroundImage: "url('/tours/bali.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Top Left Title */}
            <motion.div
                className="absolute top-6 left-4 md:top-10 md:left-10"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <span className="text-xl md:text-2xl font-mono font-bold text-white drop-shadow-md">
                    Island of the Gods
                </span>
            </motion.div>

            {/* Centered Heading */}
            <motion.div
                className="px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <span className="text-lg md:text-2xl font-bold text-white block">
                    Let us plan your next adventure
                </span>
                <br />
                <span className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    Bali <br /> Tour
                </span>
            </motion.div>

            {/* Floating Feature 1 */}
            <motion.div
                className="absolute top-1/4 lg:top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2
                           bg-white/20 backdrop-blur-sm border border-white/40 px-3 py-2 md:px-4 md:py-3
                           rounded-full flex items-center gap-2 text-white"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Umbrella className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">Relax on Beaches</span>
            </motion.div>

            {/* Floating Feature 2 */}
            <motion.div
                className="absolute top-2/3 right-1/4 translate-x-1/2 -translate-y-1/2
                           bg-white/20 backdrop-blur-sm border border-white/40 px-3 py-2 md:px-4 md:py-3
                           rounded-full flex items-center gap-2 text-white"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <GlassWater className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">Enjoy Local Drinks</span>
            </motion.div>

            {/* Bottom Section */}
            <motion.section
                className="absolute bottom-0 left-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Label */}
                <div className="bg-background w-fit px-4 py-3 md:px-8 md:py-6 rounded-tr-2xl">
                    <span className="text-lg md:text-2xl font-semibold">Know More</span>
                </div>

                {/* Info Row */}
                <div
                    className="bg-background px-4 py-4 md:px-8 md:py-6 rounded-tr-2xl
                               flex flex-row gap-4 md:gap-8 justify-between items-center"
                >
                    <div className="flex gap-3 md:gap-4 flex-row items-center">
                        {/*<VideoDialog*/}
                        {/*    videoUrl="https://ygojvf8zbta1ooiv.public.blob.vercel-storage.com/bali.mp4"*/}
                        {/*    thumbnail="/tours/bali_beach.png"*/}
                        {/*    alt="Bali Tour"*/}
                        {/*/>*/}
                        <div className="flex flex-col text-left">
                            <span className="text-lg md:text-2xl font-semibold">Bali Tour</span>
                            <span className="text-xs md:text-sm text-muted-foreground font-light">
                                Check out the PDF for more details
                            </span>
                        </div>
                    </div>
                    <div>
                        <Link href="/bali_package.pdf" passHref>
                            <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                        </Link>
                    </div>
                </div>
            </motion.section>
        </main>
    )
}
