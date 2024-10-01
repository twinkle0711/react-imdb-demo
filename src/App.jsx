import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';

import { HashRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import { useState } from 'react';

function App() {

  let [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (movie) => {
    let newWatchlist = [...watchlist, movie];
    setWatchlist(newWatchlist);
  }

  let handleRemoveFromWatchlist = (movie) => {
    let filteredWatchlist = watchlist.filter(movieObj => {
      return movieObj.id !== movie.id;
    })

    setWatchlist(filteredWatchlist);
  }

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

          <Route path='/watchlist' element={<Watchlist />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
