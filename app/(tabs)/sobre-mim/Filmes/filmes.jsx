import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const viagensData = [
    { id: '1', title: 'Berserk: The Golden Age Arc', image: 'https://cdn.flowpodcast.com.br/criador/2mXVl9k4sEbrBKrvwDtL/assets/images/BzIh3L6d-e.jpeg', itemText: 'Uma adaptação fiel do arco da Idade de Ouro do mangá.' },
    { id: '2', title: 'Napoleão (2023)', image: 'https://www.leiaeassista.com.br/wp-content/uploads/2023/12/Napoleao-open-graph.jpg', itemText: 'Um drama histórico que explora a vida de Napoleão Bonaparte.' }
];

const ViagemItem = ({ item }) => (
    <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.itemText}>{item.itemText}</Text>
    </View>
);

export default function Viagens() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Filmes</Text>
            </View>
            <FlatList
                data={viagensData}
                renderItem={ViagemItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff3f7',
    },
    header: {
        backgroundColor: '#3579E6',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center',
        width: '100%',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    headerText: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    item: {
        padding: 15,
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
        borderColor: '#ddd',
        borderWidth: 1,
        backgroundColor: '#ffffff',
    },
    itemText: {
        paddingTop: 8,
        color: '#000000',
        fontSize: 14,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        padding: 8,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});