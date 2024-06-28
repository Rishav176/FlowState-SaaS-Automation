import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import { Book, Headphones, Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

import React from 'react'
import { UserButton } from '@clerk/nextjs'

type Props = {}

const InfoBar = (props: Props) => {
  return (
    <div className='flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black'>
        <span className='flex items-center bg-muted px-4 rounded-full'>
            <Search />
            <Input placeholder="Quick Search" className='border-none bg-transparent'/>
        </span>
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger>
                    <Headphones/>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Contact Support</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger>
                    <Book/>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Guide</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        <UserButton />
        
    </div>
  )
}

export default InfoBar