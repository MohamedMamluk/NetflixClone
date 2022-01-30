import { client } from '../../pages/_app'
import { gql } from '@apollo/client'

const getDocumentary = async () => {
    const { data } = await client.query({
        query: gql`
            query {
                getDocumentary {
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
export default getDocumentary
