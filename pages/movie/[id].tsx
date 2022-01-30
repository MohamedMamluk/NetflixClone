import React from 'react'
import getAction from '../../graphql/query/getAction'
import getComedy from '../../graphql/query/getComedy'
import getDocumentary from '../../graphql/query/getDocumentary'
import getHorror from '../../graphql/query/getHorror'
import getRomance from '../../graphql/query/getRomance'
import { Show, MovieDetails } from '../../types'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Id } from '../../types'
import { client } from '../_app'
import { gql } from '@apollo/client'
import Header from '../../components/moviePageComponents/Header'
import MovieInfo from '../../components/moviePageComponents/MovieInfo'
import Summary from '../../components/moviePageComponents/Summary'
import Cast from '../../components/moviePageComponents/Cast'
import Trailers from '../../components/moviePageComponents/Trailers'
interface Data {
    getMovieDetails: MovieDetails
}
const Movie = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <section className=" pb-20">
            <Header data={data} />
            {/* Page main info start */}
            <MovieInfo>
                <Summary summary={data.getMovieDetails.overview} />
                <Cast movieId={String(data.getMovieDetails.id)} />
                <Trailers
                    id={String(data.getMovieDetails.id)}
                    title="Trailers"
                />
            </MovieInfo>
            {/* Page main info end */}
        </section>
    )
}

export default Movie
export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const { id } = ctx.params as Id
    const { data } = await client.query<Data>({
        query: gql`
            query getMovieDetails($id: ID!) {
                getMovieDetails(id: $id) {
                    id
                    original_title
                    backdrop_path {
                        w500
                        original
                    }
                    title
                    genres {
                        name
                    }
                    vote_average
                    vote_count
                    overview
                    release_date
                    production_companies {
                        id
                        logo_path {
                            w500
                        }
                        name
                    }
                }
            }
        `,
        variables: {
            id: String(id),
        },
    })
    return {
        props: {
            data,
        },
        revalidate: 1,
    }
}
export const getStaticPaths = async () => {
    const { data: horror } = await getHorror()
    const { data: action } = await getAction()
    const { data: comedy } = await getComedy()
    const { data: romance } = await getRomance()
    const { data: documentary } = await getDocumentary()
    const horrorPaths = horror.getHorror.map((item: Show) => ({
        params: { id: String(item.id) },
    }))
    const actionPaths = action.getAction.map((item: Show) => ({
        params: { id: String(item.id) },
    }))
    const comedyPaths = comedy.getComedy.map((item: Show) => ({
        params: { id: String(item.id) },
    }))
    const romancePaths = romance.getRomance.map((item: Show) => ({
        params: { id: String(item.id) },
    }))
    const documentaryPaths = documentary.getDocumentary.map((item: Show) => ({
        params: { id: String(item.id) },
    }))
    const paths = [
        ...actionPaths,
        ...horrorPaths,
        ...romancePaths,
        ...comedyPaths,
        ...documentaryPaths,
    ]

    return {
        paths,
        fallback: 'blocking',
    }
}
