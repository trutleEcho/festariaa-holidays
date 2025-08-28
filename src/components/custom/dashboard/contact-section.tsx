"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function ContactSection() {
    const handleWhatsAppClick = () => {
        // Phone number must be without "+" or spaces
        const phoneNumber = "918263829207"
        const message = encodeURIComponent(
            "Hi! I'm interested in your travel packages. Can you help me plan my next adventure?",
        )
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
        window.open(whatsappUrl, "_blank")
    }

    return (
        <div className="container mx-auto px-4 py-16 max-w-md">
            <div className="text-center space-y-6">
                <div>
                    <h1 className="text-3xl font-semibold text-foreground mb-3 text-balance">Ready to Travel?</h1>
                    <p className="text-muted-foreground text-pretty">Chat with us on WhatsApp for instant travel assistance</p>
                </div>

                <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg w-full"
                >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Start WhatsApp Chat
                </Button>

                <p className="text-sm text-muted-foreground">Available 24/7 • Quick responses guaranteed</p>
            </div>
        </div>
    )
}
