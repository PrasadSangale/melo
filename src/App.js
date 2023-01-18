import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "AKatsuki",
      artist: "Prasad",
      img_src: "./images/pain.jpg",
      src: "./music/Naruto.mp3"
    },
    {
      title: "itachii",
      artist: "Prasad",
      img_src: "./images/Uchiha_itachi.jpg",
      src: "./music/itachi.mp3"
    },
    {
      title: "kakshi",
      artist: "Prasad",
      img_src: "./images/kakashi.jpg",
      src: "./music/Naruto Hidden Leaf.mp3"
    },
    {
      title: "madara  ",
      artist: "Prasad",
      img_src: "./images/madara.jpg",
      src: "./music/Madara.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
