import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SecTitle = ({value}) => (
  <View style={{width: '100%', paddingVertical: 16}}>
      <Text style={styles.title}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
      color: '#364A63',
      fontSize: 16,
      fontWeight: 'bold',
  }
});

export default SecTitle;
