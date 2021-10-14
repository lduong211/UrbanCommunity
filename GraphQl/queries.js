import gql from 'graphql-tag'

export const GET_TASK = gql`
    {
        Task{
            taskId,
            task,
            createdAt
        }
    }
`