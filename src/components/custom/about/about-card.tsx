'use client';

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {useTranslation} from "react-i18next";

export default function AboutCard() {
    const { t } = useTranslation("common");

    return (
        <Card className="w-full max-w-4xl mx-auto rounded-xl shadow-lg bg-background border-muted">
            <CardHeader>
                <div className="flex flex-col items-center text-center">
                    <CardTitle className="text-3xl font-bold text-primary">
                        {t("about-screen.title")}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                        {t("about-screen.description")}
                    </CardDescription>
                </div>
            </CardHeader>

            <CardContent className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3 flex justify-center">
                    <Image
                        src="/logo.png"
                        alt="Festiraa Logo"
                        width={200}
                        height={200}
                        className="rounded-xl object-contain"
                    />
                </div>

                <div className="flex-1 space-y-3 text-sm sm:text-base text-muted-foreground">
                    <p>{t("about-screen.para1")}</p>
                    <p>{t("about-screen.para2")}</p>
                </div>
            </CardContent>

            <Separator className="my-4" />

            <CardFooter className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <span>© {new Date().getFullYear()} Festiraa holidays</span>
                {/*<div className="flex items-center gap-2">*/}
                {/*    <span>Developed by</span>*/}
                {/*    <Image*/}
                {/*        src="/CORSW_BG_LIGHT_64x64.svg"*/}
                {/*        alt="Corner Softwares Logo"*/}
                {/*        width={28}*/}
                {/*        height={28}*/}
                {/*        className="dark:hidden"*/}
                {/*    />*/}
                {/*    <Image*/}
                {/*        src="/CORSW_BG_DARK_64x64.svg"*/}
                {/*        alt="Corner Softwares Logo"*/}
                {/*        width={28}*/}
                {/*        height={28}*/}
                {/*        className="hidden dark:block"*/}
                {/*    />*/}
                    {/*<Link*/}
                    {/*    href="https://corsw.com"*/}
                    {/*    target="_blank"*/}
                    {/*    rel="noreferrer"*/}
                    {/*>*/}
                    {/*    <span className="underline font-semibold hover:text-foreground">*/}
                    {/*      Corner Softwares*/}
                    {/*    </span>*/}
                    {/*</Link>*/}
                {/*</div>*/}
            </CardFooter>
        </Card>
    );
}
