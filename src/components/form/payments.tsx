
export function SelectPaymentMethod() {
    return (
        <div className="w-full flex justify-center relative">
            <div className="absolute w-full h-full bg-neutral-900 opacity-70 z-10 hidden hover:cursor-not-allowed" />
            <label htmlFor="my-input1" className="hover:cursor-pointer bg-neutral-900 text-white has-[:checked]:bg-neutral-800 has-[:checked]:text-neutral-100 w-full h-full border-neutral-400 rounded-md flex flex-row justify-around items-center space-x-24 px-4 py-2">
                <div className="w-1/2 h-10 flex flex-row w-full h-full items-center space-x-4">
                    <div className="flex-none flex items-center">
                        <input id="my-input1" value="card-1" name="xxx1" type="radio" className="
                        peer
                        w-4 h-4 
                        appearance-none
                        border-2 border-neutral-200 rounded-full 
                        disabled:border-neutral-700" />
                        <div className="absolute w-2 h-2 rounded-full ml-1 peer-checked:bg-neutral-200 peer-checked:peer-disabled:bg-neutral-700" />
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full">
                            <span className="text-sm tracking-widest">**** 7891</span>
                        </div>
                        <div className="w-full flex flex-row items-center space-x-1 text-[12px]">
                            <span className="hover:cursor-pointer hover:underline">View</span>
                            <span>|</span>
                            <span className="hover:cursor-pointer hover:underline">Edit</span>
                        </div>
                    </div>
                </div>
                <div id="card-brand" className="flex-none h-10 flex items-center">
                    <img className="h-1/2" src="https://i0.wp.com/americassbdc.org/wp-content/uploads/2021/05/Visa-logo-white.png?fit=900%2C291&ssl=1" alt="visa" />
                </div>
            </label>
        </div>
    );
}


export function SelectPaymentMethodChecked() {
    return (
        <div className="w-full flex justify-center relative">
            <div className="absolute w-full h-full bg-neutral-900 opacity-70 z-10 hidden hover:cursor-not-allowed" />
            <label htmlFor="my-input2" className="hover:cursor-pointer bg-neutral-900 text-white has-[:checked]:bg-neutral-800 has-[:checked]:text-neutral-100 w-full h-full border-neutral-400 rounded-md flex flex-row justify-around items-center space-x-24 px-4 py-2">
                <div className="w-1/2 h-10 flex flex-row w-full h-full items-center space-x-4">
                    <div className="flex-none flex items-center">
                        <input checked id="my-input2" value="card-1" name="xxx2" type="radio" className="
                        peer
                        w-4 h-4 
                        appearance-none
                        border-2 border-neutral-200 rounded-full 
                        disabled:border-neutral-700" />
                        <div className="absolute w-2 h-2 rounded-full ml-1 peer-checked:bg-neutral-200 peer-checked:peer-disabled:bg-neutral-700" />
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full">
                            <span className="text-sm tracking-widest">**** 7891</span>
                        </div>
                        <div className="w-full flex flex-row items-center space-x-1 text-[12px]">
                            <span className="hover:cursor-pointer hover:underline">View</span>
                            <span>|</span>
                            <span className="hover:cursor-pointer hover:underline">Edit</span>
                        </div>
                    </div>
                </div>
                <div id="card-brand" className="flex-none h-10 flex items-center">
                    <img className="h-1/2" src="https://i0.wp.com/americassbdc.org/wp-content/uploads/2021/05/Visa-logo-white.png?fit=900%2C291&ssl=1" alt="visa" />
                </div>
            </label>
        </div>
    );
}


