"use client"
import { useModal } from '@/app/providers/modal-provider'
import Workflowform from '@/components/forms/workflow-form'
import CustomModal from '@/components/global/custom-modal'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}

const Page = (props: Props) => {
    const router = useRouter()
    const {setOpen}= useModal()
    useEffect(()=>{
        const timer = setTimeout(()=>{
            router.push('/workflows');
        setOpen(
            <CustomModal
            title="Create a new Workflow Automation"
            subheading="Workflows are a powerfull that help you automate tasks.">
                <Workflowform />
            </CustomModal>
             )
        },700);
        return ()=> clearTimeout(timer)
       
    },[setOpen, router]);
  return (
    <div>Redirecting...</div>
  )
}

export default Page