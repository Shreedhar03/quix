import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='p-4 bg-blue flex justify-end items-start h-auto'>
      <input type="text" className='focus:outline-none px-4 py-2 font-semibold bg-peach text-slate-800 rounded-lg w-44 placeholder:text-slate-600'
      placeholder='Enter quix code'/>
      <Button className='ml-1 bg-cyan hover:bg-cyan/70 font-bold rounded-lg text-black'>Join</Button>
    </nav>
  )
}

export default Navbar
