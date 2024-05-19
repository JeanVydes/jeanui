export function LinearProgressBar() {
    return (
        <div className="h-2 w-20 bg-neutral-100 rounded-md">
            <div className={`bg-neutral-600 h-2 rounded-full w-[60%]`} />
        </div>
    )
}

export function RadialProgressBar() {
    return (
        <div className="relative w-20 h-20">
            <div className="absolute w-20 h-20">
                <svg className="w-20 h-20">
                    <circle className="stroke-neutral-100" cx="50%" cy="50%" r="40%" fill="transparent" strokeWidth="4" />
                    <circle className="stroke-neutral-600" cx="50%" cy="50%" r="40%" fill="transparent" strokeWidth="4" strokeDasharray="118" strokeDashoffset="20" />
                </svg>
            </div>
        </div>
    )
}