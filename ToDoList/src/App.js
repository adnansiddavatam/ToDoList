// App.jsx
import React, { useState } from 'react';
import React from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Button } from 'react-native';
import ToDoList from './components/ToDoList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home">
            {() => (
              <>
                <ToDoList tasks={tasks} />
                <ToDoForm addTask={addTask} />
              </>
            )}
          </Stack.Screen>
          {/* Define other screens here if needed */}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
});