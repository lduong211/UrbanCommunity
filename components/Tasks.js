import React from 'react'
import { View  } from 'react-native'
import Task from './Task'
import { useQuery } from '@apollo/react-hooks'
import { GET_TASK } from '../GraphQl/queries'

const Tasks = () => {

    const {loading, error, data} = useQuery(GET_TASK)
    console.log(data)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Something went wrong...</p>

    return data.Task.map((currentTask) => (
        <View>
            <Task task={currentTask}/>
        </View>
    ))
}

export default Tasks