import React,{useState} from 'react';
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//AIzaSyCqDOGjCukY8qUJ8vMwUD9dQXWAgw7ld8Y

//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
import './App.css';

function App() {

const [state, setstate] = useState({
  searchTerm: '',
  results: []
})



  function handleTyping(e){
    console.log("we are Typing",e.target.value);
    setstate({...state, searchTerm: e.target.value})
  }

  function handleClick(e){
    console.log("Button pressed",state);


    var url = "https://www.googleapis.com/books/v1/volumes?q="+state.searchTerm+"+&key=AIzaSyCqDOGjCukY8qUJ8vMwUD9dQXWAgw7ld8Y"
    console.log('URL we tried!!', url)
    Axios.get(url).then(function(GoogleBooks){
      console.log("data",GoogleBooks.data.items);
      setstate({...state, results: GoogleBooks.data.items})
    })
  }

  function favButton(bookToSave){
    console.log("we got Clicked", bookToSave);
    Axios.post("/savedbooks", bookToSave).then(function(response){
      console.log("The route");
    })

  }

console.log("this is our state",state);
  return (
    <div className="App">
        <Link to="/Favs">GO TO FAVS!</Link>
      <h1>Search For a Book</h1>
      <input onChange={handleTyping} type="text"></input>
      <button onClick={handleClick} class>Search for book!!</button>

      {state.results.map((singleBook)=>{
        console.log('im each insigle book!!!!!', singleBook)
        return (
        <div>
          <h1>{singleBook.volumeInfo.title}</h1>
          <button onClick={() =>{favButton(singleBook)}}>Fav!</button>
        
        </div>)
      })}


    </div>
  );
}

export default App;
