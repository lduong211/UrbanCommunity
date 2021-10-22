import React, { useState } from 'react'
import { View, TextInput, Modal, StyleSheet, Text } from 'react-native'
import { BlurView } from 'expo-blur'
import Button from './Button'
import { useMutation } from '@apollo/react-hooks'
import { GET_TASK } from '../GraphQl/queries'
import { AntDesign } from '@expo/vector-icons'

import { REMOVE_TASK, UPDATE_TASK } from '../GraphQl/mutations'

const UpdatePopUp = ({ taskId, task, createdAt }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [userInput, setUserInput] = useState(task)

    const [removeTASK] = useMutation(REMOVE_TASK)
    async function removeHandler(id) {
        if(!id) return
        
        const variables = {
            taskId: id
        }
        
        await removeTASK({ 
            variables,  
            update: cache => {
                const prevData = cache.readQuery({ query: GET_TASK })
                const newData = prevData.Task.filter(task => task.taskId !== id)
                cache.writeQuery({ query: GET_TASK, data: { Task: newData }})
            }
        })
    } 

    const [updateTask] = useMutation(UPDATE_TASK)
    async function updateHandler(id) {
        if(userInput.trim() || !userInput.trim() === 0)  {
            const variables = {
                taskId: id,
                taskName: userInput 
            }
            
            await updateTask({ 
                variables, 
                update: cache => {
                    const newData = cache.readQuery({ query: GET_TASK })
                    console.log(newData)
                    cache.writeQuery({ query: GET_TASK, data: { Task: newData }})
                }
            })
            setModalVisible(!modalVisible)
        } else {
            removeHandler(id)
        }
    }

    
    return (
        <View style={styles.page} key={taskId}>
            <View>
                <Text contentEditable={true} style={styles.task}>{task}</Text>
                <Text style={styles.time}>{createdAt}</Text>
            </View>
            <View style={styles.container}>
                <AntDesign name="edit" size={24} color="black" onPress={() => setModalVisible(true)}/>
                <AntDesign name="closecircle" style={styles.button} onPress={() => removeHandler(taskId)}/>
            </View>

            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <BlurView intensity={50} style={styles.blurContainer}>
                    <View style={styles.centeredView} key={taskId}>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setUserInput(text)}
                            value={userInput}
                        />
                        <Button
                            title="Save" 
                            onPress={() => updateHandler(taskId)}
                        />
                    </View>
                </BlurView>
            </Modal>
            
        </View>
    )
}


const styles = StyleSheet.create({
    page:   {
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      marginTop: 20,
    },
    task: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    button: {
        color: 'black',
        fontSize: 24,
        marginLeft: 20
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    blurContainer: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    centeredView: {
      height: '50%',
      width: '75%',
      backgroundColor: 'white',
      alignItems: 'center'
    },
    input: {
        height: 40,
        width: '70%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
    }
})
  

export default UpdatePopUp