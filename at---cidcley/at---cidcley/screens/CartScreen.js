import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CartScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([]);

  const loadCartItems = async () => {
    const storedCart = await AsyncStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  };

  const removeItemFromCart = async (itemId) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleConfirmPurchase = () => {
    navigation.navigate('CheckoutScreen', { cartItems, total });
  };

  const total = cartItems
    .reduce(
      (sum, item) =>
        sum + parseFloat(item.price.replace('R$ ', '').replace(',', '.')) * item.quantity,
      0
    )
    .toFixed(2);

  useEffect(() => {
    loadCartItems();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {cartItems.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Seu carrinho está vazio!</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Text style={styles.itemQuantity}>Quantidade: {item.quantity}</Text>
              <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
                <Text style={styles.removeText}>Remover unidade</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R$ {total}</Text>
        <TouchableOpacity
          style={[styles.checkoutButton, cartItems.length === 0 && styles.disabledButton]}
          disabled={cartItems.length === 0}
          onPress={handleConfirmPurchase}
        >
          <Text style={styles.checkoutButtonText}>Confirmar Compra</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
    textAlign: 'center',
  },
  cartItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: 'green',
  },
  itemQuantity: {
    fontSize: 14,
    marginTop: 5,
  },
  removeText: {
    fontSize: 14,
    color: '#ff2c2c',
    marginTop: 5,
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
});
