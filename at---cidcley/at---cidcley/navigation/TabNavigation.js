import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeScreen';
import Perfil from "../screens/ProfileScreen"
import Configs from "../screens/Configs"
import Icon from 'react-native-vector-icons/Ionicons';
import Restaurant from "../screens/Restaurant" 

const TabNav = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <TabNav.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'restaurant-outline';
              break;
            case 'Configs':
              iconName = 'settings-outline';
              break;
            case 'Perfil':
              iconName = 'people';
              break;
               case 'Restaurant':
              iconName = 'map-outline';
              break;
             default:
               iconName = 'ellipse';
           }

           return <Icon name={iconName} size={size} color={color} />;
         },
         tabBarActiveTintColor: '#ff2c2c',
         tabBarInactiveTintColor: 'gray',
       })}
    >
      <TabNav.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} 
      />
      <TabNav.Screen 
        name="Restaurant" 
        component={Restaurant} 
        options={{ title: 'Restaurante', headerShown: false }} 
      />
       <TabNav.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{ title: 'Conta' }} 
      />
      <TabNav.Screen 
        name="Configs" 
        component={Configs} 
        options={{ headerShown: false  }} 
      />
      </TabNav.Navigator>
  );
}
