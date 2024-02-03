import CreationNav from '@/components/CreationNav'
import Logo from '@/components/Logo'
import Question from '@/components/Question'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { InfoIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import '../index.css'

const driverObj = driver({
    popoverClass: 'driverjs-theme',
    showProgress: true,
    steps: [
        {
            element: '#quiz-title',
            popover: {
                title: 'Quiz Title',
                description: 'Craft an irresistible title for your quiz here.'
            }
        },
        {
            element: '#add-question',
            popover: {
                title: 'Add Question',
                description: 'Click to effortlessly add a new engaging question.'
            }
        },
        {
            element: '#presentation-mode',
            popover: {
                title: 'Presentation Mode',
                description: 'Toggle for a seamless and captivating presentation.'
            }
        },
        {
            element: '#settings',
            popover: {
                title: 'Settings',
                description: 'Customize with a click – tailor the experience effortlessly.'
            }
        },
        {
            element: '#go-live',
            popover: {
                title: 'Go Live',
                description: 'Launch your quiz into the spotlight with just a click.'
            }
        }
    ]
})



const Creation = () => {
    const options = ['Randomize question order', 'Reveal correct answer', 'Show Leaderboard after each question']
    const [noOfQuestions, setNoOfQuestions] = React.useState(0)
    useEffect(() => {
        localStorage.getItem('tourCompleted') || driverObj.drive()
        localStorage.setItem('tourCompleted', 'true')
    }, []);
    return (
        <>
            <CreationNav />
            <section className='p-4 sm:px-16 sm:pb-16 pt-0 lg:mt-4 lg:px-32 relative bottom-8'>
                <Logo variant='coloured' />
                <div className='flex justify-between gap-4 flex-col md:flex-row'>
                    <form className='mt-12 w-full md:w-1/2'>
                        <input type="text"
                            autoFocus
                            id='quiz-title'
                            placeholder='Enter quiz title'
                            className='focus:outline-none text-blue dm-serif font-medium border-b-2 focus:border-b-blue border-b-blue/50 text-4xl p-2 placeholder:text-blue/70 w-11/12' />
                        {/* ==========Questions========== */}
                        <div className='mt-6 flex flex-col gap-3 z-40'>
                            {
                                Array.from({ length: noOfQuestions }).map((_, i) => (
                                    <Question key={i} index={i} />
                                ))
                            }
                        </div>
                        <Button type='button' variant={'secondary'} className='mt-4 w-full font-semibold'
                            id='add-question'
                            onClick={
                                () => setNoOfQuestions(noOfQuestions + 1)
                            }>Add Question +</Button>
                    </form>

                    <aside className='flex flex-col gap-5 sm:sticky sm:top-12'>
                        <div className='bg-cyan/30 p-4 rounded-xl border border-foreground'>
                            <div className='flex items-center gap-2 mt-2' id='presentation-mode'>
                                <Switch className='w-10 h-6 data-[state=checked]:bg-black data-[state=unchecked]:bg-black/50' />
                                <p>
                                    Presentation Mode
                                </p>
                                <InfoIcon className='text-slate-700' />
                            </div>
                            <Button className='mt-4 w-full' id='go-live'>Go Live</Button>
                        </div>
                        {/* More Options */}
                        <div className='bg-peach/30 p-4 rounded-xl border border-foreground' id='settings'>
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
