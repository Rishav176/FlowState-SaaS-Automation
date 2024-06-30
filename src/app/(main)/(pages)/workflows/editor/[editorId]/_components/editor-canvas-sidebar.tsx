'use client'
import { useNodeConnections } from '@/app/providers/connections-provider'
import { useEditor } from '@/app/providers/editor-provider'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EditorNodeType } from '@/lib/types'
import React from 'react'

type Props = {
    nodes: EditorNodeType[]
}

const EditorCanvasSidebar = ({nodes}: Props) => {
    const {state} = useEditor()
    const {nodeConnection} = useNodeConnections()
  return (
    <aside>
        <Tabs defaultValue ="actions" className="h-screen overflow-scroll pb-24">
            <TabsList className="bg-transparent">
                <TabsTrigger value="actions">Actions</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <Separator/>
        </Tabs>
        <TabsContent value="actions" className="flex flex-col gap-4 p-4"></TabsContent>
    </aside>
  )
}

export default EditorCanvasSidebar