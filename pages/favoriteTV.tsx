import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import SideNav from '../components/SideNav'
import TVCard from '../components/cards/TVCard'

const FavoriteTV = () => {
    const [items, setItems] = useState<string[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const favorites = localStorage.getItem('FavoritesTV')
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
                <title>Favorites</title>
            </Head>
            <div className="  hidden  lg:block  lg:w-60  h-[100vh] py-16 pl-10 border-r border-gray-800">
                <SideNav />
            </div>
            {loading ? (
                <h1
                    className={` origin-center text-center  animate-pulse text-2xl headers font-extrabold`}
                >
                    Loading...
                </h1>
            ) : (
                <div className="flex flex-col lg:flex-row lg:justify-evenly flex-wrap items-center lg:items-start justify-start  w-full p-8  ">
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <Link href={`/tv/${item}`} passHref key={index}>
                                <a className="min-w-[1/3]">
                                    <TVCard id={parseInt(item)} />
                                </a>
                            </Link>
                        ))
                    ) : (
                        <h1 className="headers text-xl">
                            Start by adding Shows to your favorites
                        </h1>
                    )}
                </div>
            )}
        </div>
    )
}

export default FavoriteTV
