import TheNavbar from "@/components/custom/common/the-navbar";

export const metadata = {
    title: 'GS | Contact Us',
    description: 'Contact Gaurishankar Tours & Travels for bookings, queries, or partnerships.',
    icons: {
        icon: '/GS_TnT_32x32.svg',
    },
    applicationName: 'Gaurishankar Tours and Travels',
    authors: [{name: 'Pradyumna Tanksali'}],
    creator: 'Corner Softwares',
    publisher: 'Corner Softwares',
    openGraph: {
        title: 'GS | Contact Us',
        description:
            'Reach out to Gaurishankar Tours & Travels. Whether you need support, want to make a booking, or have general inquiries — we’re here for you.',
        url: 'https://toursandtravels.gauri-shankar.com/contact',
        siteName: 'GS | Contact',
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
