import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<> <Banner /><Movies /> </>}></Route>
          <Route path='/watchlist' element={<Watchlist />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
