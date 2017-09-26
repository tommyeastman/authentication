import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAUQbOpK-5P0H_-WqAEX9yJxFvc6fvS1fE',
        authDomain: 'auth-c9958.firebaseapp.com',
        databaseURL: 'https://auth-c9958.firebaseio.com',
        projectId: 'auth-c9958',
        storageBucket: 'auth-c9958.appspot.com',
        messagingSenderId: '15222367123'
      })
  }

  render() {
    return (
      <View>
        <Header headerText={'Heyheyhey'}/>
        <LoginForm />
      </View>
    );
  }
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})*/

export default App;
