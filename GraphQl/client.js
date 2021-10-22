import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client"
import { HttpLink } from "apollo-link-http"

const httpLink = new HttpLink({
    uri: "http://192.168.1.65:8080/graphql",
  });
  
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([httpLink]),
});
