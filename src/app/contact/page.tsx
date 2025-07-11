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
import Link from "next/link";
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
                            <strong>Phone:</strong> +91 98765 43210
                        </p>
                        <p>
                            <strong>Email:</strong> gaurishankartravels@example.com
                        </p>
                        <p>
                            <strong>Address:</strong> 123 Main Street, Hubli, Karnataka
                        </p>
                        <Separator/>
                        <div>
                            <Image
                                src="/GS_TnT_LIGHT_LABLE.svg"
                                alt="Gaurishankar Logo"
                                width={200}
                                height={200}
                                className="dark:hidden"
                            />
                            <Image
                                src="/GS_TnT_DARK_LABLE.svg"
                                alt="Gaurishankar Logo"
                                width={200}
                                height={200}
                                className="hidden dark:block"
                            />
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <form className="space-y-4">
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
                    <span>© {new Date().getFullYear()} Gaurishankar Tours & Travels</span>
                    <div className="flex items-center gap-2">
                        <span>Developed by</span>
                        <Image
                            src="/CORSW_BG_LIGHT_64x64.svg"
                            alt="Corner Softwares Logo"
                            width={28}
                            height={28}
                            className="dark:hidden"
                        />
                        <Image
                            src="/CORSW_BG_DARK_64x64.svg"
                            alt="Corner Softwares Logo"
                            width={28}
                            height={28}
                            className="hidden dark:block"
                        />
                        <Link
                            href="https://corsw.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="underline font-semibold hover:text-foreground">
                              Corner Softwares
                            </span>
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </section>
    );
}
