import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen() {
  const appName = 'Your App Name';
  const yourName = 'Your Name';
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>{appName}</Text>
        <Text style={styles.text}>Created by: {yourName}</Text>
        <Text style={styles.text}>Current Date: {currentDate}</Text>
        <Button
          title="Go back to Home"
          onPress={() => navigation.goBack()}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },

});
