import { View} from 'react-native';
import { Link } from 'expo-router';

export default function Lista() {
    return (
        <View>
        <Link href="./Banco/banco">Banco</Link>
        <Link href="./calculadora/calculadora">Calculadora</Link>
        <Link href="./Lista Tarefa/listatarefa">Lista de tarefas</Link>
        <Link href="./registro/registro">Registro</Link>
        <Link href="./Seletor/seletor">Seletor</Link>
        <Link href="./splashscreen/splashscreen">Splashscreen</Link>
      </View>
    );
  }