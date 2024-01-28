import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='p-4 bg-blue flex justify-end items-start'>
      <input type="text" className='focus:outline-none px-4 py-2 bg-peach text-slate-700 rounded-sm w-44 placeholder:text-slate-700'
      placeholder='Enter quix code'/>
      <Button className='ml-1 bg-cyan hover:bg-cyan/70 font-bold rounded-sm text-black'>Join</Button>
    </nav>
  )
}

export default Navbar
