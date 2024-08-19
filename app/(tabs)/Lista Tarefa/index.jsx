import React from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';


const Item = ({ title, feito }) => (
  <View style={[styles.item, feito ? styles.doneItem : styles.notDoneItem]}>
      <Text style={feito ? styles.doneTitle : styles.title}>{title}</Text>
  </View>
);

export default function listatarefa(){
      const TAREFAS = [
      {id: '1', title: 'A', feito: false},
      {id: '2', title: 'B', feito: false},
      {id: '3', title: 'C', feito: false},
      {id: '4', title: 'D', feito: false},
      {id: '5', title: 'E', feito: false}       
    ];

return(
        <View style={styles.container}>
          <Text style={styles.Text}>Lista de tarefas</Text>
            <FlatList
          data={TAREFAS}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
      />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  Text:{
      fontSize: 49,
      fontWeight: 'bold',
      marginBottom: 40,
  },
  item: {
      backgroundColor: '#F91514',
      padding: 14,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 18,
      
    },   
});