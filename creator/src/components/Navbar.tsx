import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='p-4 bg-blue flex justify-end items-start h-auto'>
      <input type="text" className='focus:outline-none px-4 py-2 font-semibold focus:bg-peach/90 bg-peach/80 text-slate-800 rounded-lg w-44 placeholder:text-slate-600'
      placeholder='Enter quix code'/>
      <Button className='ml-1 font-bold rounded-lg'>Join</Button>
    </nav>
  )
}

export default Navbar
