import React from 'react'

interface DotProps {
    className?: string
    count: number
}

const DotSlide = (props: DotProps) => {
    const dots = Array.from({ length: props.count }, (_, index) => index);

    return (
        <div className={`w-60 h-5 justify-center items-center gap-2.5 flex ${props.className}`}>
            <div className="w-5 h-5 bg-amber-500 cursor-pointer rounded-full" />
            {dots.map((dotIndex) => (
                <div key={dotIndex} className="w-5 h-5 hover:bg-amber-500 cursor-pointer rounded-full border border-zinc-400" />
            ))}
        </div>
    )
}

export default DotSlide