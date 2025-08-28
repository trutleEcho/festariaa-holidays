"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function DashboardBanner() {
    const { t, i18n } = useTranslation("common");

    const fullText = t("banner.text2");
    const [typedText, setTypedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        setTypedText("");
        let index = 0;

        const typingInterval = setInterval(() => {
            setTypedText((prev) => prev + fullText.charAt(index));
            index++;
            if (index >= fullText.length) clearInterval(typingInterval);
        }, 80);

        return () => clearInterval(typingInterval);
    }, [fullText, i18n.language]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <section className="relative w-full px-4 sm:px-6 md:px-8 py-24 flex justify-center">
            <video className="absolute inset-0 left-0 w-full h-full object-cover -z-10" src="/hero-vid.mp4" autoPlay loop muted/>
            <Card className="border-none relative w-full max-w-7xl bg-primary-500 text-white dark:text-black rounded-xl shadow-md px-4 sm:px-6 md:px-10 py-6">
                <CardHeader className="pt-5">
                    <CardTitle className="flex justify-center">
                        <Image
                            className="w-auto max-w-[250px] sm:max-w-[300px]"
                            src="/logo.png"
                            alt="Festariaa Logo"
                            width={300}
                            height={256}
                            priority
                        />
                    </CardTitle>
                </CardHeader>

                <CardContent className="text-center px-2 sm:px-6">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black/80 dark:text-white mb-2">
                        {t("banner.text1")}
                    </h1>
                    <div className="text-xl sm:text-2xl md:text-4xl font-medium text-white dark:text-black/80 mb-6 min-h-[3rem]">
                        {typedText}
                        <span
                            className={`inline-block w-[1ch] ${
                                showCursor ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            |
                        </span>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80 dark:text-black/60">
                        <span className="block text-base sm:text-lg md:text-xl font-semibold mb-2 text-black dark:text-white">
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
    );
}
