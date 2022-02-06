import type { NextPage } from 'next'
import React from 'react'
import SideNav from '../components/SideNav'
import MainContent from '../components/MainContent'
import getAction from '../graphql/query/getAction'
import getComedy from '../graphql/query/getComedy'
import getHorror from '../graphql/query/getHorror'
import getRomance from '../graphql/query/getRomance'
import getDocumentary from '../graphql/query/getDocumentary'
import Head from 'next/head'
import getOnAir from '../graphql/query/TV/getOnAir'
import getAiringToday from '../graphql/query/TV/getAiringToday'
import getTVPopular from '../graphql/query/TV/getTVPopular'
import getTVTopRated from '../graphql/query/TV/getTVTopRated'
const Home: NextPage = ({
    action,
    comedy,
    horror,
    romance,
    documentary,
    onAirTVShow,
    airingToday,
    tvPopular,
    tvTopRated,
}: any) => {
    return (
        <div>
            <div className="text-white flex ">
                <Head>
                    <title>Home</title>
                </Head>
                <div className="  hidden  lg:block  lg:w-60  h-[100vh] py-16 pl-10 ">
                    <SideNav />
                </div>
                <MainContent
                    action={action}
                    comedy={comedy}
                    horror={horror}
                    romance={romance}
                    documentary={documentary}
                    onAirTVShow={onAirTVShow}
                    airingToday={airingToday}
                    tvPopular={tvPopular}
                    tvTopRated={tvTopRated}
                />
            </div>
        </div>
    )
}

export default Home
export const getStaticProps = async () => {
    const { data: horror } = await getHorror()
    const { data: action } = await getAction()
    const { data: comedy } = await getComedy()
    const { data: romance } = await getRomance()
    const { data: documentary } = await getDocumentary()
    const { data: onAirTVShow } = await getOnAir()
    const { data: airingToday } = await getAiringToday()
    const { data: tvPopular } = await getTVPopular()
    const { data: tvTopRated } = await getTVTopRated()
    return {
        props: {
            action: action.getAction,
            comedy: comedy.getComedy,
            horror: horror.getHorror,
            romance: romance.getRomance,
            documentary: documentary.getDocumentary,
            onAirTVShow: onAirTVShow.getOnAir,
            airingToday: airingToday.getAiringToday,
            tvPopular: tvPopular.getTVPopular,
            tvTopRated: tvTopRated.getTVTopRated,
        },
    }
}
