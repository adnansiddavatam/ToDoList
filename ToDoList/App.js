// App.jsx
import React from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Button } from 'react-native';
import ToDoList from './components/ToDoList';

export default function App() {
 
  const [tasks] = useState([
    'Do laundry',
    'Go to park',
    'Walk dog'
  ]);
 
    return (
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm />
        </SafeAreaView>
    );
}