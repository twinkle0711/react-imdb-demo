import React from 'react'

function Card({ poster_path, name }) {
  return (
    <div className='h-[40vh] w-[200px] bg-center bg-cover hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>
      <div className='text-white text-xl w-full p-1 text-center bg-gray-900/60 bottom-0'>
        { name }
      </div>
    </div>
  )
}

export default Card
