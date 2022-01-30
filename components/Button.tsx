import React from 'react'

interface ButtonTypes {
    title: string
    classes: string
}

const Button: React.FC<ButtonTypes> = ({ title, classes }) => {
    return (
        <button className={` px-3 py-1 rounded-lg ${classes}`}>{title}</button>
    )
}
export default Button
