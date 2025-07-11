'use client'

import {useTranslation} from "react-i18next";
import {Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import VehicleCard from "@/components/custom/dashboard/vehicle-card";
import Link from "next/link";
import vehicles from "../../../../public/data/vehicles.json"

export default function VehiclesSection() {
    const {t} = useTranslation("common");

    return (
        <>
            <section className="w-full px-4 sm:px-6 md:px-8 py-6 flex justify-center">
                <Card
                    className="w-full max-w-7xl text-black/60 dark:text-white rounded-xl shadow-md px-4 sm:px-6 md:px-10 py-6">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold md:text-3xl">
                            {t("vehicles-section.title")}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                            {t("journey-steps.step1_title")}
                        </CardDescription>
                        <CardAction>
                            <Button variant="link" className="animate-gradient text-white">
                                <Link href="/contact" className="text-white">
                                    {t("contact")}
                                </Link>
                            </Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <Separator className="mb-8"/>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {vehicles.map((vehicle) => (
                                <VehicleCard key={vehicle.name} vehicle={vehicle}/>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </section>
        </>
    )
}