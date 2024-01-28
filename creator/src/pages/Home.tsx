
import Navbar from '@/components/Navbar'
import React from 'react'

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
    <section className='h-screen bg-blue'>
      <Navbar />
      <section className='flex flex-col justify-center items-center gap-12 h-[calc(100vh-75px)] mx-6'>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex items-center gap-3'>
            <div className='w-12 h-12 bg-peach rounded-full text-sm flex items-center justify-center'>LOGO</div>
            <h1 className='text-4xl font-bold text-slate-200 dm-serif'>QuiX</h1>
          </div>
          <p className='text-slate-200 text-4xl dm-serif'>Gain valuable insights from everyone around you with
          </p>
          <p className='text-slate-200 text-5xl text-center'>
            <span className='text-peach font-bold h-[54px] overflow-clip flex flex-col self-center'>
              <span className={`${active === 1 ? 'translate-y-0' : 'translate-y-full'} transition-transform`}>QUIZES</span>
              <span className={`${active === 2 ? '-translate-y-full' : 'translate-y-full'} transition-transform`}>POLLS</span>
              <span className={`${active === 3 ? '-translate-y-[200%]' : 'translate-y-full'} transition-transform`}>SURVEYS</span>
            </span>
          </p>
        </div>
        <div className='mt-4'>
          <button className='bg-cyan hover:bg-cyan/70 font-bold rounded-lg text-black px-4 py-2'>Get Started 🚀</button>
        </div>
      </section>
    </section>
  )
}

export default Home
