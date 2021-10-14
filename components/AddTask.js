import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from '../GraphQl/client'
import AddTaskForm from './AddTaskForm'

const AddTask = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.bigRed}>New Task</Text>
            <SafeAreaView style={styles.innerView}>
                <ApolloProvider client={client}>
                    <AddTaskForm navigation={navigation}/>
                </ApolloProvider>
            </SafeAreaView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 400,
        fontSize: 20,
        margin: 'auto',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowRadius: 10,
    },
    bigRed: {
        fontSize: 32,
        color: 'red',
        marginLeft: 10,
        marginTop: 20
    },
    innerView: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        alignItems: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default AddTask