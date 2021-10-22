import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddTask from './components/AddTask'

import { ApolloProvider } from '@apollo/react-hooks'
import Tasks from './components/Tasks'
import Button from './components/Button'
import { client } from './GraphQl/client'

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.bigRed}>My Task</Text>
          
          <Tasks/>
          <Button
              onPress={() => navigation.navigate('AddTask')}
              title="Add Task"
          />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      fontSize: 20,
      margin: 'auto',
      backgroundColor: '#fff',
      borderRadius: 5,
      shadowRadius: 10,
      justifyContent: 'center'
  },
  bigRed: {
      fontSize: 32,
      color: 'red',
      marginLeft: 10,
      marginTop: 20
  }
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddTask" component={AddTask} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>Hello!</Text>
    // </View>
  )
}
