"use server"

import { db } from "@/lib/db"

export const onCreateNodesEdges = async (
    flowId: string,
    nodes: string,
    edges: string,
    flowPath: string
) => {
    const flow = await db.workflows.update({
        where: {
            id: flowId,
        },
        data: {
            nodes, edges,
            flowPath: flowPath,
        },
    })
    if (flow) return {message: 'Flow saved successfully'}
}

export const onFlowPublish = async (workflowId: string, state: boolean)=>{
    
    const published = await db.workflows.update({
        where: {
            id: workflowId,
        },
        data:{
            publish: state,
        },
    });
    if (published.publish) return 'Workflow published';
    return 'Workflow unpublished';
}