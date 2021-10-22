import React, { useState } from 'react'
import { GET_TASK } from '../GraphQl/queries'
import { Text, StyleSheet } from 'react-native'

import UpdatePopUp from './UpdatePopUp'
import { useQuery } from '@apollo/react-hooks'

const TaskItem = () => {

    const {loading, error, data} = useQuery(GET_TASK)
    if(loading) return (
        <Text>
            Loading...  
        </Text>
    )
    if(error) return (
        <Text>
            Something went wrong...
        </Text>
    )

    
    return data.Task.map(({ taskId, task, createdAt }) => 
        <UpdatePopUp taskId={taskId} task={task} createdAt={createdAt}/>
    )
                       
}

export default TaskItem
