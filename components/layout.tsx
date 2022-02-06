import React, { useContext } from 'react'
import Navbar from './nav/navbar/Navbar'
import { useRouter } from 'next/router'
import PhoneNav from './PhoneNav'
import { Type } from '../pages/_app'
const Layout: React.FC = ({ children }) => {
    const router = useRouter()
    const { showType } = useContext(Type)

    return (
        <div className="text-white  min-h-screen bg-[#191a1f]  overflow-hidden ">
            {!(router.query.id || router.route == '/') && (
                <Navbar type={showType ? 'movie' : 'tv'} />
            )}
            {children}
            <div className="block fixed bottom-0 lg:hidden w-full bg-black pt-2 z-20 ">
                <PhoneNav />
            </div>
        </div>
    )
}

export default Layout
