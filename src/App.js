import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Footer from './Footer.js'

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
    // randomize manga
  randomManga = (responseManga) => {
    const randomM = []
    randomM.push(responseManga[Math.floor(Math.random() * responseManga.length)]);
    console.log(randomM)
    return randomM;
  }
    // manga genre call
    manga = () => {
      const urlManga = "https://api.nytimes.com/svc/books/v3/lists/current/Manga.json?api-key=AYVlgIMoj1SLFq79F0Kbjn46f2eGnERX"
      axios({
        method:'GET',
        url:urlManga,
        dataResponse:'json'
      }).then(responseManga => {
        responseManga =  responseManga.data.results.books
        console.log(responseManga)
        this.setState({
          allBooks:this.randomManga(responseManga)
        })
      })
    }
    // randomize picture
    randomPicture = (responsePictureBook) =>{
      const randomPb = []
      randomPb.push(responsePictureBook[Math.floor(Math.random() * responsePictureBook.length)]);
      console.log(randomPb)
      return randomPb;
    }
    // picture books
    pictureBook = () =>{
      const urlPictureBook = "https://api.nytimes.com/svc/books/v3/lists/current/Picture%20Books.json?api-key=AYVlgIMoj1SLFq79F0Kbjn46f2eGnERX"
      axios({
        method:'GET',
        url:urlPictureBook,
        dataResponse:'json'
      }).then(responsePictureBook => {
        responsePictureBook = responsePictureBook.data.results.books
        console.log(responsePictureBook)
        this.setState({
          allBooks:this.randomPicture(responsePictureBook)
        })
      })
    }
    render(){
      return (
        <div className="App wrapper">
          <div>
          <h1>Book of the Week</h1>
          <p>Don't know what to read? Click one of the options below to get a book recommendation from the NY Times Best Sellers.</p>
          {/* on fiction click, display results */}
          </div>
          <div>
          <button 
          onClick = {this.fiction}
          className = "button1"
          >Fiction</button>
          {/* on nonFiction click, display */}
          <button 
          onClick = {this.nonFiction}
          className = "button2"
          >Non Fiction</button>
          {/* on manga click, display */}
          <button 
          onClick = {this.manga}
          className = "button3"
          >Manga</button>
          {/* on picture click display */}
          <button 
          onClick = {this.pictureBook}
          className ="button4"
          >Picture Book</button>
          </div>
          <div>
            {this.state.allBooks.map( (book) =>{
              return(
                <div className="app-result">
                  <h2>{book.title}</h2>
                  <p>Author: {book.author}</p>
                  <p>Description: {book.description}</p>
                  <img src={book.book_image} alt={book.title} className = "swirl-in-fwd"/>
                  <p>Buy on : <a href={book.amazon_product_url}>Amazon</a></p>
                  <p>New selections every week! Come by next week to get a recommendation from a new Selection</p>
                  <p>Don't like your recommendation?Click one of the buttons again to get another result!</p>
                </div>
              )
            })}
            <Footer/>            
          </div>
        </div> 
      );
    }
}

export default App;

// saved response from API call in state when button for genre is clicked
// ******
// when button 'fiction' is clicked, need to also display Results with fiction results

// same thing for nonFiction