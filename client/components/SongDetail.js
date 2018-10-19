import React, { Component } from 'react';
import songQuery from '../queries/songDetail';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import LyricCreate from'./LyricCreate';
class SongDetail extends Component {
  render() {
    const {song}= this.props.data;
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.id}</h3>
        <LyricCreate songId={this.props.match.params.id}/>

      </div>
    )
  }
}export default graphql(songQuery, {
  options: props => {
    return {
      variables: {
        id: props.match.params.id
      }
    };
  }
})(SongDetail);
