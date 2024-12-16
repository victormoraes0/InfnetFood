import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigation';
import Perfil from "../screens/ProfileScreen";
import Login from "../screens/LoginScreen";
import RestaurantDetail from "../screens/RestaurantDetail";
import { ThemeProvider } from "./ThemeContext";
import ItemDetail from "../screens/ItemDetail"
import CartScreen from "../screens/CartScreen"
import Checkout from "../screens/CheckoutScreen"
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <ThemeProvider>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CheckoutScreen"
          component={Checkout}
          options={{ title: 'Confirmar Pedido', headerShown: true }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ title: 'Carrinho', headerShown: true }}
        />
        <Stack.Screen
          name="RestaurantDetail"
          component={RestaurantDetail}
          options={{ title: 'Cardápio', headerShown: true }}
        />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetail}
          options={{ title: 'Produtos', headerShown: true }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
