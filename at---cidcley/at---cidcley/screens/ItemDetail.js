import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function ItemDetail({ route }) {
  const { category } = route.params;
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);

  const categoryData = {
    'Café da Manhã': [
      { id: '1', name: 'Pão com manteiga', price: 'R$ 5,00', image: 'https://www.mashed.com/img/gallery/you-should-butter-your-bread-before-toasting-but-theres-a-catch/l-intro-1670340669.jpg' },
      { id: '2', name: 'Café preto', price: 'R$ 3,00', image: 'https://www.priva.care/wp-content/uploads/2017/10/is-cofee-healthy.jpg' },
      { id: '3', name: 'Torrada', price: 'R$ 4,50', image: 'https://biteswithbri.com/wp-content/uploads/2022/02/ToastOven-blog-6.jpg' },
      { id: '4', name: 'Waffles', price: 'R$ 6,00', image: 'https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2023/03/easy-freezer-waffles-7-scaled.jpg?fit=1200%2C800&ssl=1' },
    ],
    'Lanches': [
      { id: '5', name: 'Sanduíche natural', price: 'R$ 12,00', image: 'https://static.toiimg.com/thumb/83740315.cms?imgsize=361903&width=800&height=800' },
      { id: '6', name: 'Coxinha', price: 'R$ 8,00', image: 'https://veganoporquesim.com.br/wp-content/uploads/2023/03/Coxinha-de-Proteina-de-Soja.webp' },
      { id: '7', name: 'Misto-Quente', price: 'R$ 10,00', image: 'https://minhasreceitinhas.com.br/wp-content/uploads/2022/09/Misto-quente-de-padaria.png' },
      { id: '8', name: 'Pastel', price: 'R$ 6,50', image: 'https://www.receiteria.com.br/wp-content/uploads/pastel-de-feira-de-carne-capa.png' },
    ],
    'Itens para casa': [
      { id: '9', name: 'Sabão líquido', price: 'R$ 25,00', image: 'https://medlimp.com.br/wp-content/uploads/2019/04/Sab%C3%A3o-L%C3%ADquido-Omo-Multia%C3%A7%C3%A3o.jpg' },
      { id: '10', name: 'Prestobarba', price: 'R$ 10,00', image: 'https://superprix.vteximg.com.br/arquivos/ids/176477-600-600/Aparelho-de-Barbear-Gillette-Prestobarba-3-c-2.png?v=636470434820330000' },
      { id: '11', name: 'Esponja', price: 'R$ 2,50', image: 'https://t10917.vteximg.com.br/arquivos/ids/166161-1000-1000/ESPONJA-DE-ACO-PCT-C-08-UN-45GR-ASSOLAN_IMG1.jpg?v=638513138763130000' },
      { id: '12', name: 'Vassoura', price: 'R$ 35,00', image: 'https://cepel.vteximg.com.br/arquivos/ids/166710-1000-1000/bettanin-amarela.png?v=637013038988770000' },
    ],
    'Bebidas': [
      { id: '13', name: 'Refrigerante Guaraná', price: 'R$ 17,00', image: 'https://lojazmart.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/l/i/linha187_2.jpg' },
      { id: '14', name: 'Cerveja', price: 'R$ 8,00', image: 'https://a-static.mlcdn.com.br/470x352/cerveja-heineken-puro-malte-pilsen-12-unidades-garrafa-600ml/magazineluiza/225338900/ab547a5ec23885c9c78abb2fe752b369.jpg' },
      { id: '15', name: 'Água', price: 'R$ 2,50', image: 'https://applicativa-marketplace-prod.s3.amazonaws.com/produtos/agua-mineral-crystal-15l-3.jpg' },
      { id: '16', name: 'Suco natural', price: 'R$ 13,00', image: 'https://static.paodeacucar.com/img/uploads/1/324/666324.png' },
    ],
    'Sobremesas': [
      { id: '17', name: 'Pudim', price: 'R$ 12,90', image: 'https://s2-receitas.glbimg.com/K8OwZ9N2sE5DJltr-CALvxFBXNw=/0x0:633x391/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2015/09/22/10_19_02_409_Pudim.png' },
      { id: '18', name: 'Sorvete', price: 'R$ 29,99', image: 'https://mambodelivery.vtexassets.com/arquivos/ids/181865/sorvete-phish-food-ben-jerry-s-458ml.jpg?v=637883961154070000' },
      { id: '19', name: 'Picolé', price: 'R$ 12,00', image: 'https://tfdfn2.vtexassets.com/arquivos/ids/237099/picole-kibon-max-frutilly-morango.jpg?v=638289255712470000' },
      { id: '20', name: 'Brigadeiro', price: 'R$ 3,50', image: 'https://static.welban.com.br/public/welban/imagens/produtos/brigadeiro-pronto-para-enrolar-500g-doces-italiano-665730e1180cb.jpg' },
    ],
  };

  const items = categoryData[category] || [];

  const addItemToCart = async (item) => {
    const storedCart = await AsyncStorage.getItem('cartItems');
    const cartItems = storedCart ? JSON.parse(storedCart) : [];

    const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCart));
    } else {
      cartItems.push({ ...item, quantity: 1 });
      await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    setCartItems(cartItems);
  };

  useEffect(() => {
    const loadCartItems = async () => {
      const storedCart = await AsyncStorage.getItem('cartItems');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    };

    loadCartItems();
  }, []);

  const handleNavigateToCart = () => {
    navigation.navigate('CartScreen'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{category}</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.button} onPress={() => addItemToCart(item)}>
              <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ff2c2c',
  },
  itemCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  button: {
    width: '90%',
    backgroundColor: '#ff2c2c',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: 'green',
  },
});
