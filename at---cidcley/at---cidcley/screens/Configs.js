import { useTheme } from '../navigation/ThemeContext';
import { SafeAreaView, View, Text, StyleSheet, Switch } from 'react-native';
import NavBar from "./NavBar"

const Configs = () => {
  const { theme, toggleTheme } = useTheme();

  const isLightTheme = theme === 'light';
  const containerStyle = {
    ...styles.container,
    backgroundColor: isLightTheme ? '#ffffff' : 'black',
  };

  const textStyle = {
    color: isLightTheme ? '#000000' : '#ffffff',
  };

  return (
    <SafeAreaView style={containerStyle}>
    <NavBar/>
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: '#767577', true: 'lightblue' }}
          thumbColor={isLightTheme ? 'red' : 'red'} 
          onValueChange={toggleTheme}
          value={!isLightTheme}
        />
        <Text style={[styles.switchLabel, textStyle]}>Trocar Tema</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
  },
  switchContainer: {
    marginTop: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Configs;
