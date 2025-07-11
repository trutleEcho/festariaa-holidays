"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const languages = [
    { code: "en", label: "English" },
    { code: "kn", label: "ಕನ್ನಡ" },
    { code: "mr", label: "मराठी" },
];

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setCurrentLang(lang);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Languages className="h-5 w-5" />
                    <span className="sr-only">Change language</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={currentLang === lang.code ? "font-semibold" : ""}
                    >
                        {lang.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
