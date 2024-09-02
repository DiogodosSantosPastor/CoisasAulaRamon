import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderColor: '#ccc',
        width: '80%',
        margin: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        backgroundColor: '#e5e9ea',
      },
    title: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    PressableRegistro: {
        backgroundColor: '#e5e9ea',
        textAlign: 'center',
        width: '7%',
        marginHorizontal: 10,
        padding: 10,
    },
})

export default SignUp = () => {
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    console.log(email)
    console.log(nome)
    console.log(senha)

    const registrarUsuario = async function(){
        if(!nome || !email || !senha){
            console.log('os parametros nome, email, senha devem ser fornecidos')
            return
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name:nome, email:email, password:senha})
        })
        if(!resposta){
            console.log('erro')
        } else if(resposta.status == 200){
            console.log('usuário criado com sucesso')
        }else{
            console.log('ocorreu um erro')
        }
    }

    return(
        <SafeAreaView>
            <View>
                <Text style={styles.title}>Registro Big Bom </Text>
            </View>
            <View>
                <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder='Insira o seu email aqui'
                />
                <TextInput
                style={styles.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
                placeholder='Insira o seu nome aqui'
                />
                <TextInput
                style={styles.input}
                onChangeText={(text) => setSenha(text)}
                value={senha}
                placeholder='Insira a sua senha aqui'
                secureTextEntry={true}
                />
            </View>
            <View style={styles.PressableRegistro}>
                <Pressable onPress={registrarUsuario}>
                    <Text>Cadastrar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}