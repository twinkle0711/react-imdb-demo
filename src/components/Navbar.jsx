import React from 'react'
import MovieLogo from '../assets/MovieLogo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-3'>
      <img className='w-[80px]' src={MovieLogo} alt=""/>
      <Link to="/" className='text-blue-400 text-2xl font-bold'>Movies</Link>
      <Link to="/watchlist" className='text-blue-400 text-2xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar
