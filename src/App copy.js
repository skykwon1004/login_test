import logo from './logo.svg';
import './App.css';
import Main from './Main';
import { useEffect, useState } from 'react';

function App() {

  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch('https://pixabay.com/api/?key=7526224-b607b4b30dee443650033bd9e&q=$cat&per_page=20', {
      method: "GET"
    }).then(res => res.json()).then(res => {
      console.log(res.hits);
      setPhotos(res.hits);
    });
  }, []);

  return (
    <>
      <Main />

      <div>
        {
          photos.map((it, itm) => {
            return (
              <div>{it.id}</div>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
