import React, { Component } from 'react'
import gql from 'graphql-tag';
import graphql from 'react-apollo';
 class LyricCreate extends Component {
     constructor(props){
         super(props);
         this.state={
             content:''
         }
     }
     onSubmit(){

     }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
            <input value={this.state.content} onChange={event=> this.setState({content:event.target.value})}/>
        </form>
      </div>
    )
  }
}
const mutation= gql`

`;
export default LyricCreate;