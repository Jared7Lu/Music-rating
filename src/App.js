import React from 'react'
import './App.css'
import Search from './components/search';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, Card, FormControl, Row, Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';

const CLIENT_ID="0474c79b015843b9b4e9a4b67cbe80c7";
const CLIENT_SECRET="f5aa899ec05f4ce6bcee4753337bca46";

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [accessToken, setAccessToken] = useState("data")
  const [albums, setAlbums] = useState([]);

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

  //Search Bar
  async function search() {
    console.log("You are Discovering " + searchInput);

    //Get data from Spotify
    var searchPara = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }

    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchPara)
    .then(response => response.json())
    .then(data => { return data.artists.items[0].id })

    console.log("artist id is" + artistID);

    //get artist
    var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchPara)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setAlbums(data.items);
    })
console.log(albums);
    //What to show from data
  }
  return (
    <div className="App">
      <Container>
        <InputGroup>
            <FormControl placeholder="Discover" type="input" 
            onKeyPress ={event => {
              if (event.key == "Enter") {
              search();
              }
            }}
            onChange={event => setSearchInput(event.target.value)}/>
            <Button onClick={search}>Discover</Button>      
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-5">
          {albums.map((album, i) => {
            return(
              <Card>
            <Card.Img src={album.images[0].url}/>
            <Card.Body>
              <Card.Title>{album.name}</Card.Title>
            </Card.Body>
          </Card>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default App;
