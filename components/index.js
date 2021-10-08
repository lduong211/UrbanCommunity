import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Task from './Task';
import { StyleSheet } from 'react-native';
import Button from './button';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.bigRed}>My Task</Text>
            {/* <FlatList
                verticalAlign={true}
                data={[  
                    {key: 'Task1'},
                    {key: 'Task2'}, 
                    {key: 'Task3'},
                    {key: 'Task4'},  
                    {key: 'Task5'},
                    
                ]}  
                renderItem={({item}) => (
                    <View style={styles.viewStyle}>
                        <Text style={styles.item}>●{item.key}</Text>
                        <Button />
                    </View>
                )} /> */}

            <ApolloProvider client={client}>
                <Task/>
                <Button/>
            </ApolloProvider>
            <Button
                onPress={() => navigation.navigate('AddTask')}
                title="Add Task"
            />
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
        justifyContent: 'center',
    },
    bigRed: {
        fontSize: 32,
        color: 'red',
        marginLeft: 10,
        marginTop: 20
    },
    item: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    viewStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around'
    }
});