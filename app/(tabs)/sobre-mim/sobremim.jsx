import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native'
import { Link } from 'expo-router';


export default function sobreMim(){
    const KaiserBingus = 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-CEBE623F589AC2093716270F13F29C89-Png/150/150/AvatarHeadshot/Webp/noFilter';
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Sobre Mim</Text>
            </View>
            <Image
                style={styles.logo}
                source={{
                uri: KaiserBingus
                }}
                /> 
                <Text style={styles.title}>Diogo </Text>
                <Link href="./Jogos/jogos" style={styles.link}>Jogos</Link>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    header: {
      backgroundColor: '#3579E6',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      alignItems: 'center',
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
      textAlign: 'flex-start',
      padding: 10,
    },
  });