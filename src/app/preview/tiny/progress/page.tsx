import CodeBanner from "@/components/code";
import { LinearProgressBar, RadialProgressBar } from "@/components/tiny/progress";

export default function ProgressView() {
    let progress = [
        <LinearProgressBar />,
        <RadialProgressBar />,
    ];

    return (
        <>
            <div className=" absolute">
                <CodeBanner github_url='https://github.com/JeanVydes/jeanui/blob/dimension137/src/components/tiny/progress.tsx' />
            </div>
            <div className="w-full h-screen z-20 mt-12">
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