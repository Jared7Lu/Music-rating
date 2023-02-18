import React from 'react';
import "song-comments.css";
import { Comment } from '../components/Comments.js';
import { Search } from '../components/search';

function songs() {
 return (
    <>
     {/* Where the function to be able to search for other songs goes   */}
        <Search />
    <div className="Song-Container">
        <h1 className="Song">Song</h1>
        {/* Where the song title goes once i figure out of to get the information  */}
        <h2 className="Song-Title">Her loss</h2>
        {/* Where the song img goes once i figure out of to get the information  */}
        <img src="/src/Her-loss.png" alt="Her-loss img" />
        {/* where who the song is made by goes once i figure out of to get the information */}
        <h3 className="Song-madeby">Made By: Drake & 21 </h3>
    </div>
    <div className="Song-Information">
      <h2>Description</h2>
      {/* Were the Song information were go once i figure out how to pull that information  */}
      <p className="Song-Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus sit amet ex eu ultrices. Nulla consequat, justo sit amet pretium pharetra, mi mauris tempor elit, ac mollis leo felis.</p>
    </div>
    <div className="Comments">
      {Comment}

      <Comment />
    </div>
    </>
 )
}

export default songs;