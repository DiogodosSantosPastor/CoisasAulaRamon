import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AppContext } from './AppContext'; 

export default function Carrinho() {
    const carrinhoItems  = useContext(AppContext); 

    const CarrinhoItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.itemText}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Itens no Carrinho</Text>
            {carrinhoItems.length === 0 ? (
                <Text>O carrinho está vazio</Text>
            ) : (
                <FlatList
                    data={carrinhoItems}
                    renderItem={CarrinhoItem}
                    keyExtractor={item => item.id}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 22,
        marginBottom: 20,
    },
    item: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
