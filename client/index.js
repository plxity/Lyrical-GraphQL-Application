import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {hashRouter as Router , Route} from 'react-router';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
const client = new ApolloClient({
  dataIdFromObject: o=> o.id
});
const Root = () => {
  return ( <ApolloProvider client={client}>
            <Router>
               <div className="container">
                   <Route exact path="/" component={SongList}/>
                   <Route exact path="/song/new" component={SongCreate}/>
                   <Route exact path="/song/:id" component={SongDetail}/>
                </div>
            </Router>
        </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
