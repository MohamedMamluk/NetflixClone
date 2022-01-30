import { gql } from '@apollo/client'

import { client } from '../../pages/_app'

const getAction = async () => {
    const { data } = await client.query({
        query: gql`
            query {
                getAction {
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
                    vote_average
                }
            }
        `,
    })
    return { data }
}
export default getAction
