import { gql } from '@apollo/client'

import { client } from '../../pages/_app'

const getComedy = async () => {
    const { data } = await client.query({
        query: gql`
            query {
                getComedy {
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
export default getComedy
