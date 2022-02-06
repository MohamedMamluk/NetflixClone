import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ActorDetails } from '../../types'
import SwiperContainer from './SwiperContainer'
interface CastProps {
    movieId: string
}
const CAST_QUERY = gql`
    query ($getCastId: ID!) {
        getTVCast(id: $getCastId) {
            charcter
            id
            name
            profile_path {
                w500
            }
        }
    }
`
interface DataType {
    getTVCast: ActorDetails[]
}

const Cast: React.FC<CastProps> = ({ movieId }) => {
    const { data } = useQuery<DataType>(CAST_QUERY, {
        variables: {
            getCastId: movieId,
        },
    })
    return (
        <div>
            {data && <SwiperContainer title="Cast" actors={data?.getTVCast} />}
        </div>
    )
}

export default Cast
