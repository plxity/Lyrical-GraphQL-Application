import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {hashRouter as Router , Route} from 'react-router';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
const client = new ApolloClient({})
const Root = () => {
  return ( <ApolloProvider client={client}>
            <Router>
               <div className="container">
                   <Route exact path="/" component={SongList}/>
                   <Route exact path="/song/new" component={SongCreate}/>
                </div>
            </Router>
        </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
