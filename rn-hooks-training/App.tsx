import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default function App() {

  const [usuarios, setUsuarios] = useState([]);
  const [count, setCount] = useState(0);

  function marcarUsuario(id) {

    const novosUsuarios = usuarios.map(user => {
      return user.id === id ? { ... user, marcado: !user.marcado } : user
    })

    setUsuarios(novosUsuarios);

  }

  useEffect( () => {

    const marcados = usuarios.filter( user => user.marcado) ;
    setCount(marcados.length);

  },[usuarios])

  useEffect( () => {    
    
    const data = [
      {id: 1, nome: 'Joao'},
      {id: 2, nome: 'Maria'},
      {id: 3, nome: 'Pedro'},
      {id: 4, nome: 'Jorge'},
      {id: 5, nome: 'Jose'},
      {id: 6, nome: 'Carlos'},
      {id: 7, nome: 'Augusto'},
      {id: 8, nome: 'Silva'},
      {id: 9, nome: 'Lucas'},
      {id: 10, nome: 'Mariana'},
      {id: 11, nome: 'Juliana'},
      {id: 12, nome: 'Guilherme'},
      {id: 13, nome: 'Eduardo'},
      {id: 14, nome: 'Denise'},
      {id: 15, nome: 'Rodrigo'},
      {id: 16, nome: 'Mirian'},
    ]

    setUsuarios(data);

  },[])

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Total de usuarios marcados: {count}
      </Text>

      <FlatList
        data={usuarios}
        renderItem={ ({item}) => (
          <View>
            <Text style={styles.texto}>{item.nome}
            {item.marcado && <Text style={{color:"yellow"}}> ☆☆☆ </Text>}
            </Text>
          
            <View style={{backgroundColor: '#E0FFFF'}}>
              <View style={{flex:1 , marginRight:10}}>
                <Button
                  title="Marcar"
                  onPress={ () => marcarUsuario(item.id) }  
                />
              </View>
            </View>
            
          </View>
        )}
        keyExtractor={ (item, index) => index.toString() }
      />

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#2c3e50"
  },
  texto: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 10,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: 30,
  }
})
