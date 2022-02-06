import React from 'react'
import TVNavLinks from './TVNavLinks'
import MoviesNavLinks from './MoviesNavLinks'

interface NavbarProps {
    type: string
    menu: boolean
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
}
const MobileNavbar: React.FC<NavbarProps> = ({ type, menu, setMenu }) => {
    return (
        <div
            className={`fixed z-30 top-0 flex justify-center bg-black h-screen w-full transition-all ${
                menu ? '' : 'translate-y-full '
            }`}
        >
            <ul className="h-full flex flex-col justify-start py-10 gap-20 items-center">
                <button
                    className="font-bold text-xl"
                    onClick={() => setMenu(false)}
                >
                    X close
                </button>
                {type == 'tv' ? (
                    <TVNavLinks setMenu={setMenu} />
                ) : (
                    <MoviesNavLinks setMenu={setMenu} />
                )}
            </ul>
        </div>
    )
}

export default MobileNavbar
