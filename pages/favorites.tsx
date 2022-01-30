import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import PopularCard from '../components/cards/PopularCard'
import SideNav from '../components/SideNav'

const Favorites = () => {
    // const items = ['634649', '524434']
    const [items, setItems] = useState<string[]>([])
    useEffect(() => {
        const favorites = localStorage.getItem('Favorites')
        let item: string[] = []
        if (!favorites) {
            setItems(item)
        } else {
            item = JSON.parse(favorites)
            setItems(item)
        }
    }, [])
    return (
        <div className="text-white flex pb-16">
            <Head>
                <title>Favorites</title>
            </Head>
            <div className="  hidden  lg:block  lg:w-60  h-[100vh] py-16 pl-10 border-r border-gray-800">
                <SideNav />
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-start justify-start  w-full p-8  ">
                {items.map((item, index) => (
                    <Link href={`/movie/${item}`} passHref key={index}>
                        <a href="">
                            <PopularCard id={item} />
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Favorites
