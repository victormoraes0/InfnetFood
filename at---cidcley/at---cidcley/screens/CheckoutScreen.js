import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';

export default function CheckoutScreen({ route }) {
  const { cartItems, total } = route.params;

  const [selectedAddress, setSelectedAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isAddressModalVisible, setAddressModalVisible] = useState(false);
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);

  const handlePayment = () => {
    Toast.show({
      type: 'success',
      text1: 'Pagamento realizado',
      text2: 'Sua compra foi finalizada com sucesso!',
      position: 'bottom',
    });
  };

  const addressOptions = ['Rua Rio Branco, Número 89', 'Largo da Carioca, Número 12'];
  const paymentOptions = ['Cartão de Crédito', 'Dinheiro', 'Pix'];

  const renderOption = (option, onSelect) => (
    <TouchableOpacity
      style={styles.modalOption}
      onPress={() => {
        onSelect(option);
      }}
    >
      <Text style={styles.modalOptionText}>{option}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Confira seu pedido</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQuantity}>Quantidade: {item.quantity}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
      />

      <Text style={styles.total}>Total: R$ {total}</Text>

      <Text style={styles.label}>Selecione o endereço:</Text>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setAddressModalVisible(true)}
      >
        <Text>{selectedAddress}</Text>
      </TouchableOpacity>

      <Modal
        visible={isAddressModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {addressOptions.map((option) =>
              renderOption(option, (value) => {
                setSelectedAddress(value);
                setAddressModalVisible(false);
              })
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setAddressModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.label}>Selecione a forma de pagamento:</Text>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setPaymentModalVisible(true)}
      >
        <Text>{paymentMethod}</Text>
      </TouchableOpacity>

      <Modal
        visible={isPaymentModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {paymentOptions.map((option) =>
              renderOption(option, (value) => {
                setPaymentMethod(value);
                setPaymentModalVisible(false);
              })
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setPaymentModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Realizar Pagamento</Text>
      </TouchableOpacity>

      <Toast />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ff2c2c',
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 16,
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  total: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  selector: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  paymentButton: {
    backgroundColor: '#ff2c2c',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '80%',
  },
  modalOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalOptionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#ff2c2c',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
