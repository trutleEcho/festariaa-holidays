import TheNavbar from "@/components/custom/common/the-navbar";

export const metadata = {
    title: 'GS | About',
    description: 'Get to know about us. Explore our services and products.',
    icons: {
        icon: '/GS_TnT_32x32.svg',
    },
    applicationName: "Gaurishankar Tours and Travels",
    authors: [{name: "Pradyumna Tanksali"}],
    creator: "Corner Softwares",
    publisher: "Corner Softwares",
    openGraph: {
        title: "GS | About",
        description: "Looking to know more about us? Look no further, we have got you covered! We offer a wide range of services and products to meet your travel needs. Contact us today to learn more about our services and products.",
        url: "https://toursandtravels.gauri-shankar.com/about",
        siteName: "GS | About",
        locale: "en-US",
        type: "website",
    },
};

export default function AboutLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <TheNavbar/>
            <div className="w-full h-full">
                {children}
            </div>
        </>
    )
}