import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
// import Result from './Result.js'

class App extends Component {

    constructor(){
      super();
      // create initial state
      this.state = {
        allBooks:[]
      }
    }
    // randomize fiction array
    randomFiction = (responseFiction) => {
      const randomF = []
      randomF.push(responseFiction[Math.floor(Math.random() * responseFiction.length)]);
      console.log(randomF)
      return randomF;
    }
    // fiction array call
    fiction = () => {
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
          allBooks: this.randomFiction(responseFiction)
        })
      })
    }
    // randomize nonFiction
    randomNonFiction = (responseNonFiction) => {
      const randomNf = []
      randomNf.push(responseNonFiction[Math.floor(Math.random() * responseNonFiction.length)]);
      console.log(randomNf)
      return randomNf;
    }
    // non fiction array call
    nonFiction = () => {
      const urlNonFiction = "https://api.nytimes.com/svc/books/v3/lists/current/Hardcover%20Nonfiction.json?api-key=AYVlgIMoj1SLFq79F0Kbjn46f2eGnERX"

      axios({
        method:'GET',
        url:urlNonFiction,
        dataResponse:'json'
      }).then(responseNonFiction=>{
        responseNonFiction = responseNonFiction.data.results.books
        console.log(responseNonFiction)
        this.setState({
          allBooks:this.randomNonFiction(responseNonFiction)
        })
      })
    }

    render(){
      return (
        <div className="App">
          <h1>Book of the Week</h1>
          {/* on fiction click, display results */}
          <button onClick={this.fiction}>Fiction</button>
          {/* on nonFiction click, display */}
          <button onClick={this.nonFiction}>Non Fiction</button>
          <div>
            {this.state.allBooks.map( (book) =>{
              return(
              <h2>{book.title}</h2>
              )
            })}
            
            
          </div>



          {/* <Result /> */}
        </div>
      

      );
  }
}

export default App;

// saved response from API call in state when button for genre is clicked
// ******
// when button 'fiction' is clicked, need to also display Results with fiction results

// same thing for nonFiction