import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Abastecimento() {
 return (
   <View style={styles.container}>
     <Text>Pagina Abastecimento</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})