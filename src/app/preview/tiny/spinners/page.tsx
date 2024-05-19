import { Spinner, Spinner2} from '@/components/tiny/spinner';

export default function () {
    let spinners = [
        <Spinner />,
        <Spinner2 />,
    ];

    return (
        <>
            <div className="w-full h-screen z-20">
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