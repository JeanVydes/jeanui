import CodeBanner from '@/components/code';
import { BasicInput, BasicInputDisabled, BasicInputStatus, BasicInputWithLabel, BasicInputWithLabelDisabled, BasicInputWithLabelStatus } from '@/components/form/input';

export default function InputsPreview() {
    let inputs = [
        <BasicInput key={0} />,
        <BasicInputStatus key={1} />,
        <BasicInputDisabled key={2} />,
        <BasicInputWithLabel key={3} />,
        <BasicInputWithLabelStatus key={4} />,
        <BasicInputWithLabelDisabled key={5} />
    ];

    return (
        <>
            <div className=" absolute">
                <CodeBanner github_url='https://github.com/JeanVydes/jeanui/blob/dimension137/src/components/form/input.tsx' />
            </div>
            <div className="w-full h-screen z-20 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {inputs.map((element, index) => (
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