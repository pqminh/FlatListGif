/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import FastImage from 'react-native-fast-image';

const {width,height} = Dimensions.get('screen');

const imageWidth = width;
const imageHeight = width / 3;

const data = [];
for(let i = 1;i <= 100; i++){
  data.push({
    id: i,
    name: `gif ${i}`,
    url: 'https://file-examples-com.github.io/uploads/2017/10/file_example_GIF_1MB.gif'
  })
}

class App extends React.Component {
  renderItem = ({item}) => {
    return (
      <View key={item.id} style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
        <Text style={{paddingVertical: 10}}>{item.name}</Text>
        <FastImage
          source={{uri: item.url}}
          style={{width: imageWidth, height: imageHeight }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    )
  }
  render(){
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={item => String(item.id)}
            removeClippedSubviews
          />
        </SafeAreaView>
      </>
    )
  }
}


export default App;
