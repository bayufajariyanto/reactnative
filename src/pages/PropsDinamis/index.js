/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import gambar from '../../assets/img/Detail.jpg';
import icon from '../../assets/icon/Logo.png';

const Story = props => { // bisa ditulis const Story = (props) => {
    return (
        <View style={{ alignItems: 'center', marginRight: 20 }}>
            <Image
                source={props.gambar}
                style={{ width: 70, height: 70, borderRadius: 70 / 2 }} />
            <Text style={{ maxWidth: 70 }}>{props.judul}</Text>
        </View>
    );
};

const PropsDinamis = () => {
    return (
        <View>
            <Text>Materi Component Dinamis dengan Props</Text>
            <ScrollView horizontal>
                <View style={{ flexDirection: 'row' }}>
                    <Story judul="YouTube Channel" gambar={gambar} />
                    <Story judul="Kelas" gambar={icon} />
                    <Story judul="YouTube Channel" gambar={gambar} />
                    <Story judul="Kelas" gambar={icon} />
                    <Story judul="YouTube Channel" gambar={gambar} />
                    <Story judul="Kelas" gambar={icon} />
                    <Story judul="YouTube Channel" gambar={gambar} />
                    <Story judul="Kelas" gambar={icon} />
                </View>
            </ScrollView>
        </View>
    );
};

export default PropsDinamis;

const styles = StyleSheet.create({

});