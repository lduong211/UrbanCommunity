import gql from 'graphql-tag'

export const ADD_TASK = gql`
    mutation addTask($taskName: String!) {
        addTask(taskName: $taskName) {
                taskId
                task
                createdAt
        }
    }
`

export const REMOVE_TASK = gql`
    mutation deleteTask($taskId: ID!) {
        deleteTask(taskId: $taskId)
    }
`

export const UPDATE_TASK = gql`
    mutation updateTask($taskId: ID!, $taskName: String!) {
        updateTask(taskId: $taskId, taskName: $taskName) {
                taskId
                task
        }
    }
`