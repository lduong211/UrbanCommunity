import * as React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { ApolloProvider } from '@apollo/react-hooks'
import Tasks from './Tasks'
import { StyleSheet } from 'react-native'
import Button from './Button'
import { client } from '../GraphQl/client'


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text style={styles.bigRed}>My Task</Text>
                <ScrollView style={{ 'height': '400px'}}>
                    <ApolloProvider client={client}>
                        <Tasks/>
                    </ApolloProvider>
                </ScrollView>
                <Button
                    onPress={() => navigation.navigate('AddTask')}
                    title="Add Task"
                />
             </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
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