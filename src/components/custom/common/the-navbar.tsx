"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";
import LanguageSelector from "@/components/custom/common/language-selector";
import {ThemeToggle} from "@/components/custom/common/theme-toggle";

export default function TheNavbar() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const { t } = useTranslation("common");

    useEffect(() => {
        setMounted(true);
    }, []);

    const logoSrc =
        mounted && resolvedTheme === "dark"
            ? "/GS_TnT_LIGHT_64x64.svg"
            : "/GS_TnT_DARK_64x64.svg";

    const navLinks = [
        { href: "/", label: t("home") },
        { href: "/about", label: t("about") },
        { href: "/contact", label: t("contact") },
    ];

    return (
        <header className="sticky p-5 z-50 bg-background">
            <section className="w-full flex flex-row justify-between items-center">
                {/* Logo */}
                <div>
                    {mounted && (
                        <Image
                            src={logoSrc}
                            alt="logo"
                            width={64}
                            height={64}
                            priority
                        />
                    )}
                </div>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex flex-row items-center pt-5 md:gap-4 md:pt-0">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`group relative px-4 py-2 text-base font-medium transition-colors duration-300 ${
                                            isActive
                                                ? "text-primary font-semibold"
                                                : "text-muted-foreground"
                                        }`}
                                    >
                                        {link.label}
                                        <span
                                            className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300 ${
                                                isActive ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Language and Theme Toggle */}
                <div className="flex flex-row gap-4">
                    <LanguageSelector />
                    <ThemeToggle />
                </div>
            </section>
            <Separator className="w-[95%] my-4" />
        </header>
    );
}
