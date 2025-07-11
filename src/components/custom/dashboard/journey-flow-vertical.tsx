"use client";

import { motion } from "framer-motion";
import { Car, Compass, Handshake } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";

export default function JourneyFlowVertical() {
    const { t } = useTranslation("common");

    const steps = [
        {
            icon: <Car className="h-6 w-6 text-primary" />,
            title: t("journey-steps.step1_title"),
            description: t("journey-steps.step1_description"),
        },
        {
            icon: <Compass className="h-6 w-6 text-primary" />,
            title: t("journey-steps.step2_title"),
            description: t("journey-steps.step2_description"),
        },
        {
            icon: <Handshake className="h-6 w-6 text-primary" />,
            title: t("journey-steps.step3_title"),
            description: t("journey-steps.step3_description"),
        },
    ];

    return (
        <section className="w-full max-w-2xl mx-auto py-12 px-4">
            <h2 className="text-center text-2xl sm:text-3xl font-semibold text-primary mb-8">
                {t("journey-steps.title")}
            </h2>

            <Separator className="mb-8" />

            <div className="flex justify-center">
                <div className="relative flex flex-col gap-16 border-l border-muted pl-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                        >

                            <div className="flex gap-4">
                                <div className="pt-1">{step.icon}</div>
                                <div>
                                    <h3 className="text-base font-medium text-foreground">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
