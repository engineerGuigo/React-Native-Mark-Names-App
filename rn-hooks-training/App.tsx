import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state=({
      contar: 0
    })
  }

  increment = () => {
    this.setState({
      contar: this.state.contar +1
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Button
          onPress={this.increment}
          title="Contar"  
        />

        <Text>
          style={{color: '#FFF', fontSize:16, marginTop: 10}}
        >
          {this.state.contar}
        </Text>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
})
