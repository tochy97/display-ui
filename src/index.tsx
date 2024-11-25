import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { localCache } from './apollo/apollo';
import Display from './Display/Display';
import Floaters from './Floaters/Floaters';

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  connectToDevTools: true,
  cache: localCache,
});
function Home({ }) {
  return (
    <div>Display.test.Home</div>
  )
}
function App1({ }) {
  return (
    <div>Display.test.Home</div>
  )
}

function App2({ }) {
  return (
    <div>Display.test.2</div>
  )
}
function App3({ }) {
  return (
    <div>Display.test.3</div>
  )
}

let list = [
  {
    name: "",
    content: <Home />
  },
  {
    name: "1",
    content: <App1 />
  },
  {
    name: "2",
    content: <App2 />
  },
  {
    name: "3",
    content: <App3 />
  }
]
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <Display contentList={list} title={'Home'} />
    <Floaters />
  </ApolloProvider>
);
