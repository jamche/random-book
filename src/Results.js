import React from 'react';

const Result = (responseFiction) =>{
  return(
    <div className="result">
      <h2>Title of Book</h2>
      <p>Author</p>
      <p>description of the book</p>
      <img src="#" alt="title of the book"/>
      {/* <a href="#"><p>Link to buy the book</p></a> */}
    </div>
  )
}
export default Result;