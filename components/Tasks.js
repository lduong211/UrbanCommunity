import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import TaskItem from './TaskItem'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from '../GraphQl/client'

const Tasks = () => 
    <ScrollView style={{ 'height': '84%'}}>
        <ApolloProvider client={client}>
            <TaskItem/>
        </ApolloProvider>
    </ScrollView>

export default Tasks