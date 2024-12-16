import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';


export default function RestaurantDetailsScreen({ route, navigation }) {
  const { restaurant } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.address}>{restaurant.address}</Text>

      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}> Cardápio</Text>
        <View style={styles.menuItem}>
          <Text style={styles.menuItemName}>{restaurant.menuExample.name}</Text>
          <Text style={styles.menuItemPrice}>R$ {restaurant.menuExample.price}</Text>
        </View>
      </View>

        <TouchableOpacity
          title="Voltar"
          style={styles.buttonContainer}
          onPress={() => navigation.goBack()}
        >Voltar
        </TouchableOpacity>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  menuContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  menuItemPrice: {
    fontSize: 16,
    color: '#E63946',
  },
  buttonContainer: {
   backgroundColor: 'red',
   color:"white",
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
});

