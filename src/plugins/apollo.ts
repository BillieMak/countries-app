import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { provideApolloClient } from '@vue/apollo-composable'
import { createApolloProvider } from '@vue/apollo-option'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL hereP
  uri: 'https://countries.trevorblades.com/'
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

// Provide the Apollo Client to the Vue composition API
provideApolloClient(apolloClient)

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient
})

export default apolloProvider
