import Gallery from '@/components/basic/gallery'
import { BasicButton, ButtonWithShadow, BorderedButton, BasicButtonWithIcon, BorderedButtonWithIcon, ButtonWithShadowAndIcon } from '@/components/basic/buttons'
import CodeBanner from '@/components/code';

export default function ButtonsPreview() {
    let buttons = [<BasicButton key={0} />,
    <ButtonWithShadow key={1} />,
    <BorderedButton key={2} />,
    <BasicButtonWithIcon key={3} />,
    <ButtonWithShadowAndIcon key={4} />,
    <BorderedButtonWithIcon key={5} />];
    return (
        <>
            <div className=" absolute">
                <CodeBanner github_url='https://github.com/JeanVydes/jeanui/blob/dimension137/src/components/basic/buttons.tsx' />
            </div>
            <div className="w-full h-screen z-20 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {buttons.map((button, index) => (
                        <div className="w-full grid place-content-center border border-neutral-500" key={index}>
                            <div className="p-8">
                                {button}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}