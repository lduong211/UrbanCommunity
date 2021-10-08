import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput  } from 'react-native';
import Button from './button';


export default function AddTask({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.bigRed}>New Task</Text>
            <SafeAreaView style={styles.innerView}>
                <TextInput
                    style={styles.input}
                    placeholder="Insert new task..."
                    keyboardType="numeric"
                />
                <Button
                    onPress={() => navigation.navigate('Home')}
                    title="save"
                />
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
