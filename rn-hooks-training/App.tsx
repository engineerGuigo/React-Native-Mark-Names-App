import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [contar, setContar] = useState(0);

  function increment() {
    setContar(contar + 1);
  }

    return (
      <View style={styles.container}>

        <Button
          onPress={increment}
          title="Contar"  
        />

        <Text>
          style={{color: '#FFF', fontSize:16, marginTop: 10}}
        >
          {contar}
        </Text>

      </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
})
