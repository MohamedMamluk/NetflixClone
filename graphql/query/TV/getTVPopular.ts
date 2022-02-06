import { gql, useQuery } from '@apollo/client'
import { TVShow } from '../../../types'
import { client } from '../../../pages/_app'

const getTVPopular = async () => {
    const { data } = await client.query({
        query: gql`
            query {
                getTVPopular {
                    id
                    poster_path {
                        w500
                    }
                    backdrop_path {
                        w500
                    }
                    name
                }
            }
        `,
    })
    return { data }
}
export default getTVPopular
