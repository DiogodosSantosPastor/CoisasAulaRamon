import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker'

export default Seletor = () => {
    const [pokemon, setPokemon ] = useState('');
    const [lista_pokemons, setListaPokemons] = useState([])

    

    useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then((response => response.json()))
            .then(dados => setListaPokemons(dados.results))
    },[])
    console.log('fora')

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Selecione um Pokémon</Text>
        <Picker 
        selectedValue={pokemon}
        onValueChange={(itemValue) => setPokemon(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
        >
            <Picker.Item label='selecione um Pokémon'/>
            {lista_pokemons.map((item, index) => (
                <Picker.Item key={index} label={item.nome} value={item.value}/>
            ))}
            
        </Picker>
        {pokemon? <Text>Você selecionou {pokemon}</Text>:''}
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    title: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    picker: {
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        padding: 10,
    },
    pickerItem: {
        height: 50,
        fontSize: 16,
    }
});

