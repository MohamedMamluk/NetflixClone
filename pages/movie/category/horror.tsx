import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import MovieCategory from '../../../components/pagesComponents/MovieCategories'
import Head from 'next/head'
interface TVShowData {
    getHorror: {
        id: string
        poster_path: {
            w500: string
        }
        title: string
    }[]
}
const GET_Horror = gql`
    query getHorror($page: Int) {
        getHorror(page: $page) {
            id
            poster_path {
                w500
            }
            title
        }
    }
`
const Horror = () => {
    const [page, setPage] = useState(1)

    const { data, loading } = useQuery<TVShowData>(GET_Horror, {
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
                <title>Horror Movies</title>
            </Head>
            {data && (
                <MovieCategory
                    data={data.getHorror}
                    page={page}
                    setPage={setPage}
                    pageName="Horror Movies"
                />
            )}
        </div>
    )
}

export default Horror
