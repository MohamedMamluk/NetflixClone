import React from 'react'
import Link from 'next/link'

interface Props {
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
}
const TVNavLinks: React.FC<Props> = ({ setMenu }) => {
    return (
        <div className="h-full flex flex-col justify-start py-10 gap-20 items-center md:gap-6 md:flex-row md:justify-end">
            <Link href={`/tv/category/on-air`} passHref>
                <a
                    onClick={() => setMenu(false)}
                    className="hover:text-red-700"
                >
                    On Air
                </a>
            </Link>
            <Link href={`/tv/category/airing-today`} passHref>
                <a
                    onClick={() => setMenu(false)}
                    className="hover:text-red-700"
                >
                    Coming Up
                </a>
            </Link>
            <Link href={`/tv/category/popular`} passHref>
                <a
                    onClick={() => setMenu(false)}
                    className="hover:text-red-700"
                >
                    Popular
                </a>
            </Link>
        </div>
    )
}

export default TVNavLinks
