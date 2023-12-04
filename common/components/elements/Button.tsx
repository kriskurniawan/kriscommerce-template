export default function Button({
    children,
    className,
    ...props
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <button
            className={`w-36 h-14 bg-amber-500 rounded-2xl justify-center items-center gap-2.5 flex ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}