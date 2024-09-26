import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';

import { HashRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<> <Banner /><Movies /> </>}></Route>
          <Route path='/react-imdb-demo' element={<> <Banner /><Movies /> </>}></Route>
          <Route path='/watchlist' element={<Watchlist />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
