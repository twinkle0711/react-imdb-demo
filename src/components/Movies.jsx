import React from 'react'
import Card from './Card'

function Movies() {
  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Movies