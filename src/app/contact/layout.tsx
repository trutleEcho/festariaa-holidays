import TheNavbar from "@/components/custom/common/the-navbar";

export const metadata = {
    title: 'Festiraa | Contact Us',
    description: 'Contact Festiraa holidays for bookings, queries, or partnerships.',
    icons: {
        icon: '/Festiraa_TnT_32x32.svg',
    },
    applicationName: 'Festiraa holidays',
    authors: [{name: 'Pradyumna Tanksali'}],
    creator: 'Corner Softwares',
    publisher: 'Corner Softwares',
    openGraph: {
        title: 'Festiraa | Contact Us',
        description:
            'Reach out to Festiraa holidays. Whether you need support, want to make a booking, or have general inquiries — we’re here for you.',
        url: 'https://toursandtravels.gauri-shankar.com/contact',
        siteName: 'Festiraa | Contact',
        locale: 'en-US',
        type: 'website',
    },
};

export default function ContactLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <section className="h-screen">
                <TheNavbar/>
                <div className="w-full">{children}</div>
            </section>
        </>
    )
}
