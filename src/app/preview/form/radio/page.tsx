import CodeBanner from '@/components/code';
import { BasicRadio, BasicRadioChecked, BasicRadioDisabled, BasicRadioLabeled, BasicRadioLabeledChecked, BasicRadioLabeledDisabled } from '@/components/form/radio';

export default function RadioPreview() {
    let radios = [
        <BasicRadio key={0} />,
        <BasicRadioChecked key={1} />,
        <BasicRadioDisabled key={2} />,
        <BasicRadioLabeled key={3} />,
        <BasicRadioLabeledChecked key={4} />,
        <BasicRadioLabeledDisabled key={5} />
    ];

    return (
        <>
            <div className=" absolute">
                <CodeBanner github_url='https://github.com/JeanVydes/jeanui/blob/dimension137/src/components/form/radio.tsx' />
            </div>
            <div className="w-full h-screen z-20 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {radios.map((element, index) => (
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