import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Search = () => (
  <TextInput style={styles.search} placeholder="Search for a supplier" />
);

const styles = StyleSheet.create({
  search: {
    borderRadius: 13,
    paddingVertical: 16,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    paddingHorizontal: 25,
    color: '#364A63',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Search;
