import TheNavbar from "@/components/custom/common/the-navbar";

export const metadata = {
    title: 'Festariaa | Contact Us',
    description: 'Contact Festariaa holidays for bookings, queries, or partnerships.',
    icons: {
        icon: '/Festariaa_TnT_32x32.svg',
    },
    applicationName: 'Festariaa holidays',
    authors: [{name: 'Pradyumna Tanksali'}],
    creator: 'Corner Softwares',
    publisher: 'Corner Softwares',
    openGraph: {
        title: 'Festariaa | Contact Us',
        description:
            'Reach out to Festariaa holidays. Whether you need support, want to make a booking, or have general inquiries — we’re here for you.',
        url: 'https://toursandtravels.gauri-shankar.com/contact',
        siteName: 'Festariaa | Contact',
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
