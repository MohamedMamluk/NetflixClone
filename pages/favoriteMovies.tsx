import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import PopularCard from '../components/cards/PopularCard'
import SideNav from '../components/SideNav'

const Favorites = () => {
    const [items, setItems] = useState<string[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const favorites = localStorage.getItem('Favorites')
        let item: string[] = []
        if (!favorites) {
            setItems(item)
        } else {
            item = JSON.parse(favorites)
            setItems(item)
        }
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    return (
        <div className="text-white flex pb-16">
            <Head>
                <title>Favorite Movies</title>
            </Head>
            <div className="  hidden  lg:block  lg:w-60  h-[100vh] py-16 pl-10 border-r border-gray-800">
                <SideNav />
            </div>
            {loading ? (
                <h1
                    className={` origin-center text-center animate-pulse text-2xl headers font-extrabold`}
                >
                    Loading...
                </h1>
            ) : (
                <div className="flex flex-col lg:justify-evenly lg:flex-row flex-wrap items-center lg:items-start justify-start w-full ">
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <Link href={`/movie/${item}`} passHref key={index}>
                                <a className="min-w-[1/3]">
                                    <PopularCard id={item} />
                                </a>
                            </Link>
                        ))
                    ) : (
                        <h1 className="headers text-xl">
                            Start by adding movies to your favorites
                        </h1>
                    )}
                </div>
            )}
        </div>
    )
}

export default Favorites
