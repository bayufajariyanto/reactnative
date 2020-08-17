/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import image from '../../assets/icon/Logo.png';

const Cart = (props) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.iconWrapper}>
                <Image source={image} style={styles.icon} />
                <Text style={styles.notif}>{props.quantity}</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja Anda</Text>
        </View>
    );
};

export default Cart;
const styles = StyleSheet.create({
    wrapper: { padding: 20, alignItems: 'center' },
    iconWrapper: {
        borderWidth: 1,
        borderColor: '#439801',
        width: 93,
        height: 93,
        borderRadius: 93 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 40,
    },
    icon: { width: 50, height: 50 },
    text: { fontSize: 12, color: '#777', fontWeight: '700', marginTop: 10 },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#6fcf97',
        padding: 4,
        borderRadius: 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0,
    },
});
