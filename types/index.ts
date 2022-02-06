import { ParsedUrlQuery } from 'querystring'

export interface TrendingType {
    original_name: string
    origin_country: string[]
    poster_path: string
    id: number
    name: string
    vote_count: number
    first_air_date: string
    vote_average: number
    overview: string
    backdrop_path: string
    original_language: string
    genre_ids: number[]
    popularity: number
    media_type: string
}
export interface Show {
    adult: boolean
    backdrop_path: {
        w500: string
        original: string
    }
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: {
        w500: string
        original: string
    }
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
export interface ActorDetails {
    id: number
    name: string
    profile_path: {
        w500: string
        original: string
    }
    charcter: string
}
export interface CastDetails {
    id: number
    cast: ActorDetails[]
}
export interface Trailer {
    name: string
    key: string
    site: string
    id: string
}
export interface TrailersDetails {
    id: string
    results: Trailer[]
}
export interface Genre {
    id: number
    name: string
}
export interface ProductionCompany {
    id: number
    logo_path: string
    name: string
    origin_country: string
}
export interface MovieDetails {
    backdrop_path: {
        w500: string
        original: string
    }
    budget: number
    genres: Genre[]
    id: number
    original_title: string
    production_companies: ProductionCompany[]
    release_date: string
    vote_average: number
    vote_count: number
    overview: string
    title: string
}
export interface TVShow {
    backdrop_path: {
        w500: string
        original: string
    }
    first_air_date: string
    genre_ids: Genre[]
    id: number
    name: string
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: {
        w500: string
        original: string
    }
    vote_average: number
    vote_count: number
}

export interface Id extends ParsedUrlQuery {
    id: string
}
