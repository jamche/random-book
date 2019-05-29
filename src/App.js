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

    componentDidMount(){
      const urlFiction = "https://api.nytimes.com/svc/books/v3/lists/current/Hardcover%20Fiction.json?api-key=AYVlgIMoj1SLFq79F0Kbjn46f2eGnERX"
      const urlNonFiction = "https://api.nytimes.com/svc/books/v3/lists/current/Hardcover%20Nonfiction.json?api-key=AYVlgIMoj1SLFq79F0Kbjn46f2eGnERX"
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
          <h1>Hey There :)</h1>
        </div>
      );
  }
}

export default App;
