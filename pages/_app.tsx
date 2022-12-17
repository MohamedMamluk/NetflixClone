import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
    useContext,
    createContext,
    useState,
    Dispatch,
    SetStateAction,
} from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Layout from '../components/layout'
interface ContextType {
    showType: boolean
    setShowType: Dispatch<SetStateAction<boolean>>
}
export const client = new ApolloClient({
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    // getTVPopular: {
                },
            },
        },
    }),
    uri: 'https://nfc-0v7l.onrender.com/',
})
//@ts-ignore
export const Type = createContext<ContextType>()
function MyApp({ Component, pageProps }: AppProps) {
    const [movies, setMovies] = useState(true)
    return (
        <ApolloProvider client={client}>
            <Type.Provider value={{ showType: movies, setShowType: setMovies }}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Type.Provider>
        </ApolloProvider>
    )
}

export default MyApp
