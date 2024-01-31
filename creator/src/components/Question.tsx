import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { X } from 'lucide-react'
import { Checkbox } from './ui/checkbox'
import { CheckedState } from '@radix-ui/react-checkbox'


const Question = ({index}:{index:number}) => {
    const [noOfOptions, setNoOfOptions] = React.useState(1)
    const [includesCorrectAnswer, setIncludesCorrectAnswer] = React.useState(false)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.currentTarget.value !== '') {
            setNoOfOptions(noOfOptions + 1)
        }
        if (e.key === 'Backspace' && e.currentTarget.value === '') {
            noOfOptions > 1 && setNoOfOptions(noOfOptions - 1)

        }
    }
    const handleChange = (e: CheckedState) => {
        console.log(e)
        e === true ? setIncludesCorrectAnswer(true) : setIncludesCorrectAnswer(false)
    }
    return (
        <>
            <div className={`${index%2==0 ? 'bg-peach/25' : 'bg-cyan/25'} p-3 rounded-xl border border-foreground z-40`}>
                <input type="text"
                    autoFocus
                    placeholder='Add a question'
                    className='focus:outline-none bg-transparent font-semibold border-b-2 focus:border-b-blue border-b-blue/50 text-xl p-2 placeholder:text-blue/70 w-10/12' />
                <div className='my-4'>
                    {/* <h3 className='text-lg  font-semibold ml-1'>Options</h3> */}
                    <div className="flex items-center space-x-2 ml-1 my-3">
                        <Checkbox id='includesCorrectAnswer' onCheckedChange={handleChange} />
                        <label
                            htmlFor="includesCorrectAnswer"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Includes correct answer
                        </label>
                    </div>

                    <div className='flex flex-col gap-2 items-start'>
                        <p className='font-semibold ml-1'>Options</p>
                        {
                            Array.from({ length: noOfOptions }).map((_, i) => (
                                <div className='flex items-center gap-2 w-full ml-1'>

                                    {
                                        includesCorrectAnswer && <Checkbox id={`option${i + 1}`} />
                                    }
                                    <input
                                        onKeyDown={handleKeyDown}
                                        key={i}
                                        type="text"
                                        placeholder={`Option ${i + 1}`}
                                        className='focus:outline-none bg-inherit font-semibold border-2 focus:border-blue border-blue/50 p-2 rounded-lg placeholder:text-blue/90 w-6/12'
                                        autoFocus
                                    />
                                    <button type='button'>
                                        <X className='w-5 ' />
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                    <p className='text-sm /90 mt-2'>Press enter to add more options</p>

                </div>
            </div>

        </>
    )
}

export default Question
