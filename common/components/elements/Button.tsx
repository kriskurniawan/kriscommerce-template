import React from 'react'

interface Props {
    children: React.ReactNode
    onClick?(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
    className?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
    icon?: React.ReactNode
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'md'
}

const Button = (props: Props) => {
    console.log(props);

    return (
        <button className={`${props.className} rounded-2xl font-['Poppins']`}
            onClick={props.onClick}
            type={props.type}
            disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button