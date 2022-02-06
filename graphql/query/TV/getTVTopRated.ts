import { gql, useQuery } from '@apollo/client'
import { TVShow } from '../../../types'
import { client } from '../../../pages/_app'

const getTVTopRated = async () => {
    const { data } = await client.query({
        query: gql`
            query {
                getTVTopRated {
                    id
                    poster_path {
                        w500
                    }
                    name
                }
            }
        `,
    })
    return { data }
}
export default getTVTopRated
