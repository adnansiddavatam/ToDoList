// App.jsx
import React, { useState } from 'react';
import React from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Button } from 'react-native';
import ToDoList from './components/ToDoList';

export default function App() {
 
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };
 
    return (
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask = {addTask} />
        </SafeAreaView>
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