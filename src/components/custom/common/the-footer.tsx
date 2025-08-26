import pkg from "../../../../package.json"

export default function TheFooter() {
    return (
        <footer className="w-full border-t border-muted bg-muted/20 mt-10 py-6 px-4 text-sm text-muted-foreground">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Left: Company Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
                    <span>© 2025 Festiraa holidays | v{pkg.version}</span>
                    <span>All rights reserved.</span>
                    <span className="text-xs">
                        pune-413004
                      </span>
                    <span className="text-xs">
                        Email: <a className="underline"
                                  href="mailto:festiraaholidays@outlook.com">festiraaholidays@outlook.com</a> | Phone: <a
                        className="underline" href="tel:+918263829207">+91 82638 29207</a>
                     </span>
                </div>

                {/* Right: Developer Info */}
                {/*<div className="flex flex-col items-center gap-2 text-center bg-muted/50 rounded-lg p-6 px-12">*/}
                {/*    <span className="text-xs">Developed & maintained by</span>*/}
                {/*    <div className="flex flex-col items-center">*/}
                {/*        <Image*/}
                {/*            src="/CORSW_BG_LIGHT_64x64.svg" // use a neutral or default logo for static rendering*/}
                {/*            alt="Corner Softwares"*/}
                {/*            width={48}*/}
                {/*            height={48}*/}
                {/*            priority*/}
                {/*            className="block dark:hidden"*/}
                {/*        />*/}
                {/*        <Image*/}
                {/*            src="/CORSW_BG_DARK_64x64.svg" // use a neutral or default logo for static rendering*/}
                {/*            alt="Corner Softwares"*/}
                {/*            width={48}*/}
                {/*            height={48}*/}
                {/*            priority*/}
                {/*            className="hidden dark:block"*/}
                {/*        />*/}
                {/*        <Tooltip>*/}
                {/*            <TooltipTrigger className="mt-2">*/}
                {/*                <span className="text-lg font-medium">Corner Softwares</span>*/}
                {/*            </TooltipTrigger>*/}
                {/*            <TooltipContent>*/}
                {/*                <p>We don’t just build. We architect.</p>*/}
                {/*            </TooltipContent>*/}
                {/*        </Tooltip>*/}
                {/*        <a*/}
                {/*            className="underline font-extralight"*/}
                {/*            href="mailto:trichup20@gmail.com"*/}
                {/*        >*/}
                {/*            Contact Developer*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </footer>
    );
}
