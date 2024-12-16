import { Text, View, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://static.poder360.com.br/2024/03/Gorila.fundo-amarelo-848x477.jpeg" }}
        style={styles.foto}
      />
      <Text style={styles.nome}>Victor Hugo Moraes de Brito</Text>
      <Text style={styles.subtitle}>victor.hbrito@al.infnet.edu.br</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: '#ff2c2c',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#ff2c2c',
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
