import React from 'react'
import Link from 'next/link'
interface Props {
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MoviesNavLinks: React.FC<Props> = ({ setMenu }) => {
    return (
        <div className="h-full flex flex-col justify-start py-10 gap-20 items-center md:gap-6 md:flex-row md:justify-end">
            <Link href={`/movie/category/action`} passHref>
                <a
                    onClick={() => setMenu(false)}
                    className="hover:text-red-700"
                >
                    Action
                </a>
            </Link>
            <Link href={`/movie/category/comedy`} passHref>
                <a
                    onClick={() => setMenu(false)}
                    className="hover:text-red-700"
                >
                    Comedy
                </a>
            </Link>
            <Link href={`/movie/category/romance`} passHref>
                <a
                    onClick={() => setMenu(false)}
                    className="hover:text-red-700"
                >
                    Romance
                </a>
            </Link>
            <Link href={`/movie/category/horror`} passHref>
                <a
                    onClick={() => setMenu(false)}
                    className="hover:text-red-700"
                >
                    Horror
                </a>
            </Link>
            <Link href={`/movie/category/documentary`} passHref>
                <a
                    onClick={() => setMenu(false)}
                    className="hover:text-red-700"
                >
                    Documentary
                </a>
            </Link>
        </div>
    )
}

export default MoviesNavLinks
