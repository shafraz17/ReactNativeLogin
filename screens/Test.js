import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, View, Text, Thumbnail} from 'native-base';
import { Image, ImageBackground } from 'react-native';
export default class Test extends Component {
  render() {
    return (
      <Container>
          
            <View>
                <View style={{width:50, height:50,backgroundColor:'blue',zIndex:3}}></View>
                <View style={{width:50, height:50,backgroundColor:'red', left:20, top:10, position:'absolute', zIndex:2}}></View>
                <View style={{width:50, height:50,backgroundColor:'green', left:40, top:20, position:'absolute'}}></View>

            </View>
            
      </Container>
    );
  }
  static navigationOptions = {
    headerVisible: true,
    title : 'Test',
    // headerTransparent: true,
    // headerTintColor: '#fff',
  };
}
