import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Login() {
 const [matricula, setMatricula] = useState('');
 const [placa, setPlaca] = useState('');

  const navigation = useNavigation();

 function handleLogin(){
navigation.navigate('Home')
 }

 return (
   <View style={styles.container}>
     <Text style={styles.title}>Seja bem vindo(a)!</Text>

     <TextInput
        style={styles.input}
        value={matricula}
        onChangeText={(text) => setMatricula(text)}
        placeholder="Matricula"
     />

     <TextInput
        style={styles.input}
        value={placa}
        leftIcon ={{ type: 'font-awesome', name: 'id-badge'}}
        onChangeText={(text) => setPlaca(text)}
        placeholder="Placa"
     />

     <TouchableOpacity style={styles.button} onPress={handleLogin}>
       <Text style={styles.buttonText}>Acessar</Text>
     </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    marginBottom: 10,
    fontSize: 20,
  },
  input:{
    width: '90%',
    height: 45,
    backgroundColor: '#A7A7A7',
    borderRadius: 4,
    marginBottom: 14,
    padding: 8,
  },
  button:{
    width: '90%',
    height: 45,
    backgroundColor: '#051F40',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF'
  }
})