import React from 'react';
import { StyleSheet, View, Image } from 'react-native';



export default function App(){
    const logoToddyn = 'https://pbs.twimg.com/profile_images/1516079909214502913/LDvbq6L__400x400.jpg';

    return(
        <View style={styles.container}>
            <Image
            style={styles.logo}
            source={{
                uri: logoToddyn
            }}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DA1212',
    },
    logo: {
        width: 250,
        height: 250,
    },
});