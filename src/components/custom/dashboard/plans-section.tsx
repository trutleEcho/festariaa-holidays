import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Pin } from "lucide-react";

export default function PlansSection() {
    return (
        <main className="w-full px-4 py-12 md:px-12">
            <section className="bg-background rounded-xl p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                    Exclusive Plans <br />
                    Packages Tailored <br /> Just For You
                </h2>

                <Separator className="my-8" />

                {/* Responsive Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <div className="bg-primary/20 rounded-3xl overflow-hidden">
                        <div className="relative w-full h-[250px] md:h-[400px]">
                            <Image
                                src="/tours/goa-beach-2.png"
                                alt="Goa Beach"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-6 left-4 flex flex-col items-start gap-2">
                                <span className="text-white text-lg md:text-2xl font-bold">
                                    Along Gods Embrace
                                </span>
                                <div className="flex items-center gap-1">
                                    <Pin className="text-white" width={15} height={15} />
                                    <span className="text-white text-xs md:text-sm font-light">
                                        South Goa
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-primary/20 rounded-3xl overflow-hidden">
                        <div className="relative w-full h-[250px] md:h-[400px]">
                            <Image
                                src="/tours/rajasthan.png"
                                alt="Rajasthan"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-6 left-4 flex flex-col items-start gap-2">
                                <span className="text-white text-lg md:text-2xl font-bold">
                                    Beauty Of Rajasthan
                                </span>
                                <div className="flex items-center gap-1">
                                    <Pin className="text-white" width={15} height={15} />
                                    <span className="text-white text-xs md:text-sm font-light">
                                        Rajasthan
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-primary/20 rounded-3xl overflow-hidden">
                        <div className="relative w-full h-[250px] md:h-[400px]">
                            <Image
                                src="/tours/taj-mahal.png"
                                alt="Taj Mahal"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-6 left-4 flex flex-col items-start gap-2">
                                <span className="text-white text-lg md:text-2xl font-bold">
                                    Marvel of Love
                                </span>
                                <div className="flex items-center gap-1">
                                    <Pin className="text-white" width={15} height={15} />
                                    <span className="text-white text-xs md:text-sm font-light">
                                        Taj Mahal (Agra)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video Card - Full Width on Large Screens */}
                    <div className="bg-primary/20 rounded-3xl overflow-hidden sm:col-span-2 lg:col-span-3">
                        <div className="relative w-full h-[250px] md:h-[500px]">
                            <video
                                className="absolute inset-0 w-full h-full object-cover"
                                src="/tours/festiraa_kerla_vid.mp4"
                                controls
                                loop
                                playsInline
                            />
                            <div className="absolute top-6 left-4 flex flex-col items-start gap-2">
                                <span className="text-white text-lg md:text-2xl font-bold">
                                    Beauty of Kerala
                                </span>
                                <div className="flex items-center gap-1">
                                    <Pin className="text-white" width={15} height={15} />
                                    <span className="text-white text-xs md:text-sm font-light">
                                        Kerala
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}
