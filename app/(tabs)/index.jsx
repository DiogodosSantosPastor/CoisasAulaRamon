import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';
export default function Lista() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Menu de Atividades</Text>
      </View>
      <Text style={styles.title}>Selecione uma Atividade</Text>
      <Link href="./Banco/banco" style={styles.link}>Banco</Link>
      <Link href="./calculadora/calculadora" style={styles.link}>Calculadora</Link>
      <Link href="./Lista Tarefa/listatarefa" style={styles.link}>Lista de tarefas</Link>
      <Link href="./registro/registro" style={styles.link}>Registro</Link>
      <Link href="./Seletor/seletor" style={styles.link}>Seletor</Link>
      <Link href="./splashscreen/splashscreen" style={styles.link}>Splashscreen</Link>
      <Link href="./sobre-mim/sobremim" style={styles.link}>Sobre Mim</Link>
      <Link href="./AiFome/menu" style={styles.link}>IFome</Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'flex-start',
    padding: 10,
  },
  link: {
    fontSize: 18,
    color: '#FFFFFF',
    marginVertical: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#3579E6',
    textAlign: 'center',
    width: '35%', 
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});