import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Footer from './Footer.js';

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

        this.setState({
          allBooks: this.randomFiction(responseFiction)
        })
      })
    }
    // randomize nonFiction
    randomNonFiction = (responseNonFiction) => {
      const randomNf = []
      randomNf.push(responseNonFiction[Math.floor(Math.random() * responseNonFiction.length)]);
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
        this.setState({
          allBooks:this.randomNonFiction(responseNonFiction)
        })
      })
    }
    // randomize manga
  randomManga = (responseManga) => {
    const randomM = []
    randomM.push(responseManga[Math.floor(Math.random() * responseManga.length)]);
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
        this.setState({
          allBooks:this.randomManga(responseManga)
        })
      })
    }
    // randomize picture
    randomPicture = (responsePictureBook) =>{
      const randomPb = []
      randomPb.push(responsePictureBook[Math.floor(Math.random() * responsePictureBook.length)]);
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
        this.setState({
          allBooks:this.randomPicture(responsePictureBook)
        })
      })
    }
    render(){
      return (
        <div className="App">
          <div className="darkBack">
            <h1>Book of the Week</h1>
            <p>Don't know what to read? No problem, just click one of the genres below for a book recommendation from the NY Times Best Sellers of the week!</p>
          </div>
          <div className="buttons wrapper">
            {/* on fiction click, display results */}
            <button 
            onClick = {this.fiction}
              className= "button"
            >Fiction</button>
            {/* on nonFiction click, display */}
            <button 
            onClick = {this.nonFiction}
            className = "button"
            >Non Fiction</button>
            {/* on manga click, display */}
            <button 
            onClick = {this.manga}
            className = "button"
            >Manga</button>
            {/* on picture book click display */}
            <button 
            onClick = {this.pictureBook}
            className ="button"
            >Picture Book</button>
          </div>
          <div className="wrapper">

            {this.state.allBooks.map((book) => {

              return (
                <div className="result">
                  <div className="imgContain">
                    <img src={book.book_image} alt={book.title} className='swirl-in-fwd'/>
                  </div>
                  <div className="resultContent tracking-in-expand-fwd-top">
                    <h2>{book.title}</h2>
                    <p><span>Author</span> : {book.author}</p>
                    <p><span>Synopsis</span> : {book.description}</p>
                    <p> Click one of the options above again to get another result if you're not satisfied.</p>
                    <p>Get your book here : <a href={book.amazon_product_url}> Amazon <i className="fab fa-amazon" aria-hidden="true" title="Click to go to Amazon.com to purchase the book"></i></a></p>
                  </div>
                </div>
              )
            })
            }
          </div>
          <Footer /> 
        </div> 
      );
    }
}

export default App;

// saved response from API call in state when button for genre is clicked
// ******
// when button 'fiction' is clicked, need to also display Results with fiction results

// same thing for nonFiction