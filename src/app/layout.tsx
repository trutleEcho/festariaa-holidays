import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";
// import '../../i18n';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Festiraa Holidays",
    description: "Looking for the best tour and travels around you? Look no further, we have got you covered!",
    applicationName: "Festiraa holidays",
    authors: [{name: "Pradyumna Tanksali"}],
    creator: "Corner Softwares",
    publisher: "Corner Softwares",
    openGraph: {
        title: "Festiraa ",
        description: "Looking for the best tour and travels around you? Look no further, we have got you covered!",
        siteName: "Festiraa ",
        locale: "en-US",
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
