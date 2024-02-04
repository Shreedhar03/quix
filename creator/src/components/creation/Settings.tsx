import { Switch } from '../ui/switch'
import { InfoIcon } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const Settings = () => {
    const options = ['Randomize question order', 'Reveal correct answer', 'Show Leaderboard after each question']
    return (
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
                        <TooltipProvider>
                            <Tooltip delayDuration={100}>
                                <TooltipTrigger>
                                    <InfoIcon className='text-slate-700' />
                                </TooltipTrigger>
                                <TooltipContent align='end'>
                                    <p className='max-w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut necessitatibus molestias debitis magnam. Velit omnis doloremque earum tenetur asperiores.</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                ))
            }
        </div>
    )
}

export default Settings
