import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function FooterCard() {
    return (
        <section className="w-full px-4 sm:px-6 md:px-8 py-10 flex justify-center">
            <Card className="w-full max-w-6xl rounded-xl shadow-sm border-muted bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-700 dark:to-blue-800">
                <CardContent className="p-6 sm:p-10 text-center">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-800 dark:text-white">
                        We strive to provide the best experience possible.
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground mt-3">
                        If you have any questions or feedback, please don’t hesitate to contact us.
                    </p>
                    <Link href="/contact" className="mt-4 text-base font-medium text-primary">
                        Contact us to learn more.
                    </Link>
                </CardContent>
            </Card>
        </section>
    );
}
