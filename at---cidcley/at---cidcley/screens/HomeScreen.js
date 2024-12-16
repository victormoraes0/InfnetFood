import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import NavBar from "./NavBar";

export default function HomeScreen({ navigation }) {
  const handlePress = (category) => {
    navigation.navigate('ItemDetail', { category });
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <TouchableOpacity style={styles.categoryButton} onPress={() => handlePress('Café da Manhã')}>
        <Text style={styles.categoryText}>Café da Manhã</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryButton} onPress={() => handlePress('Lanches')}>
        <Text style={styles.categoryText}>Lanches</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryButton} onPress={() => handlePress('Itens para casa')}>
        <Text style={styles.categoryText}>Itens para casa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryButton} onPress={() => handlePress('Bebidas')}>
        <Text style={styles.categoryText}>Bebidas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryButton} onPress={() => handlePress('Sobremesas')}>
        <Text style={styles.categoryText}>Sobremesas</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  categoryButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  categoryText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
