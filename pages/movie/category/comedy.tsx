import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import MovieCategory from '../../../components/pagesComponents/MovieCategories'
import Head from 'next/head'
interface TVShowData {
    getComedy: {
        id: string
        poster_path: {
            w500: string
        }
        title: string
    }[]
}
const GET_COMEDY = gql`
    query getComedy($page: Int) {
        getComedy(page: $page) {
            id
            poster_path {
                w500
            }
            title
        }
    }
`
const Comedy = () => {
    const [page, setPage] = useState(1)

    const { data, loading } = useQuery<TVShowData>(GET_COMEDY, {
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
                <title>Comedy Movies</title>
            </Head>
            {data && (
                <MovieCategory
                    data={data.getComedy}
                    page={page}
                    setPage={setPage}
                    pageName="Comedy Movies"
                />
            )}
        </div>
    )
}

export default Comedy
