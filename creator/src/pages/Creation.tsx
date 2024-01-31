import CreationNav from '@/components/CreationNav'
import Logo from '@/components/Logo'
import Question from '@/components/Question'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { InfoIcon } from 'lucide-react'
import React from 'react'

const Creation = () => {
    const options = ['Randomize question order', 'Reveal correct answer', 'Show Leaderboard after each question']
    const [noOfQuestions, setNoOfQuestions] = React.useState(1)
    return (
        <>  
            <CreationNav />
            <section className='min-h-screen p-4 sm:px-16 sm:pb-16 pt-0 relative bottom-8'>
                <Logo variant='coloured' />
                <div className='flex justify-between gap-4 flex-col md:flex-row'>
                    <form className='mt-12 w-full md:w-1/2'>
                        <input type="text"
                            autoFocus
                            placeholder='Enter quiz title'
                            className='focus:outline-none text-blue dm-serif font-medium border-b-2 focus:border-b-blue border-b-blue/50 text-3xl p-2 placeholder:text-blue/70 w-11/12' />
                        {/* ==========Questions========== */}
                        <div className='mt-6 flex flex-col gap-3 z-40'>
                            {
                                Array.from({ length: noOfQuestions }).map((_, i) => (
                                    <Question key={i} index={i}/>
                                ))
                            }
                        </div>
                        <Button type='button' variant={'outline'} className='mt-4 w-full'
                            onClick={
                                () => setNoOfQuestions(noOfQuestions + 1)
                            }>Add Question +</Button>
                    </form>

                    <aside className='flex flex-col gap-5 sm:sticky sm:top-12'>
                        <div className='bg-peach/25 p-4 rounded-xl border border-foreground'>
                            <div className='flex items-center gap-2 mt-2'>
                                <Switch className='w-10 h-6 data-[state=checked]:bg-black data-[state=unchecked]:bg-black/50' />
                                <p>
                                    Presentation Mode
                                </p>
                                <InfoIcon className='text-slate-700' />
                            </div>
                            <Button className='mt-4 w-full'>Go Live</Button>
                        </div>
                        {/* More Options */}
                        <div className='bg-peach/25 p-4 rounded-xl border border-foreground'>
                            {
                                options.map((option, i) => (
                                    <div className='flex items-center justify-between gap-2 mt-2' key={i}>
                                        <div className='flex items-center gap-2'>
                                            <Switch className='w-10 h-6 data-[state=checked]:bg-black data-[state=unchecked]:bg-black/50' />
                                            <p className='w-36 text-sm font-medium'>
                                                {option}
                                            </p>
                                        </div>
                                        <InfoIcon className='text-slate-700' />
                                    </div>
                                ))
                            }
                        </div>
                    </aside>
                </div>


            </section>
        </>
    )
}

export default Creation
