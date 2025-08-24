import TheNavbar from "@/components/custom/common/the-navbar";

export const metadata = {
    title: 'Festariaa | About',
    description: 'Get to know about us. Explore our services and products.',
    icons: {
        icon: '/Festariaa_TnT_32x32.svg',
    },
    applicationName: "Festariaa holidays",
    authors: [{name: "Pradyumna Tanksali"}],
    creator: "Corner Softwares",
    publisher: "Corner Softwares",
    openGraph: {
        title: "Festariaa | About",
        description: "Looking to know more about us? Look no further, we have got you covered! We offer a wide range of services and products to meet your travel needs. Contact us today to learn more about our services and products.",
        url: "https://toursandtravels.gauri-shankar.com/about",
        siteName: "Festariaa | About",
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