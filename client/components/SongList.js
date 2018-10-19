import React, { Component } from 'react'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router';
class SongList extends Component {


    onSongDelete(id){
        this.props.mutate({
            variables:{
                id
            }
        }).then(()=>this.props.data.refetch())

    }
    renderSongs(){
        return this.props.data.songs.map((song)=>{
            return(
                <li className="collection-item" key={song.id}>
                    <Link to={`/song/${song.id}`}>
                    {song.title}
                    </Link>
                     <i
                        className="material-icons"
                        onClick={() => {
                        this.onSongDelete(song.id);
                        }}
                        >
                        delete
                    </i>
                </li>
                );
        })

    }
  render() {
    return (
      <div>
      <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/song/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}
const query =gql`
 {
     songs{
         id,
         title
     }
 }
`;
const mutation= gql`
        mutation DeleteSong($id:ID){
            deleteSong(id:$id){
                id
            }
        }


`;
export default graphql(mutation)(graphql(query)(SongList));