"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "@/components/custom/common/theme-toggle";
import { Menu, X } from "lucide-react"; // icons

export default function TheNavbar() {
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { t } = useTranslation("common");

    useEffect(() => {
        setMounted(true);
    }, []);

    const navLinks = [
        { href: "/", label: t("home") },
        { href: "/about", label: t("about") },
        { href: "/contact", label: t("contact") },
    ];

    return (
        <header className="absolute left-0 right-0 top-0 z-50 bg-gradient-to-b from-background/20 to-background/10 shadow-sm">
            <section className="w-full flex flex-row justify-between items-center px-5 py-3">
                {/* Logo */}
                <div>
                    {mounted && (
                        <Link href="/">
                            <Image
                                src="/logo_3.png"
                                alt="logo"
                                width={32}
                                height={32}
                                priority
                                className="m-2"
                            />
                        </Link>
                    )}
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex border-none">
                    <ul className="flex flex-row items-center gap-6">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`group relative px-2 py-2 text-base font-medium transition-colors duration-300 ${
                                            isActive
                                                ? "text-primary font-semibold"
                                                : "text-muted-background"
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

                {/* Language + Theme + Mobile Toggle */}
                <div className="flex flex-row items-center gap-4">
                    <ThemeToggle />

                    {/* Hamburger button for mobile */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-accent"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </section>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-background border-t border-border px-5 py-4 animate-slideDown">
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block px-2 py-2 rounded-lg transition-colors ${
                                            isActive
                                                ? "text-primary font-semibold"
                                                : "text-muted-foreground hover:text-foreground"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </header>
    );
}
