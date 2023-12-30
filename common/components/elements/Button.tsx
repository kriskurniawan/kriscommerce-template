import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    onClick?(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
    className?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
    icon?: React.ReactNode
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'md'
    rounded?: 'full' | 'sm' | 'md' | 'lg' | 'xl'
}

const Button = (props: ButtonProps) => {

    return (
        <button className={`${props.className} rounded-2xl`}
            onClick={props.onClick}
            type={props.type}
            disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button