export function SelectPaymentMethodDisabled() {
    return (
        <div className="w-full flex justify-center relative hover:cursor-pointer">
            <div className="absolute w-full h-full bg-neutral-900 opacity-70 z-10 hover:cursor-not-allowed rounded-lg" />
            <label htmlFor="my-input3" className="hover:cursor-pointer bg-neutral-900 text-white has-[:checked]:bg-neutral-800 has-[:checked]:text-neutral-100 w-full h-full border-neutral-400 rounded-md flex flex-row justify-around items-center space-x-24 px-4 py-2">
                <div className="w-1/2 h-10 flex flex-row w-full h-full items-center space-x-4">
                    <div className="flex-none flex items-center">
                        <input id="my-input3" value="card-1" name="xxx3" type="radio" className="
                        peer
                        w-4 h-4 
                        appearance-none
                        border-2 border-neutral-200 rounded-full 
                        disabled:border-neutral-700" />
                        <div className="disabled absolute w-2 h-2 rounded-full ml-1 peer-checked:bg-neutral-200 peer-checked:peer-disabled:bg-neutral-700" />
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full">
                            <span className="text-sm tracking-widest">**** 7891</span>
                        </div>
                        <div className="w-full flex flex-row items-center space-x-1 text-[12px]">
                            <span className="hover:cursor-pointer hover:underline">View</span>
                            <span>|</span>
                            <span className="hover:cursor-pointer hover:underline">Edit</span>
                        </div>
                    </div>
                </div>
                <div id="card-brand" className="flex-none h-10 flex items-center">
                    <img className="h-1/2" src="https://i0.wp.com/americassbdc.org/wp-content/uploads/2021/05/Visa-logo-white.png?fit=900%2C291&ssl=1" alt="visa" />
                </div>
            </label>
        </div>
    );
}

export function CardNumberInput() {
    return (
        <div className="w-full h-14 flex flex-row-reverse justify-center rounded-lg bg-neutral-900 relative">
            <div className="absolute w-full h-full bg-neutral-900 opacity-70 z-10 hover:cursor-not-allowed hidden rounded-lg" />
            <div className="w-48 flex-auto flex items-center justify-end">
                <input type="number" className="peer h-3 w-full h-max rounded-r-lg bg-neutral-900 text-sm tracking-wider focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:text-neutral-900" required maxLength={20} max={20} placeholder="1234 5678 9123 4567"></input>
            </div>
            <div className="peer-invalid:border peer-invalid:border-red-600 rounded-l-lg peer-disabled:border-red-700 flex-none flex flex-row items-center space-x-6 bg-neutral-900 focus:bg-neutral-800 px-4 py-1">
                <div id="card-brand" className="flex-none flex items-center">
                    <img className="h-3" src="https://i0.wp.com/americassbdc.org/wp-content/uploads/2021/05/Visa-logo-white.png?fit=900%2C291&ssl=1" alt="visa" />
                </div>
            </div>
        </div>
    );
}

export function CardNumberInputStatus() {
    return (
        <div className="w-full h-14 flex flex-row-reverse justify-center border-2 border-green-500 rounded-lg bg-neutral-900 relative">
            <div className="absolute w-full h-full bg-neutral-900 opacity-70 z-10 hover:cursor-not-allowed hidden rounded-lg" />
            <div className="w-48 flex-auto flex items-center justify-end">
                <input type="number" className="peer w-full h-max rounded-r-lg bg-neutral-900 text-sm tracking-wider focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:text-neutral-900" required maxLength={20} max={20} placeholder="1234 5678 9123 4567"></input>
            </div>
            <div className="peer-invalid:border peer-invalid:border-red-600 rounded-l-lg peer-disabled:border-red-700 flex-none flex flex-row items-center space-x-6 bg-neutral-900 focus:bg-neutral-800 px-4 py-1">
                <div id="card-brand" className="flex-none flex items-center">
                    <img className="h-3" src="https://i0.wp.com/americassbdc.org/wp-content/uploads/2021/05/Visa-logo-white.png?fit=900%2C291&ssl=1" alt="visa" />
                </div>
            </div>
        </div>
    );
}

export function CardNumberInputDisabled() {
    return (
        <div className="w-full h-14 flex flex-row-reverse justify-center rounded-lg bg-neutral-900 relative">
            <div className="absolute w-full h-full bg-neutral-900 opacity-70 z-10 hover:cursor-not-allowed rounded-lg" />
            <div className="w-48 flex-auto flex items-center justify-end">
                <input type="number" className="peer w-full h-max rounded-r-lg bg-neutral-900 text-sm tracking-wider focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:text-neutral-900" required maxLength={20} max={20} placeholder="1234 5678 9123 4567"></input>
            </div>
            <div className="peer-invalid:border peer-invalid:border-red-600 rounded-l-lg peer-disabled:border-red-700 flex-none flex flex-row items-center space-x-6 bg-neutral-900 focus:bg-neutral-800 px-4 py-1">
                <div id="card-brand" className="flex-none flex items-center">
                    <img className="h-3" src="https://i0.wp.com/americassbdc.org/wp-content/uploads/2021/05/Visa-logo-white.png?fit=900%2C291&ssl=1" alt="visa" />
                </div>
            </div>
        </div>
    );
}