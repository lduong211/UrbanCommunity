import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'
import { useMutation } from '@apollo/react-hooks'
import { REMOVE_TASK } from '../GraphQl/mutations'
import { GET_TASK } from '../GraphQl/queries'

const Task = (props) => {
    
    const [removeTASK] = useMutation(REMOVE_TASK)
    async function handleClick(id) {
        if(!id) return
        
        const variables = {
            taskId: id
        }
        
        console.log(id)
        await removeTASK({ 
            variables, 
            update: cache => {
                const prevData = cache.readQuery({ query: GET_TASK })
                const newData = prevData.Task.filter(task => task.taskId !== id)
                cache.writeQuery({ query: GET_TASK, data: { Task: newData }})
            }
        })
        
    } 
    return (
        <>
            <div style={page}>
                <div>
                    <p style={{ 'fontSize': '24px', 'fontFamily': 'cursive', 'fontweight': 'bold', 'margin': '0' }}>{`${props.task.task}`}</p>
                    <span style={{ 'fontSize': '12px', 'color': '#9e9e9e' }}>{`${props.task.createdAt}`}</span>
                </div>
                <FontAwesomeIcon onClick={() => handleClick(props.task.taskId)} icon={faRectangleXmark} />
            </div>
            <div style={{'borderBottom': '1px solid', 'margin': '0 10px'}}></div>
        </>
    )
}

const page = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 30,
      paddingRight: 30,
      marginTop: 20,
      borderEndWidth: 2
  };


export default Task
