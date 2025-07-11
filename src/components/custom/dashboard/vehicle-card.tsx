"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Vehicle } from "@/types/vehicle";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export interface VehicleCardProps {
    vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
    return (
        <Card className="w-full max-w-3xl border border-muted/30 bg-background/70 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.015] transition-shadow duration-300">
            <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-foreground">
                    {vehicle.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                    {vehicle.year} &nbsp;|&nbsp; {vehicle.model} &nbsp;|&nbsp; {vehicle.color}
                </CardDescription>
            </CardHeader>

            <Separator className="mb-6" />

            <CardContent className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-full md:w-1/3">
                    <Image
                        src={vehicle.image}
                        alt={`${vehicle.name} image`}
                        width={300}
                        height={200}
                        className="rounded-md object-cover w-full shadow-sm hover:scale-[1.015] transition-transform duration-300"
                    />
                </div>

                <div className="flex-1 space-y-2 text-sm text-muted-foreground">
                    <p>
                        <span className="font-medium text-foreground">Contact:</span> {vehicle.contact}
                    </p>
                    <p className="leading-relaxed">{vehicle.description}</p>
                </div>
            </CardContent>
        </Card>
    );
}
