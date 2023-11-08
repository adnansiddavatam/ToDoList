import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'

export default function ToDoForm() {
    return(
        <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Add new task..."
        />
        <Button title="Add" />
        </View>
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
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        paddingHorizontal: 30,
        paddingVertical: 8,
        marginRight: 15,
        textDecorationColor:'black',
    },
})