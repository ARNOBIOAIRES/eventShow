import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { Routerx } from './../Routerx';
import { client } from './lib/apollo';

function App() {

  return (
    <ApolloProvider client={client} >
      <BrowserRouter>
        <Routerx />
      </BrowserRouter>
    </ApolloProvider>
  )
}
export default App


