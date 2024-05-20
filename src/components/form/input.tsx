export function BasicInput() {
    return (
        <div className="w-full h-14 flex flex-row justify-center rounded-lg bg-neutral-900 relative px-4">
            <div className="absolute w-full h-full bg-neutral-900 opacity-70 z-10 hover:cursor-not-allowed hidden rounded-lg" />
            <div className="w-48 h-auto flex items-center justify-center">
                <input type="text" className="peer h-full w-full h-max rounded-r-lg bg-neutral-900 text-sm tracking-wider focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:text-neutral-900" required maxLength={20} max={20} placeholder="Name"></input>
            </div>
        </div>
    );
}

export function BasicInputStatus() {
    return (
        <div className="w-full h-14 flex flex-row justify-center rounded-lg bg-neutral-900 relative px-4 border-2 border-green-400">
            <div className="absolute w-full h-full bg-neutral-900 opacity-70 z-10 hover:cursor-not-allowed hidden rounded-lg" />
            <div className="w-48 h-auto flex items-center justify-center">
                <input type="text" className="peer h-full w-full h-max rounded-r-lg bg-neutral-900 text-sm tracking-wider focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:text-neutral-900" required maxLength={20} max={20} placeholder="Name"></input>
            </div>
        </div>
    );
}

export function BasicInputDisabled() {
    return (
        <div className="w-full h-14 flex flex-row justify-center rounded-lg bg-neutral-900 relative px-4">
            <div className="absolute w-full h-full bg-neutral-900 opacity-70 z-10 hover:cursor-not-allowed rounded-lg" />
            <div className="w-48 h-auto flex items-center justify-center">
                <input type="text" className="peer h-full w-full h-max rounded-r-lg bg-neutral-900 text-sm tracking-wider focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:text-neutral-900" required maxLength={20} max={20} placeholder="Name"></input>
            </div>
        </div>
    );
}

export function BasicInputWithLabel() {
    return (
        <div className="w-full h-14 flex flex-row justify-center rounded-lg bg-neutral-900 relative px-4">
            <div className="absolute w-full h-full bg-neutral-900 opacity-70 z-10 hover:cursor-not-allowed hidden rounded-lg" />
            <div className="w-48 h-auto py-3 flex flex-col items-center justify-center text-left">
                <label className="flex-none text-neutral-200 text-[10px] tracking-wider w-full">Name</label>
                <input type="text" className="flex-auto peer h-3 w-full h-max rounded-r-lg bg-neutral-900 text-sm tracking-wider focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:text-neutral-900" required maxLength={20} max={20} placeholder="Jean Vides"></input>
            </div>
        </div>
    );
}

export function BasicInputWithLabelStatus() {
    return (
        <div className="w-full h-14 flex flex-row justify-center rounded-lg bg-neutral-900 relative px-4 border-2 border-green-400">
            <div className="absolute w-full h-full bg-neutral-900 opacity-70 z-10 hover:cursor-not-allowed hidden rounded-lg" />
            <div className="w-48 h-auto py-3 flex flex-col items-center justify-center text-left">
                <label className="flex-none text-neutral-200 text-[10px] tracking-wider w-full">Name</label>
                <input type="text" className="flex-auto peer h-3 w-full h-max rounded-r-lg bg-neutral-900 text-sm tracking-wider focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:text-neutral-900" required maxLength={20} max={20} placeholder="Jean Vides"></input>
            </div>
        </div>
    );
}

export function BasicInputWithLabelDisabled() {
    return (
        <div className="w-full h-14 flex flex-row justify-center rounded-lg bg-neutral-900 relative px-4">
            <div className="absolute w-full h-full bg-neutral-900 opacity-70 z-10 hover:cursor-not-allowed rounded-lg" />
            <div className="w-48 h-auto py-3 flex flex-col items-center justify-center text-left">
                <label className="flex-none text-neutral-200 text-[10px] tracking-wider w-full">Name</label>
                <input type="text" className="flex-auto peer h-3 w-full h-max rounded-r-lg bg-neutral-900 text-sm tracking-wider focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:text-neutral-900" required maxLength={20} max={20} placeholder="Jean Vides"></input>
            </div>
        </div>
    );
}