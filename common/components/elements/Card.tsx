import React from 'react'

interface CardProps {
    children: React.ReactNode
    className?: string
    [propName: string]: unknown
}

export const Card = ({ children, className = '', ...others }: CardProps) => {
    return (
        <div className={`${className} rounded-2xl border border-neutral-400`}>
            {children}
        </div>
    )
}
