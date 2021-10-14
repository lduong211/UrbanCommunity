import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Button from './button'
import { useMutation } from '@apollo/react-hooks'
import { ADD_TASK } from '../GraphQl/mutations'
import { GET_TASK } from '../GraphQl/queries'


const AddTaskForm = ({ navigation }) => {

    const [userInput, setUserInput] = React.useState('')
    const [addTask] = useMutation(ADD_TASK)

    async function handleClick() {
        if(!userInput.trim()) return
        
        const variables = {
            taskName: userInput
        }
        
        console.log(userInput)
        await addTask({ variables,
            refetchQueries: [
                { query: GET_TASK }
            ]
        })

        navigation.navigate('Home')
        
    } 

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Insert new task..."
                keyboardType="numeric"
                onChange={(event) => setUserInput(event.target.value)}
                value={userInput}
            />
            <Button
                onPress={() => handleClick()}
                title="Save"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default AddTaskForm