import React from 'react';
import './App.css';
import Post from './Components/Post';

function App() {

  const img = "https://funnypicture.org/wallpaper/2015/03/funny-and-cute-cat-pictures-21-background.jpg"

  const posts = [{title: 'interesting post #1', 
                  details: 'all the interesting stuff I can think of',
                  color:'yellow', img: img},
                {title: 'super exiting post #2', 
                 details: 'WOW, this is supper exiting!!!', 
                 color:'red', img: img},
                {title: 'string theory and shit', 
                 details: 'new reality...', 
                 color:'blue', img: img},]

  return (
    <div className="App">

      {posts.map((val) => {
        return <Post title={val.title} details={val.details} bg={val.color} img={val.img}/>
      })}

    </div>
  );
}

export default App;
