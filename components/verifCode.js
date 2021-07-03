import React from "react";
import { StyleSheet, View, Text } from "react-native";

const VerifCode = ({ placeholder }) => (
    <View style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
        <View style={styles.box}>
            <Text style={styles.code}>3</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.code}>7</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.code}>7</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.code}>2</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    box: {
        width: 60,
        height: 60,
        backgroundColor: '#F8F7FB',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    code: {
        color: '#364A63',
        fontSize: 28,
        fontWeight: 'bold',
    }
});

export default VerifCode;
