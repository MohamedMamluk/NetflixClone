import type { NextPage } from 'next'
import React from 'react'
import SideNav from '../components/SideNav'
import MainContent from '../components/MainContent'
import getAction from '../graphql/query/getAction'
import getComedy from '../graphql/query/getComedy'
import getHorror from '../graphql/query/getHorror'
import getRomance from '../graphql/query/getRomance'
import getDocumentary from '../graphql/query/getDocumentary'

const Home: NextPage = ({
    action,
    comedy,
    horror,
    romance,
    documentary,
}: any) => {
    return (
        <div className="text-white flex ">
            <div className="  hidden  lg:block  lg:w-60  h-[100vh] py-16 pl-10 ">
                <SideNav />
            </div>
            <MainContent
                action={action}
                comedy={comedy}
                horror={horror}
                romance={romance}
                documentary={documentary}
            />
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
    return {
        props: {
            action: action.getAction,
            comedy: comedy.getComedy,
            horror: horror.getHorror,
            romance: romance.getRomance,
            documentary: documentary.getDocumentary,
        },
    }
}
