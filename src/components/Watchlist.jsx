import React from 'react'

function Watchlist() {
  return (
    <>
      <div className='flex justify-center flex-wrap m-4'>
        <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4'>Action</div>
        <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold'>Action</div>
      </div>

      <div className='flex justify-center my-4'>
        <input type='text' placeholder='Search movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4' />
      </div>

      <div className='overflow-hidden rounded border border-gray-200 m-8'>
        <table className='w-full text-gray-500 text-center'>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            <tr className='border-b-2'>
              <td className='flex items-center px-6 py-4'>
                <img className='h-[6rem] w-[10rem]' src={'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/90301/98769/the-creator-original-movie-poster-one-sheet-final-style-buy-now-at-starstills__81077.1697644483.jpg?c=2'}></img>
                <div className='mx-10'>The Creator</div>
              </td>

              <td>8.5</td>
              <td>9</td>
              <td>Action</td>

              <td className='text-red-800'>Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist