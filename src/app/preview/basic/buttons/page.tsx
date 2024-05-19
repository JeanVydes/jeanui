import Gallery from '@/components/basic/gallery'
import { BasicButton, ButtonWithShadow, BorderedButton, BasicButtonWithIcon, BorderedButtonWithIcon, ButtonWithShadowAndIcon } from '@/components/basic/buttons'

export default function () {
    let buttons = [<BasicButton />,
    <ButtonWithShadow />,
    <BorderedButton />,
    <BasicButtonWithIcon />,
    <ButtonWithShadowAndIcon />,
    <BorderedButtonWithIcon />];
    return (
        <>
            <div className="w-full h-screen z-20">
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