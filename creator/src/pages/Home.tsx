
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  const [text, setText] = React.useState('Quizes' as string)

  return (
    <section className='h-screen bg-blue'>
      <Navbar />
      <section className='flex justify-center mx-16'>
        <div className='flex flex-col justify-center items-center gap-24 h-[calc(100vh-75px)]'>
          <div>
            <h1 className='text-4xl font-bold text-slate-200 dm-serif'>Quix</h1>
            <p className='text-slate-200 text-2xl flex'>
              <span>Gain valuable insights from everyone around you with </span>
              <span className='text-peach ml-1 font-bold w-28 h-9 bg-slate-500'>
                {text}
              </span>
            </p>
          </div>
          <div className='mt-4'>
            <button className='bg-cyan hover:bg-cyan/70 font-bold rounded-lg text-black px-4 py-2'>Get Started</button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Home
