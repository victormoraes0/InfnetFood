import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>InfnetFood</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={styles.iconContainer}>
        <Icon name="cart-outline" size={30} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 110,
    width: '100%',
    backgroundColor: '#ff2c2c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NavBar;
