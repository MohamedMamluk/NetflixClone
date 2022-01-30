import { AiOutlineHome } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'
import Logo from './Logo'
import { useRouter } from 'next/router'
import Link from 'next/link'
function SideNav() {
    const router = useRouter()
    return (
        <div className="flex flex-col h-full gap-10 transform  transition-all origin-left group ">
            {/* <Logo align="center" /> */}
            <div className="">
                <img className="w-2/3" src="/logo.png" alt="" />
            </div>
            <div className="flex flex-col gap-10">
                <h2 className="text-gray-100 text-lg font-bold headers ">
                    Menu
                </h2>
                <ul className="flex flex-col gap-10 text-gray-400">
                    <li
                        className={`flex items-center gap-2 ${
                            router.route === '/' &&
                            'text-red-500 border-r-4 border-red-500 font-bold'
                        } `}
                    >
                        <Link href="/" passHref>
                            <a className="flex items-center gap-2 ">
                                <AiOutlineHome size={24} /> <span>Home</span>
                            </a>
                        </Link>
                    </li>
                    <li
                        className={`flex items-center gap-2 ${
                            router.route === '/favorites' &&
                            'text-red-500 border-r-4 border-red-500 font-bold'
                        } `}
                    >
                        <Link href="/favorites" passHref>
                            <a className="flex items-center gap-2 ">
                                <MdFavoriteBorder />
                                <span> Favorites</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav
