// app/providers.tsx
"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import I18nProvider from "@/components/I18nProvider";

export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <I18nProvider>
                {children}
                <Toaster richColors />
            </I18nProvider>
        </ThemeProvider>
    );
}
