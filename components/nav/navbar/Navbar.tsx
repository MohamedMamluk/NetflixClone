import React, { useContext, useState } from 'react'
import MobileNavbar from './MobileNavbar'
import TVNavLinks from './TVNavLinks'
import MoviesNavLinks from './MoviesNavLinks'
import Link from 'next/link'
import { Type } from '../../../pages/_app'
interface NavTypes {
    type: 'movie' | 'tv'
}
const Navbar: React.FC<NavTypes> = ({ type }) => {
    const [menu, setMenu] = useState(false)
    const { showType, setShowType } = useContext(Type)

    return (
        <div className="relative">
            <div className="flex justify-between items-center  py-4 mb-7 border-b border-gray-800 px-10">
                <Link href="/" passHref>
                    <a className="w-28">
                        <img
                            src="/Logo.png"
                            alt="FindAndWatch Logo"
                            className="w-full"
                        />
                    </a>
                </Link>
                <div
                    onClick={() => setMenu(true)}
                    className=" md:hidden flex flex-col gap-2"
                >
                    <span className="w-10 h-0.5 bg-white block"></span>
                    <span className="w-10 h-0.5 bg-white block"></span>
                    <span className="w-10 h-0.5 bg-white block"></span>
                </div>
                <div className="hidden md:block">
                    {type == 'tv' ? (
                        <TVNavLinks setMenu={setMenu} />
                    ) : (
                        <MoviesNavLinks setMenu={setMenu} />
                    )}
                </div>
            </div>
            <MobileNavbar type={type} menu={menu} setMenu={setMenu} />
        </div>
    )
}

export default Navbar
