import { gql } from '@apollo/client'

import { client } from '../../pages/_app'

const getHorror = async () => {
    const { data } = await client.query({
        query: gql`
            query {
                getHorror {
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
export default getHorror
