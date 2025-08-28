import { Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function TestimonialSection() {
    return (
        <main className="m-4 lg:m-12 p-6 lg:p-12 border border-foreground/10 rounded-3xl">
            <section className="flex flex-col items-center gap-6 lg:gap-8">
                {/* Header */}
                <div className="flex flex-row justify-center items-center gap-2">
                    <Sparkles className="text-yellow-400" />
                    <span className="text-xs sm:text-sm text-yellow-500">Testimonials</span>
                </div>
                <div className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
                    What Our Clients think about <br /> Festiraa Holidays
                </div>

                {/* Cards Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
                    {/* Video Card */}
                    <Card className="relative col-span-1 md:col-span-2 lg:col-span-3 min-h-[300px] lg:min-h-[600px] p-0 flex justify-between border-none overflow-hidden rounded-2xl group">
                        {/* Background Video */}
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            src="/tours/monk-vid.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        {/* Overlay Content */}
                        <CardContent className="relative z-10 py-6 sm:py-10 bg-background/40 text-center">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                                Discover Tours
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg text-white/80">
                                Explore the world with us
                            </p>
                        </CardContent>
                    </Card>
                    {/* Large Background Card */}
                    <Card
                        className="lg:col-span-2 min-h-[400px] lg:min-h-[600px] border-none font-mono hover:scale-105 transition-all delay-100 duration-500 rounded-2xl overflow-hidden"
                        style={{
                            backgroundImage: "url('/tours/kerala.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <CardContent className="relative h-full px-6 lg:px-12 py-8">
                            <div className="absolute bottom-0 left-0 right-0 bg-background/30 p-6 sm:p-8 flex flex-col gap-4">
                <span className="text-base lg:text-lg font-semibold text-white/80">
                  Explore wonders with us
                </span>
                                <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  &quot;Had the Best journey of my life. Thanks to{" "}
                                    <Link href="/" className="underline">
                    Festiraa Holidays
                  </Link>
                                    &quot;
                                    <br />
                  <span className="text-sm sm:text-base">- Radhika Apte</span>
                </span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Stats Card */}
                    <Card className="px-6 py-10 flex flex-col justify-between border-none bg-yellow-300 hover:scale-105 transition-all delay-100 duration-500 rounded-2xl overflow-hidden">
                        <CardHeader>
                            <CardDescription className="font-thin text-white text-sm sm:text-base">
                                Facts and Numbers
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-mono text-white leading-snug">
                80% <br /> Of customers <br /> recommended <br />
                <Link href="/" className="underline text-primary/80">
                  Festiraa Holidays
                </Link>
              </span>
                        </CardContent>
                    </Card>

                    {/* Image Cards */}
                    <Card
                        className="min-h-[250px] lg:min-h-[400px] border-none hover:scale-105 transition-all delay-100 duration-500 rounded-2xl overflow-hidden"
                        style={{
                            backgroundImage: "url('/tours/tea-garden.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <Card className="px-6 py-10 flex flex-col justify-between border-none bg-green-500 hover:scale-105 transition-all delay-100 duration-500 rounded-2xl overflow-hidden">
                        <CardHeader>
                            <CardDescription className="font-thin text-white text-sm sm:text-base">
                                Review
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold font-mono text-white leading-snug">
                Can’t wait to travel again with{" "}
                  <Link href="/" className="underline text-primary/80">
                  Festiraa Holidays
                </Link>
              </span>
                        </CardContent>
                    </Card>
                    <Card
                        className="min-h-[250px] lg:min-h-[400px] border-none hover:scale-105 transition-all delay-100 duration-500 rounded-2xl overflow-hidden"
                        style={{
                            backgroundImage: "url('/tours/goa-beach.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />


                </section>
            </section>
        </main>
    );
}
