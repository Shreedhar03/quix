import React from 'react'
import reorder from '../assets/reorder.svg'
import { X } from 'lucide-react'
import { Checkbox } from './ui/checkbox'
import { CheckedState } from '@radix-ui/react-checkbox'
import { Draggable } from 'react-beautiful-dnd'


const Question = ({ index,title }: { index: number,title:string }) => {
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

        <Draggable
            draggableId={index.toString()}
            index={index}>
            {
                (provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        key={index} id={index.toString()} className={`${index % 2 == 0 ? 'bg-peach/25' : 'bg-peach/25'} p-3 rounded-xl border border-foreground z-40 pl-6 relative`}>
                        <input
                            type="text"
                            autoFocus
                            placeholder={title}
                            className='focus:outline-none bg-transparent font-semibold border-b-2 focus:border-b-blue border-b-blue/50 text-xl p-2 placeholder:text-blue/70 w-10/12' />
                        <div className='my-4'>
                            {/* <h3 className='text-lg  font-semibold ml-1'>Options</h3> */}
                            <div className="flex items-center space-x-2 ml-1 my-3">
                                <Checkbox id={index.toString()} onCheckedChange={handleChange} />
                                <label
                                    htmlFor={index.toString()}
                                    className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Includes correct answer
                                </label>
                            </div>

                            <div className='flex flex-col gap-2 items-start'>
                                {/* <p className='font-semibold ml-1'>Options</p> */}
                                {
                                    Array.from({ length: noOfOptions }).map((_, i) => (
                                        <div key={i} className='flex items-center gap-2 w-full ml-1'>

                                            {
                                                includesCorrectAnswer && <Checkbox id={`option${i + 1}`} />
                                            }
                                            <input
                                                onKeyDown={handleKeyDown}
                                                key={i}
                                                type="text"
                                                placeholder={`Option ${i + 1}`}
                                                className='focus:outline-none bg-peach/50 font-semibold p-2 rounded-lg placeholder:text-blue/90 w-8/12'
                                                autoFocus
                                            />
                                            <button type='button'>
                                                <X className='w-5 ' />
                                            </button>
                                        </div>
                                    ))
                                }
                            </div>
                            <p className='text-sm /90 mt-2 ml-2'>Press enter to add more options</p>

                        </div>
                        <div {...provided.dragHandleProps} className="absolute left-2 top-1/2 -translate-y-1/2">
                            <img src={reorder} alt="reorder" />
                        </div>
                    </div>
                )
            }
        </Draggable>


    )
}

export default Question
