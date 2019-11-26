import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, View, Text, Thumbnail} from 'native-base';
import { Image, ImageBackground } from 'react-native';
export default class Profile extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground style={{width: 'auto',height:'100%',
      alignItems: 'center'}} source={require('../app/img/profileback.jpg')}>

        
        
        {/* <Thumbnail source={require('../app/img/propic.jpg')} style={{height:150, width:150, borderRadius:100, alignSelf:'center', borderColor:'black', borderWidth:3, marginTop:55,zIndex:1}} /> */}

        <Image source={require('../app/img/propic.jpg')} style={{width:100, height:100, borderRadius:150, borderWidth:2, borderColor:'black',zIndex:1, top:50}}></Image>

          <View style={{width:350,height:300, backgroundColor:'white',top:120,borderRadius:20, position:'absolute'}}>
        </View>

        <View style={{width:'100%',height:'100%',backgroundColor:'white',top:200}}>
        </View>
        
        

        {/* <Footer>
              <FooterTab>
                <Button light>
                  <Icon name="apps" />
                </Button>
                <Button light>
                  <Icon name="camera" />
                </Button>
                <Button light>
                  <Icon active name="navigate" />
                </Button>
                <Button light active>
                  <Icon name="person" />
                </Button>
              </FooterTab>
          </Footer> */}
            

        </ImageBackground>
      </View>
    );
  }
  static navigationOptions = {
    headerVisible: true,
    title : 'Profile',
    // headerTransparent: true,
    // headerTintColor: '#fff',
  };
}
