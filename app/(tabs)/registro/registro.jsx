import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2', 
  },
  input: {
    borderColor: '#ccc',
    width: '80%',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
  pressableContainer: {
    width: '80%',
    marginTop: 20,
  },
  pressable: {
    backgroundColor: '#4CAF50', 
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  pressableText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUp = () => {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')

  console.log(email)
  console.log(nome)
  console.log(senha)

  const registrarUsuario = async function() {
    if (!nome || !email || !senha) {
      console.log('os parametros nome, email, senha devem ser fornecidos')
      return
    }
    const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: nome, email: email, password: senha })
    })
    if (!resposta) {
      console.log('erro')
    } else if (resposta.status == 200) {
      console.log('usuário criado com sucesso')
    } else {
      console.log('ocorreu um erro')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Registro Big Bom</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder='Insira o seu email aqui'
        keyboardType='email-address'
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
      <View style={styles.pressableContainer}>
        <Pressable style={styles.pressable} onPress={registrarUsuario}>
          <Text style={styles.pressableText}>Cadastrar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
