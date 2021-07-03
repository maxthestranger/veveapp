import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ placeholder, maxLength, keyboardType }) => (
    <TextInput keyboardType={keyboardType} style={styles.input} placeholder={placeholder} maxLength={maxLength} />
);

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#DBDFEA',
        borderStyle: 'solid',
        paddingHorizontal: 16,
        paddingVertical: 14,
        color: '#364A63',
        fontSize: 14,
        borderRadius: 4,
    }
});

export default Input;
