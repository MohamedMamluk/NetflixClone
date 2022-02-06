import React, { Dispatch, SetStateAction, useState } from 'react'
import Main from './cards/Main'
import { Show, TVShow } from '../types'
import Category from './categories/Category'
import Navbar from './nav/navbar/Navbar'
import { useContext } from 'react'
import { Type } from '../pages/_app'
import TVCategory from './categories/TVCategory'
import MainTV from './TVShowPage/MainTV'
interface ContextType {
    showType: boolean
    setShowType: Dispatch<SetStateAction<boolean>>
}

interface AllData {
    action: Show[]
    comedy: Show[]
    horror: Show[]
    romance: Show[]
    documentary: Show[]
    onAirTVShow: TVShow[]
    airingToday: TVShow[]
    tvPopular: TVShow[]
    tvTopRated: TVShow[]
}
const MainContent: React.FC<AllData> = ({
    action,
    comedy,
    horror,
    romance,
    documentary,
    onAirTVShow,
    airingToday,
    tvPopular,
    tvTopRated,
}) => {
    const { showType, setShowType } = useContext<ContextType>(Type)

    return (
        <div className="flex-1 border-l-2 border-r border-gray-800 relative  flex flex-col overflow-auto h-screen pb-20">
            <Navbar type={showType ? 'movie' : 'tv'} />
            <div className="flex gap-6 items-center justify-center text-lg">
                <button
                    className={`${showType && 'text-red-700 font-black'}`}
                    onClick={() => setShowType(true)}
                >
                    Movies
                </button>
                <button
                    className={`${!showType && 'text-red-700 font-black'}`}
                    onClick={() => setShowType(false)}
                >
                    TV Shows
                </button>
            </div>
            {showType ? (
                <div className="  items-center justify-center">
                    <Main movie={action} />
                </div>
            ) : (
                <div className="  items-center justify-center">
                    <MainTV TV={tvPopular} />
                </div>
            )}
            {showType ? (
                <div>
                    <Category
                        movies={action}
                        categoryName="Latest Action Movies"
                    />
                    <Category
                        movies={horror}
                        categoryName="Latest Horror Movies"
                    />
                    <Category
                        movies={comedy}
                        categoryName="Latest Comedy Movies"
                    />
                    <Category
                        movies={romance}
                        categoryName="Latest Romance Movies"
                    />
                    <Category
                        movies={documentary}
                        categoryName="Latest Documentary Movies"
                    />
                </div>
            ) : (
                <div>
                    <TVCategory
                        shows={tvPopular}
                        categoryName="Popular TV Shows"
                    />
                    <TVCategory
                        shows={onAirTVShow}
                        categoryName="Currently Airing"
                    />
                    <TVCategory
                        shows={airingToday}
                        categoryName="Airing Today"
                    />
                </div>
            )}
        </div>
    )
}

export default MainContent
