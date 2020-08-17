/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BasicJavascript = () => {
    // 1 jeruk + 1 jeruk = 2 jeruk;
    // 1 j + 1 j = 2 j;

    // Tipe Data

    // primitive
    const nama = 'Bayu Fajariyanto'; // String
    let usia = 21; // int
    const apakahLakiLaki = true; // boolean

    // complex
    const hewanPeliharaan = {
        nama: 'Miaw',
        jenis: 'Kucing',
        usia: 2,
        apakahHewanLokal: true,
        warna: 'kuning',
        orangTua: {
            jantan: 'Kaisar',
            betina: 'Kuin',
        },
    }; // Object

    const sapaOrang = (name, age) => {
        return console.log(`Halo ${name} usia anda ${age} tahun`); // Halo Bayu usia anda 21 tahun
    }; // Function

    sapaOrang('Bayu', 21);

    const namaOrang = ['Bayu', 'Firly', 'Zuhal', 'Fajariyanto', 'Rizki', 'Rahman']; // object - array

    typeof namaOrang; // object

    // jika hujan turun, maka kalau kerja bawa payung.
    // jika perut lapar, maka harus makan.

    // if (hewanPeliharaan.nama === 'Miaw') {
    //     console.log('Halo Miaw');
    // } else {
    //     console.log('Hewan siapa ini?');
    // }

    const sapaHewan = (objectHewan) => {
        // let hasilSapa = '';
        // if (objectHewan.nama === 'Miaw') {
        //     hasilSapa = 'Halo Miaw, apa kabar?';
        // } else {
        //     hasilSapa = 'Ini hewan siapa?';
        // }
        // return hasilSapa;
        return objectHewan.nama === 'Miaw' ? 'Halo Miaw, apa kabar?' : 'Ini hewan siapa?';
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi Basic JavaScript di React Native</Text>

            <Text>Name: {nama}</Text>
            <Text>Usia: {usia} tahun</Text>

            <Text>{sapaHewan(hewanPeliharaan)}</Text>
            <Text>{namaOrang[0]}</Text>
            <Text>{namaOrang[1]}</Text>
            <Text>{namaOrang[2]}</Text>
            <Text>==============</Text>
            {namaOrang.map(orang => (
                <Text>{orang}</Text>
            ))}
        </View>
    );
};

export default BasicJavascript;

const styles = StyleSheet.create({
    container: { padding: 20 },
    textTitle: { textAlign: 'center' },

});
