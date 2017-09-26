import React from 'react';
import { Text } from 'react-native';
import { Header } from './components/common';

export default class App extends React.Component {
  render() {
    return (
      <Header headerText={"Heyheyhey"}>
        <Text>some text</Text>
      </Header>
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
