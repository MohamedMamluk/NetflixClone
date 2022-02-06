import { gql, useQuery } from '@apollo/client'
import { TVShow } from '../../../types'
import { client } from '../../../pages/_app'

const getOnAir = async () => {
    const { data } = await client.query({
        query: gql`
            query {
                getOnAir {
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
export default getOnAir
