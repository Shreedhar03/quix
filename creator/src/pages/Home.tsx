import React from 'react'
import Navbar from '@/components/Navbar'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Logo from '@/components/Logo'

const Home = () => {
  const [active, setActive] = React.useState(1)
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (active === 3) {
        setActive(1)
      } else {
        setActive(active + 1)
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [active])

  return (
    <section className='h-screen bg-blue relative'>
      <Navbar />
      <section className='flex flex-col justify-center items-center gap-12 h-[calc(100vh-75px)] mx-6'>
        <div className='flex flex-col items-center gap-6'>
          <Logo variant='funcky' />
          <p className='text-slate-200 text-4xl dm-serif text-center'>Gain valuable insights from everyone around the world with
          </p>
          <p className='text-slate-200 text-5xl text-center'>
            <span className='text-peach font-bold h-[54px] overflow-clip flex flex-col self-center'>
              <span className={`${active === 1 ? 'translate-y-0' : 'translate-y-full'} transition-transform`}>QUIZES</span>
              <span className={`${active === 2 ? '-translate-y-full' : 'translate-y-full'} transition-transform`}>POLLS</span>
              <span className={`${active === 3 ? '-translate-y-[200%]' : 'translate-y-full'} transition-transform`}>SURVEYS</span>
            </span>
          </p>
        </div>
        <Button className='mt-4'>
          <Link to={'/creation'} className='font-bold rounded-lg px-4 py-2'>Get Started 🚀</Link>
        </Button>
      </section>
      {/* <img src={home} alt='home' className='object-cover absolute bottom-12 left-12 w-56' /> */}
    </section>
  )
}

export default Home
