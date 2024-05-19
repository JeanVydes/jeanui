export function SimpleBadge({ color }: { color: string }) {
    return (
        <div className={`${color} text-white text-xs font-semibold rounded-full px-2 py-1`}>
            Simple
        </div>
    )
}

export function BadgeWithIcon({ color }: { color: string }) {
    return (
        <div className={`${color} text-white text-xs font-semibold rounded-full px-2 py-1 flex items-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            With Icon
        </div>
    )
}