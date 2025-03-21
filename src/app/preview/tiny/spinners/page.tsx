import CodeBanner from '@/components/code';
import { Spinner, Spinner2} from '@/components/tiny/spinner';

export default function SpinnersPreview() {
    let spinners = [
        <Spinner key={0} />,
        <Spinner2 key={1} />,
    ];

    return (
        <>
            <div className=" absolute">
                <CodeBanner github_url='https://github.com/JeanVydes/jeanui/blob/dimension137/src/components/tiny/spinner.tsx' />
            </div>
            <div className="w-full h-screen z-20 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {spinners.map((spinner, index) => (
                        <div className="w-full grid place-content-center border border-neutral-500" key={index}>
                            <div className="p-8">
                                {spinner}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}