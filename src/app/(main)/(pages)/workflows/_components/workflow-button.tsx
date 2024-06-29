"use client"
import { useModal } from '@/app/providers/modal-provider'
import Workflowform from '@/components/forms/workflow-form'
import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

type Props = {}

const WorkFlowButton = (props: Props) => {
    const {setOpen, setClose} = useModal()
    const handleClick= () =>{
        setOpen(
            <CustomModal
            title="Create a new Workflow Automation"
            subheading="Workflows are a powerfull that help you automate tasks.">
                <Workflowform />
            </CustomModal>
        )
    }
  return (
    <Button size={'icon'} onClick={handleClick}>
        <Plus />
    </Button>
  )
}

export default WorkFlowButton