import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function FavsPages() {

    const [state, setstate] = useState({
        results: []
      })
      


      useEffect(()=>{
        Axios.get('/getAllBooks').then(function(backendData){
            console.log("data",backendData.data);
            // setstate({...state, results: GoogleBooks.data.items})
            setstate({...state, results: backendData.data})
        });
      },[])

    

console.log('this is our state!!', state)

    return (
      <div className="App">
          <Link to="/">GO TO HOME!</Link>
      <h1>Favs Page coming soon</h1>


      {state.results.map((singleBook)=>{
        console.log('im each insigle book!!!!!', singleBook)
        return (
        <div>
          <h1>{singleBook.title}</h1>
      
        
        </div>)
      })}


      </div>
    );
  }
  
  export default FavsPages;