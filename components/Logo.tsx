import React from 'react'
import { RiMovie2Line } from 'react-icons/ri'
interface LogoClass {
    direction?: 'col' | 'row'
    align?: 'start' | 'center' | 'end'
    justify?: ' center ' | ' between ' | ' evenly'
}
const Logo: React.FC<LogoClass> = ({ align, direction, justify }) => {
    return (
        <div
            className={`flex items-${align} flex-${direction} justify-${justify} gap-1 mb-2`}
        >
            <RiMovie2Line size={30} fill="red" />
            Movies App
        </div>
    )
}
export default Logo
