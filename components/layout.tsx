import React from 'react'
import PhoneNav from './PhoneNav'
const Layout: React.FC = ({ children }) => {
    return (
        <div className="text-white  min-h-screen bg-[#191a1f]  overflow-hidden ">
            {children}
            <div className="block fixed bottom-0 lg:hidden w-full bg-black pt-2 z-20 ">
                <PhoneNav />
            </div>
        </div>
    )
}

export default Layout
