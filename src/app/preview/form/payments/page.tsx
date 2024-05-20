import CodeBanner from '@/components/code';
import { CardNumberInput, CardNumberInputDisabled, CardNumberInputStatus, SelectPaymentMethod, SelectPaymentMethodChecked, SelectPaymentMethodDisabled } from '@/components/form/payments';

export default function PaymentsPreview() {
    let payments = [
        <SelectPaymentMethod key={0} />,
        <SelectPaymentMethodChecked key={1} />,
        <SelectPaymentMethodDisabled key={2} />,
        <CardNumberInput key={2} />,
        <CardNumberInputStatus key={3} />,
        <CardNumberInputDisabled key={4} />,
    ];

    return (
        <>
            <div className=" absolute">
                <CodeBanner github_url='https://github.com/JeanVydes/jeanui/blob/dimension137/src/components/form/payments.tsx' />
            </div>
            <div className="w-full h-screen z-20 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {payments.map((element, index) => (
                        <div className="w-full grid place-content-center border border-neutral-500" key={index}>
                            <div className="py-8">
                                {element}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}