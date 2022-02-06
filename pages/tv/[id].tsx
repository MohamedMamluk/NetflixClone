import React from 'react'
import Head from 'next/head'
import { TVShow } from '../../types'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { Id } from '../../types'
import { client } from '../_app'
import { gql } from '@apollo/client'
import Header from '../../components/TVShowPage/Header'
import MovieInfo from '../../components/moviePageComponents/MovieInfo'
import Summary from '../../components/moviePageComponents/Summary'
import Cast from '../../components/TVShowPage/Cast'
import Trailers from '../../components/TVShowPage/Trailers'
import getOnAir from '../../graphql/query/TV/getOnAir'
import getAiringToday from '../../graphql/query/TV/getAiringToday'
import getTVPopular from '../../graphql/query/TV/getTVPopular'
interface Data {
    getTVShowDetails: TVShow
}
const Movie = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <section className=" pb-20">
            <Head>
                <title>{data.getTVShowDetails.name}</title>
            </Head>
            <Header data={data} />
            {/* Page main info start */}
            <MovieInfo>
                <Summary summary={data.getTVShowDetails.overview} />
                <Cast movieId={String(data.getTVShowDetails.id)} />
                <Trailers
                    id={String(data.getTVShowDetails.id)}
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
            query ($getMovieDetailsId: Int) {
                getTVShowDetails(id: $getMovieDetailsId) {
                    id
                    name
                    backdrop_path {
                        w500
                        original
                    }
                    vote_average
                    vote_count
                    overview
                    first_air_date
                }
            }
        `,
        variables: {
            getMovieDetailsId: Number(id),
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
    const { data: onAir } = await getOnAir()
    const { data: airingToday } = await getAiringToday()
    const { data: popularTV } = await getTVPopular()

    const onAirPaths = onAir.getOnAir.map((item: TVShow) => ({
        params: { id: String(item.id) },
    }))
    const airingTodayPaths = airingToday.getAiringToday.map((item: TVShow) => ({
        params: { id: String(item.id) },
    }))
    const popularTVPaths = popularTV.getTVPopular.map((item: TVShow) => ({
        params: { id: String(item.id) },
    }))
    const paths = [...onAirPaths, ...airingTodayPaths, ...popularTVPaths]

    return {
        paths,
        fallback: 'blocking',
    }
}
