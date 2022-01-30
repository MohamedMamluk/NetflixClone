import { AiOutlineHome } from 'react-icons/ai'
import { MdFavoriteBorder } from 'react-icons/md'
import { useRouter } from 'next/router'
import Logo from './Logo'
import Link from 'next/link'
const PhoneNav = () => {
    const router = useRouter()
    return (
        <div className="  mx-auto flex items-center justify-evenly ">
            <div
                className={`${
                    router.route === '/' && 'text-red-500  font-bold'
                } `}
            >
                <Link href="/" passHref>
                    <a className="flex flex-col items-center ">
                        <AiOutlineHome size={25} />
                        <h2>Home</h2>
                    </a>
                </Link>
            </div>

            {/* <Logo align="center" direction="col" /> */}
            <div className="w-28 aspect-auto">
                <img className="aspect-auto" src="/Logo.png" alt="" />
            </div>
            {/* <div className="flex flex-col items-center">
                <MdFavoriteBorder size={25} />
                <h2>Favorite</h2>
            </div> */}
            <div
                className={`${
                    router.route === '/favorites' && 'text-red-500  font-bold'
                } `}
            >
                <Link href="/favorites" passHref>
                    <a className="flex flex-col items-center w-full">
                        <MdFavoriteBorder size={25} />
                        <span> Favorites</span>
                    </a>
                </Link>
            </div>
        </div>
    )
}
export default PhoneNav
