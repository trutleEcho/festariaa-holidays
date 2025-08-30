"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function DashboardBanner() {
    const { t } = useTranslation("common");

    return (
        <main className="p-4">
            <section
                id="banner"
                className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden"
            >
                {/* Background video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover -z-10 rounded-2xl"
                    src="https://cdn.pixabay.com/video/2025/03/29/268528_large.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Overlay card */}
                <Card className="relative w-full max-w-5xl mx-4 sm:mx-6 md:mx-10 bg-primary-500/90 text-white dark:text-black rounded-2xl shadow-lg p-6 sm:p-10 border-none">
                    <CardHeader className="pt-2 sm:pt-5">
                        <CardTitle className="flex justify-center">
                            <Image
                                className="w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
                                src="/logo.png"
                                alt="Festariaa Logo"
                                width={300}
                                height={256}
                                priority
                            />
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="text-center">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black/80 dark:text-white mb-4">
                            {t("banner.text1")}
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80 dark:text-black/70">
            <span className="block text-base sm:text-lg md:text-xl font-semibold mb-3 text-black dark:text-white">
              {t("banner.text4")}
            </span>
                            {t("banner.text5")} <br />
                            {t("banner.text6")} <br />
                            {t("banner.text7")}
                        </p>
                    </CardContent>

                    <CardFooter className="mt-8">
                        <div className="w-full">
                            <Separator className="mb-4 bg-white/40 dark:bg-black/20" />
                            <p className="text-right text-sm sm:text-lg md:text-xl font-medium text-white dark:text-black">
                                {t("banner.text3")}
                            </p>
                        </div>
                    </CardFooter>
                </Card>
            </section>
        </main>
    );
}
