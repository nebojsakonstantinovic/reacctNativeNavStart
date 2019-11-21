import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
  const name = 'Paja';
  const greeting = (
    <Text style={styles.subHeaderStyle}>Idemo patke {name}</Text>
  );

  return (
    <View>
      <Text style={styles.textStyle}>Pataka!</Text>
      {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
