"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import Image from "next/image";
import {useTranslation} from "react-i18next";

export default function ContactUsPage() {
    const { t } = useTranslation("common");


    return (
        <section className="w-full max-w-4xl mx-auto p-6">
            <Card className="rounded-xl shadow-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-primary">
                        {t("contact-screen.title")}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                        {t("contact-screen.description")}
                    </CardDescription>
                </CardHeader>

                <CardContent className="grid gap-6 md:grid-cols-2">
                    {/* Left: Contact Details */}
                    <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
                        <p>
                            <strong>Phone:</strong> <a
                            className="underline" href="tel:+917798619709">+91 77986 19709</a>
                        </p>
                        <p>
                            <strong>Email:</strong> <a className="underline"
                                                       href="mailto:festiraaholidays@outlook.com">festiraaholidays@outlook.com</a>
                        </p>
                        <p>
                            <strong>Address:</strong> Pune
                        </p>
                        <Separator/>
                        <div className="flex justify-center">
                            <Image
                                src="/logo.png"
                                alt="Festariaa Logo"
                                width={200}
                                height={200}
                                className="dark:hidden"
                            />
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <form action="https://formsubmit.co/festiraaholidays@outlook.com" method="POST" className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your Name" required/>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="you@example.com" required/>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                rows={4}
                                placeholder="Type your message here..."
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </CardContent>

                <Separator className="my-4"/>

                <CardFooter
                    className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <span>© {new Date().getFullYear()} Festariaa holidays</span>
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
                    {/*    <Link*/}
                    {/*        href="https://corsw.com"*/}
                    {/*        target="_blank"*/}
                    {/*        rel="noreferrer"*/}
                    {/*    >*/}
                    {/*        <span className="underline font-semibold hover:text-foreground">*/}
                    {/*          Corner Softwares*/}
                    {/*        </span>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </CardFooter>
            </Card>
        </section>
    );
}
