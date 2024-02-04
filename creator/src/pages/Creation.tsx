import Logo from '@/components/Logo'
import Question from '@/components/Question'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { InfoIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import '../index.css'
import CreationNav from '@/components/creation/CreationNav'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Settings from '@/components/creation/Settings'

const driverObj = driver({
    popoverClass: 'driverjs-theme',
    showProgress: true,
    steps: [
        {
            element: '#quiz-title',
            popover: {
                title: 'Quiz Title✨',
                description: 'Craft an irresistible title for your quiz here.'
            }
        },
        {
            element: '#add-question',
            popover: {
                title: 'Add Question➕',
                description: 'Click to effortlessly add a new engaging question.'
            }
        },
        {
            element: '#presentation-mode',
            popover: {
                title: 'Presentation Mode🎦',
                description: 'Toggle for a seamless and captivating presentation.'
            }
        },
        {
            element: '#settings',
            popover: {
                title: 'Settings⚙️',
                description: 'Customize with a click – tailor the experience effortlessly.'
            }
        },
        {
            element: '#go-live',
            popover: {
                title: 'Go Live🚀',
                description: 'Launch your quiz into the spotlight with just a click.'
            }
        }
    ]
})

const getQuestions = () => {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}

type Question = {
    id: number,
    content: string
}
const Creation = () => {

    const [questions, setQuestions] = React.useState<Question[]>(getQuestions())
    useEffect(() => {
        setTimeout(() => {
            localStorage.getItem('tourCompleted') || driverObj.drive()
            // driverObj.drive()
            localStorage.setItem('tourCompleted', 'true')
        }, 1500);
    }, []);

    const onDragEnd = (result: any) => {
        if (!result.destination) {
            return;
        }
        const items = Array.from(questions);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setQuestions(items);
    }
    useEffect(() => {
        console.log(questions)
        localStorage.setItem('questions', JSON.stringify(questions))
    }, [questions])
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
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId='questions'>
                                {
                                    (provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className='mt-6 flex flex-col gap-3 z-40'>
                                            {
                                                questions.map((div, i) => (
                                                    <Question key={i} index={i} title={div.content} />
                                                ))
                                            }
                                            {provided.placeholder}
                                        </div>
                                    )

                                }
                            </Droppable>
                        </DragDropContext>
                        <Button type='button' variant={'secondary'} className='mt-4 w-full font-semibold'
                            id='add-question'
                            onClick={
                                () => setQuestions([...questions, { id: questions.length + 1, content: `Question ${questions.length + 1}` }])
                            }>Add Question +</Button>
                    </form>

                    <aside className='flex flex-col gap-5 sm:sticky sm:top-12'>
                        {/* Start QuiX */}
                        
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
                        <Settings />
                        <Button
                        onClick={()=>{
                            driverObj.drive()
                        }}
                        className='bg-blue text-white font-semibold hover:bg-blue'>Take a tour</Button>
                    </aside>
                </div>


            </section>
        </>
    )
}

export default Creation
