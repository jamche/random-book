import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

    constructor(){
      super();
      // create initial state
      this.state = {
        allBooks:[]
      }
    }
  
  
    fiction=()=>{
      const urlFiction = "https://api.nytimes.com/svc/books/v3/lists/current/Hardcover%20Fiction.json?api-key=AYVlgIMoj1SLFq79F0Kbjn46f2eGnERX"
     
      // api call
      axios({
        method:'GET',
        url:urlFiction,
        dataResponse:'json'
      }).then(responseFiction => {

        responseFiction = responseFiction.data.results.books
        console.log(responseFiction)
        this.setState({
          allBooks:responseFiction
        })
      })
    }

    nonFiction=()=>{
      const urlNonFiction = "https://api.nytimes.com/svc/books/v3/lists/current/Hardcover%20Nonfiction.json?api-key=AYVlgIMoj1SLFq79F0Kbjn46f2eGnERX"

      axios({
        method:'GET',
        url:urlNonFiction,
        dataResponse:'json'
      }).then(responseNonFiction=>{
        responseNonFiction = responseNonFiction.data.results.books
        console.log(responseNonFiction)
        this.setState({
          allBooks:responseNonFiction
        })
      })
    }

    render(){
      return (
        <div className="App">
          <h1>Book of the Week</h1>
          <button onClick={this.fiction}>Fiction</button>
          <button onClick={this.nonFiction}>Non Fiction</button>
        </div>
      );
  }
}

export default App;
