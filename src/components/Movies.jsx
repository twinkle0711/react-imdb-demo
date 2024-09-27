import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import Pagination from './Pagination';

function Movies() {
  const [movies, setMovies] = useState([])
  const [pageNo, setPageNo] = useState(1)

  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(1)
    } else {
      setPageNo(pageNo - 1)
    }
  }

  const handleNext = () => {
    setPageNo(pageNo + 1)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=6d2f99282911176e12555e983b1ed98a&language=en-US&page=${pageNo}`)
      .then((res) => {
        setMovies(res.data.results);
      })
  }, [pageNo]);

  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around gap-8'>
        {
          movies.map((movie) => {
            return <Card poster_path={movie.poster_path} name={movie.original_title} />
          })
        }
      </div>

      <Pagination handlePrev={handlePrev} handleNext={handleNext} pageNo={pageNo} />
    </div>
  )
}

export default Movies