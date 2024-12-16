import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import NavBar from "./NavBar"

const RESTAURANTS = [
  {
    id: '1',
    name: 'Restaurante Singular',
    address: 'Av. Central, 123 - Centro, RJ',
    image: 'https://comidabrasileira.com.br/wp-content/uploads/2023/04/Restaurante-Cantinho-do-para-1024x614.jpg',
    menuExample: { name: 'Lombo de Porco', price: '71.90' },
  },
  {
    id: '2',
    name: 'Restaurante Metro',
    address: 'Rua das Laranjeiras, 456 - Centro, RJ',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/77/be/62/restaurante-masserini.jpg?w=600&h=-1&s=1',
    menuExample: { name: ' Peixe-Espada', price: '289.90' },
  },
  {
    id: '3',
    name: 'Restaurante Carioca 36',
    address: 'Praça XV, 202 - Centro, RJ',
    image: 'https://22652050.fs1.hubspotusercontent-na1.net/hubfs/22652050/98b5cb4d-ea36-43fd-b3ca-21ae04c7c770.jpeg',
    menuExample: { name: 'Feijoada Completa', price: '99.90' },
  },
  {
    id: '4',
    name: 'Restaurante Pilograma',
    address: 'Rua do Leme, 101 - Centro, RJ',
    image: 'https://s2-oglobo.glbimg.com/Wyhr3m2d6YjFMCtivvpmhaVMNRc=/0x0:5712x4284/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/1/q/HXeIs1QE2S4EruC6jE8w/na-brasa.jpeg',
    menuExample: { name: 'Bacalhau à Brás', price: '109.90' },
  },
  {
    id: '5',
    name: 'O Sabor Restaurante',
    address: 'Av. Rio Branco, 449  - Centro, RJ',
    image: 'https://www.viajali.com.br/wp-content/uploads/2023/06/bares-barra-da-tijuca-x1.png',
    menuExample: { name: 'Brocolis Foucout', price: '99.90' },
  },
  {
    id: '6',
    name: 'Massapê Restaurante',
    address: 'Rua do Catete, 303 - Centro, RJ',
    image: 'https://dwsemanadedesign.com.br/wp-content/uploads/2022/12/pingyangsp_1681758139_3083133193474159437_56007568342.jpg',
    menuExample: { name: 'Carne de Girafa', price: '189.90' },
  },
  {
    id: '7',
    name: 'Miguelitos Restaurante',
    address: 'Av. Vieira Souto, 404 - Centro, RJ',
    image: 'https://mrconsultoriaenegocios.com.br/wp-content/uploads/2024/05/664f799cc3434-1066x648.webp',
    menuExample: { name: 'Piranha Assada', price: '69.90' },
  },
  {
    id: '8',
    name: 'Bistrô Ouvidor',
    address: 'Rua de Botafogo, 505 - Centro, RJ',
    image: 'https://dwsemanadedesign.com.br/wp-content/uploads/2022/12/metzirestaurant_1674765438_3024474166871724592_23633548999.jpg',
    menuExample: { name: 'Arroz com Feijão', price: '80.90' },
  },
  {
    id: '9',
    name: 'Galettos Restaurante - Grill',
    address: 'Av. Atlântica, 606 - Centro, RJ',
    image: 'https://www.viajali.com.br/wp-content/uploads/2023/08/restaurantes-barra-da-tijuca-17.png',
    menuExample: { name: 'Camarão à Parmegiana', price: '89.90' },
  },
  {
    id: '10',
    name: 'Galeto da Tuca',
    address: 'Av. Rio Branco, 156  - Centro, RJ',
    image: 'https://allos.co/wp-content/uploads/2022/12/Galeria_002-2.jpg',
    menuExample: { name: 'Arroz de Sucuri', price: '99.90' },
  },
];
export default function OrdersScreen() {
  const navigation = useNavigation();

  const renderRestaurantItem = ({ item }) => (
    <TouchableOpacity
      style={styles.restaurantItem}
      onPress={() =>
        navigation.navigate('RestaurantDetail', { restaurant: item })
      }
    >
    
      <Image source={{ uri: item.image }} style={styles.restaurantImage} />
      <View style={styles.textContainer}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantAddress}>{item.address}</Text>
        <Text style={styles.menuExample}>
          {item.menuExample.name} - R$ {item.menuExample.price}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
    <NavBar/>
    <Text style={styles.title1}>Restaurantes Próximos</Text>  
      <Image        
        source={require('../assets/maps.png')}
        style={styles.cityImage}
      />
      <Text style={styles.title}>Meus Pedidos</Text>
      <FlatList
        data={RESTAURANTS}
        keyExtractor={(item) => item.id}
        renderItem={renderRestaurantItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title1: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E63946',
    marginTop: 105,
    marginBottom: 30,
  },
  cityImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 30,
    right:5,
    left:5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E63946',
    marginBottom: 15,
  },
  listContainer: {
    paddingBottom: 20,
  },
  restaurantItem: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  restaurantImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  restaurantAddress: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  menuExample: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#E63946',
  },
});
