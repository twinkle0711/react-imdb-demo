import React, { useEffect, useState } from 'react'
import genreids from '../utility/genre'

function Watchlist({ watchlist, setWatchlist, handleRemoveFromWatchlist }) {

  const [search, setSearch] = useState('');
  const [genreList, setGenreList] = useState(['All Genres']);
  const [currentGenre, setCurrentGenre] = useState('All Genres');

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  let sortIncreasing = () => {
    let sorted = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchlist([...sorted]);
  };

  let sortDecreasing = () => {
    let sorted = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });

    setWatchlist([...sorted]);
  }

  useEffect(() => {
    let temp = watchlist.map(movieObj => {
      return genreids[movieObj.genre_ids[0]];
    });

    temp = new Set(temp);
    setGenreList(['All Genres', ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className='flex justify-center flex-wrap m-4'>
        {genreList.map((genre) => {
          return <div key={genre} onClick={() => handleFilter(genre)}
            className={currentGenre === genre ?
              'flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4' :
              'flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4'}>
            {genre}
          </div>
        })}
      </div>

      <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} type='text' placeholder='Search movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4' />
      </div>

      <div className='overflow-hidden rounded border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>

              <th className='flex justify-center'>
                <div onClick={sortIncreasing} className='p-2'><i className="fa-solid fa-arrow-up"></i></div>
                <div className='p-2'>Ratings</div>
                <div onClick={sortDecreasing} className='p-2'><i className="fa-solid fa-arrow-down"></i></div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>

            {watchlist
              .filter(movie => {
                if (currentGenre === 'All Genres') {
                  return true;
                } else {
                  return genreids[movie.genre_ids[0]] === currentGenre;
                }
              })
              .filter(movie => {
                return movie.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((movie) => {
                return <tr key={movie.id} className='border-b-2'>
                  <td className='flex items-center px-6 py-4'>
                    <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt=''></img>
                    <div className='mx-10'>{movie.title}</div>
                  </td>

                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td>{genreids[movie.genre_ids[0]]}</td>

                  <td onClick={() => handleRemoveFromWatchlist(movie)} className='text-red-800'>Delete</td>
                </tr>
              })}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist