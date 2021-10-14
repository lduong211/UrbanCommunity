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
    mutation deleteTask($taskId: Id!) {
        deleteTask(taskId: $taskId)
    }
`