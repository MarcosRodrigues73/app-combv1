import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


export default function Home() {
const navigation = useNavigation();

 

  return (
   <View style={styles.container}>

     <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Abastecimento")}>
       <Text style={styles.buttonText}>Abastecimento</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Manut")}>
       <Text style={styles.buttonText}>Manutenção</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Lub")}>
       <Text style={styles.buttonText}>Lubrificação</Text>
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
    backgroundColor: '#052440',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF'
  }
})