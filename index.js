import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import Button from './components/button';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.bigRed}>My Task</Text>
            <FlatList
                verticalAlign={true}
                data={[
                    { key: 'Task 1' },
                    { key: 'Task 2' },
                    { key: 'Task 3' },
                    { key: 'Task 4' },
                ]}
                renderItem={({ item }) => (
                    <View style={styles.viewStyle}>
                        <Text style={styles.item}>●{item.key}</Text>
                        <Button />
                    </View>
                )} />

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
        fontWeight: 'bold'
    },
    viewStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around'
    }
});