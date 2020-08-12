/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import gambar from '../../assets/img/Detail.jpg';

class FlexBox extends Component {
  constructor(props){
    super(props);
    console.log('==> constructor');
  }

  componentDidMount(){
    console.log('==> componentDidMount');
  }

  componentDidUpdate(){
    console.log('==> componentDidUpdate');
  }

  render() {
    console.log('render');
    return (
      <View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <View style={{ backgroundColor: '#ee5253', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#f3ca57', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#1dd1a1', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#5f27cd', width: 50, height: 50 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <Image
            source={gambar}
            style={{ width: 100, height: 100, borderRadius: 50, marginRight: 14 }}
          />
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Bayu Fajariyanto</Text>
            <Text>100 ribu subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
