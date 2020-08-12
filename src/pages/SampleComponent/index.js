/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import gambar from '../../assets/img/Detail.jpg';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 100, backgroundColor: '#0abde3'}} />
      <Text>Bayu</Text>
      <Text>Fajariyanto</Text>
      <Fajar />
      <Text>Bayu Design</Text>
      <Photo />
      <TextInput style={{borderWidth: 0.4}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Fajar = () => {
  return <Text>Ini Adalah yang baru</Text>;
};

const Photo = () => {
  return (
    <Image
      // source={{ uri: 'https://url' }}
      source={gambar}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Class Component</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Text>Ini Class Component Profile</Text>
        <Text>Ini Class Component Profile 1</Text>
      </View>
    );
  }
}

export default SampleComponent;
