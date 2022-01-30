import { client } from '../../pages/_app'
import { gql } from '@apollo/client'

const getRomance = async () => {
    const { data } = await client.query({
        query: gql`
            query {
                getRomance {
                    id
                    title
                    backdrop_path {
                        w500
                        original
                    }
                    poster_path {
                        w500
                        original
                    }
                }
            }
        `,
    })
    return { data }
}
export default getRomance
