import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import TVCategory from '../../../components/pagesComponents/TVCategories'
import Head from 'next/head'
interface TVShowData {
    getOnAir: {
        id: string
        poster_path: {
            w500: string
        }
        name: string
    }[]
}
const GET_ON_AIR = gql`
    query getOnAir($page: Int) {
        getOnAir(page: $page) {
            id
            poster_path {
                w500
            }
            name
        }
    }
`
const OnAir = () => {
    const [page, setPage] = useState(1)

    const { data, loading } = useQuery<TVShowData>(GET_ON_AIR, {
        variables: {
            page,
        },
    })
    if (loading)
        return (
            <h1
                className={` origin-center text-center animate-ping text-2xl headers font-extrabold`}
            >
                Loading...
            </h1>
        )
    return (
        <div>
            <Head>
                <title>Live Now</title>
            </Head>
            {data && (
                <TVCategory
                    data={data.getOnAir}
                    page={page}
                    setPage={setPage}
                    pageName="Live Now"
                />
            )}
        </div>
    )
}

export default OnAir
