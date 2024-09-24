import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function SobreMim() {
    const kaiserbingus = 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-CEBE623F589AC2093716270F13F29C89-Png/150/150/AvatarHeadshot/Webp/noFilter';
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Sobre Mim</Text>
            </View>
            <Image
                style={styles.logo}
                source={{ uri: kaiserbingus }}
            />
            <Text style={styles.title}>Diogo</Text>
            <View style={styles.linksContainer}>
                <Link href="./Filmes/filmes" style={styles.link}>Filmes</Link>
                <Link href="./Viagens/viagens" style={styles.link}>Viagens</Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        padding: 16,
    },
    header: {
        backgroundColor: '#3579E6',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 75, 
        borderWidth: 2,
        borderColor: '#3579E6',
        backgroundColor: 'transparent',
        marginBottom: 20,
        marginTop: 15,
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    link: {
        fontSize: 18,
        color: '#FFFFFF',
        marginVertical: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: '#3579E6',
        textAlign: 'center',
        width: '45%', 
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
});
