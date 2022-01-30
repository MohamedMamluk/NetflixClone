import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Layout from '../components/layout'

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://intense-river-89483.herokuapp.com',
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    )
}

export default MyApp
