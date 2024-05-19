import { LinearProgressBar, RadialProgressBar } from "@/components/tiny/progress";

export default function () {
    let progress = [
        <LinearProgressBar />,
        <RadialProgressBar />,
    ];

    return (
        <>
            <div className="w-full h-screen z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {progress.map((element, index) => (
                        <div className="w-full grid place-content-center border border-neutral-500" key={index}>
                            <div className="p-8">
                                {element}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}