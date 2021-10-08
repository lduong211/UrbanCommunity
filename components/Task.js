import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const Task = () => (
    <Query query={ gql`
        {
            Task{
                taskId,
                task,
                createdAt
            }
        }
    `}>
        {({loading, error, data}) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error</p>

            return data.Task.map(({taskId, task, createdAt}) => (
                <div key={taskId}>
                    <p>{`${task} create at ${createdAt}`}</p>
                </div>    
            ))
        }}
    </Query>
)

export default Task