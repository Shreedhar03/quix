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
        <section className='min-h-screen bg-blue p-4 sm:p-16'>
            <Logo variant='monochrome' />
            <div className='flex justify-between gap-4 flex-col md:flex-row'>
                <form className='mt-12 w-full md:w-1/2'>
                    <input type="text"
                        autoFocus
                        placeholder='Enter quiz title'
                        className='focus:outline-none bg-blue text-cyan font-semibold border-b-2 focus:border-b-cyan border-b-cyan/50 text-3xl p-2 placeholder:text-cyan/70 w-11/12' />
                    {/* ==========Questions========== */}
                    <div className='mt-6 flex flex-col gap-3 z-40'>
                        {
                            Array.from({ length: noOfQuestions }).map((_, i) => (
                                <Question key={i} />
                            ))
                        }
                    </div>
                    <Button type='button' className='mt-4 w-full'
                        onClick={
                            () => setNoOfQuestions(noOfQuestions + 1)
                        }>Add Question +</Button>
                </form>

                <aside className='flex flex-col gap-5 sticky top-0'>
                    <div className='bg-cyan p-4 rounded-lg'>
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
                    <div className='bg-cyan p-4 rounded-lg'>
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
    )
}

export default Creation
