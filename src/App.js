import React from 'react'
import './App.css'
import Search from './components/search';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, Button, Card, FormControl} from 'react-bootstrap';
import {useState, useEffect} from 'react';

function App() {
  const [searchInput, setSearchInput] = useState("")

  return (
    <div className="App">
      <InputGroup>
        <Search />
        <FormControl placeholder="Discover" type="input" onKeyPress ={event => {
          if (event.key == "Enter") {
            console.log("pressed enter")
          }
        }}
          onChange={event => setSearchInput(event.target.value)}>
        </FormControl>

      </InputGroup>
      <Container>
        
      </Container>
    </div>


  )
}

export default App;
