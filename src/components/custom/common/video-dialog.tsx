"use client"

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play, X } from "lucide-react"

interface VideoDialogProps {
    videoUrl: string
    thumbnail: string
    alt: string
}

export default function VideoDialog({
                                        videoUrl,
                                        thumbnail,
                                        alt,
                                    }: VideoDialogProps) {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    className="relative group hover:scale-110 transition-all duration-300 rounded-full p-0 w-16 h-16 overflow-hidden"
                    variant="ghost"
                >
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image
                            src={thumbnail}
                            alt={alt}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <Play className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-white drop-shadow-md" />
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-3xl p-0 bg-transparent backdrop-blur-2xl border-none">
                {/* Close Button */}
                <DialogClose asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 text-white hover:bg-white/20 rounded-full"
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </DialogClose>

                <DialogTitle className="sr-only">{alt}</DialogTitle>
                <video
                    src={videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-[90vh] rounded-lg"
                />
            </DialogContent>
        </Dialog>
    )
}
