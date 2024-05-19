export function BasicButton() {
    return (
        <button className={`w-32 h-8 rounded-xl bg-neutral-100 text-black hover:bg-neutral-300`}>
            Basic
        </button>
    )
}

export function ButtonWithShadow() {
    return (
        <button className={`w-32 h-8 rounded-xl bg-neutral-100 text-black shadow-md shadow-neutral-800 hover:bg-neutral-300`}>
            Shadow
        </button>
    )
}

export function BorderedButton() {
    return (
        <button className={`w-32 h-8 rounded-xl border border-neutral-700 text-neutral-200 hover:bg-neutral-800 hover:text-neutral-300`}>
            Bordered
        </button>
    )
}

export function BasicButtonWithIcon() {
    return (
        <button className={`w-32 h-8 rounded-xl bg-neutral-100 text-black hover:bg-neutral-300`}>
            <div className="flex flex-row items-center justify-center space-x-1">
                <span>With Icon</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

            </div>
        </button>
    )
}

export function ButtonWithShadowAndIcon() {
    return (
        <button className={`w-32 h-8 rounded-xl bg-neutral-100 text-black shadow-lg shadow-neutral-800 hover:bg-neutral-300`}>
            <div className="flex flex-row items-center justify-center space-x-1">
                <span>With Icon</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

            </div>
        </button>
    )
}

export function BorderedButtonWithIcon() {
    return (
        <button className={`w-32 h-8 rounded-xl border border-neutral-700 text-neutral-200 hover:bg-neutral-800 hover:text-neutral-300`}>
            <div className="flex flex-row items-center justify-center space-x-1">
                <span>With Icon</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

            </div>
        </button>
    )
}
