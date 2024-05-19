export function Spinner() {
    return (
        <div className="w-full h-full grid place-content-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-neutral-500"></div>
        </div>
    )
}

export function Spinner2 () {
    return (
        <div className="w-full h-full grid place-content-center">
            <div className="motion-safe:animate-ping rounded-full h-10 w-10 bg-neutral-500" />
        </div>
    )
}