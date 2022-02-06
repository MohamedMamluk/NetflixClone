import { gql, useQuery } from '@apollo/client'
import { TVShow } from '../../../types'
import { client } from '../../../pages/_app'
interface TVShowData {
    data: {
        getAiringToday: TVShow[]
    }
}
const getAiringToday = async () => {
    const { data } = await client.query({
        query: gql`
            query {
                getAiringToday {
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
export default getAiringToday
