import React from 'react'
import './App.css'
import Search from './components/search';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, Card, FormControl, Row} from 'react-bootstrap';
import {useState, useEffect} from 'react';

const CLIENT_ID="0474c79b015843b9b4e9a4b67cbe80c7";
const CLIENT_SECRET="f5aa899ec05f4ce6bcee4753337bca46";

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [accessToken, setAccessToken] = useState("data")

  //How to get token to get Spotify Data
  useEffect(() => {
    var tellFetch={
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', tellFetch)
    .then(result => result.json())
    .then(data => setAccessToken(data.access_token))
  }, [])

  return (
    <div className="App">
      <Container>
        <InputGroup>
            <FormControl placeholder="Discover" type="input" onKeyPress ={event => {
              if (event.key == "Enter") {
              console.log("pressed enter")
              }
            }}
            onChange={event => setSearchInput(event.target.value)}/>
            <button> you</button>       
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-5">
          <Card>
            <Card.Img />
            <Card.Body>
              <Card.Title>Sample</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  )
}

export default App;
