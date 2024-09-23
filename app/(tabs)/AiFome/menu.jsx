import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Link } from 'expo-router';

export default function Menu(){
    const ComidaData = [
        { id: '1', title: 'Belo Horizonte', image: 'https://www.quintoandar.com.br/guias/wp-content/uploads/2023/01/Morar-em-Belo-Horizonte-850x561.jpg', itemText: 'A capital de Minas Gerais é conhecida por sua rica cultura e deliciosa comida.' },
        { id: '2', title: 'Ouro Preto', image: 'https://www.infoescola.com/wp-content/uploads/2009/01/ouro-preto_560936134-1000x667.jpg', itemText: 'Cidade histórica com belos edifícios coloniais e rica herança cultural.' }
    ];

    const MenuItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.itemText}>{item.itemText}</Text>
        </View>
    );
    

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}>Ifome</Text>
            </View>
            <FlatList
                data={ComidaData}
                renderItem={MenuItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({

})