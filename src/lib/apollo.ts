import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ovnr8r194u01z47vwlgymz/master',
  cache: new InMemoryCache(),
})