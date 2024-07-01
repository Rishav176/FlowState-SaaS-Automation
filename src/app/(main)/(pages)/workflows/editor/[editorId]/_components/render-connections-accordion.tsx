"use client"
import { useNodeConnections } from '@/app/providers/connections-provider'
import { EditorState } from '@/app/providers/editor-provider'
import { Connection } from '@/lib/types'
import React from 'react'

type Props = {}

const RenderConnectionAccordion = ({connection,state}: {connection: Connection, state: EditorState }) => {
    const {
        title,
        image,
        description,
        connectionKey,
        accessTokenKey,
        alwaysTrue,
        slackSpecial,
    } = connection
  
    const {nodeConnection}= useNodeConnections()
    return (
    <div>RenderConnectionAccordion</div>
  )
}

export default RenderConnectionAccordion