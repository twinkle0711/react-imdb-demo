import React from 'react'

function Card({ movie, poster_path, name, handleAddToWatchlist, handleRemoveFromWatchlist, watchlist }) {

  function doesContain(movie) {
    for (let i = 0; i < watchlist.length; i++) {
      const movieObj = watchlist[i];
      if (movieObj.id === movie.id) {
        return true;
      }
    }
    
    return false;
  }

  return (
    <div className='h-[40vh] w-[200px] bg-center bg-cover hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>

      {
        doesContain(movie) ?
          <div onClick={() => handleRemoveFromWatchlist(movie)} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
            &#10060;
          </div> :
          <div onClick={() => handleAddToWatchlist(movie)} className='m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60'>
            &#128525;
          </div>
      }


      <div className='text-white text-xl w-full p-1 text-center bg-gray-900/60 bottom-0'>
        {name}
      </div>
    </div>
  )
}

export default Card
