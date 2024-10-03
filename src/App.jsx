import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';

import { HashRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import { useEffect, useState } from 'react';

function App() {

  let [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (movie) => {
    let newWatchlist = [...watchlist, movie];
    localStorage.setItem('moviesApp', JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
  }

  let handleRemoveFromWatchlist = (movie) => {
    let filteredWatchlist = watchlist.filter(movieObj => {
      return movieObj.id !== movie.id;
    })

    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist));
    setWatchlist(filteredWatchlist);
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if (!moviesFromLocalStorage) {
      return;
    }

    setWatchlist(JSON.parse(moviesFromLocalStorage));
  },[])

  return (
    <div>
      <HashRouter>
        <Navbar />

        <Routes>
          <Route path='/'
            element={
              <>
                <Banner />
                <Movies handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist} />
              </>}>
          </Route>

          <Route path='/react-imdb-demo'
            element={
              <>
                <Banner />
                <Movies handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist} />
              </>}>
          </Route>

          <Route path='/watchlist'
            element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />}>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
