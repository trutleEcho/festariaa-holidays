export default async function TourPackagePage({params}: {params: Promise<{packageName: string}>}){
    const {packageName} = await params;

    return(
        <>
            <div className="w-full h-screen">
                <iframe
                    src={`/packages/${packageName}`}
                    className="w-full h-full rounded-lg"
                />
            </div>
        </>
    )
}