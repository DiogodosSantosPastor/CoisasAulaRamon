import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button } from 'react-native';
import { Link } from 'expo-router';
import { AppContext } from './AppContext'; 

export default function Menu() {
    const addItemToCarrinho  = useContext(AppContext); 

    const ComidaData = [
        { id: '1', title: 'Hambúrguer', image: 'https://example.com/hamburguer.jpg', itemText: 'Delicioso hambúrguer artesanal.' },
        { id: '2', title: 'Pizza', image: 'https://example.com/pizza.jpg', itemText: 'Pizza com borda recheada.' },
    ];

    const MenuItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.itemText}>{item.itemText}</Text>
            <Button title="Adicionar ao Carrinho" onPress={() => addItemToCarrinho(item)} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={ComidaData}
                renderItem={MenuItem}
                keyExtractor={item => item.id}
            />
            <Link href="./carrinho" style={styles.link}>
                <Text>Ir para o Carrinho</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemText: {
        marginVertical: 8,
    },
    link: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
    },
});
