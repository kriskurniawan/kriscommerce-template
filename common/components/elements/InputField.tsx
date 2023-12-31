import React from 'react'

interface InputFieldProps {
    className?: string
    type?: string
    placeholder?: string
}

const InputField = (props: InputFieldProps) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            className={props.className}
        />
    )
}

export default InputField