import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, ImageP } from 'react-native';
import { HomeStyle } from './HomeStyle';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ImagePicker from 'react-native-image-picker';


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: ''
    };
  }
  // showPicker = () => {
  //   const options = {
  //     title: 'Select Avatar',
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'Assets',
  //     },
  //   };
  //   ImagePicker.showImagePicker({}, (response) => {
  //     console.warn('Response = ', response);

  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     } else {
  //       const source = { uri: response.uri };

  //       // You can also display the image using data:
  //       // const source = { uri: 'data:image/jpeg;base64,' + response.data };

  //       this.setState({
  //         avatarSource: source,
  //       });
  //     }
  //   });
  // }
  render() {

    const { navigation } = this.props
    const { navigate } = navigation
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient style={HomeStyle.halfMainStyle} colors={['#566f8f', '#202D45']}>
          <View>
            <StatusBar
              hidden={true}
            />
            <TouchableOpacity onPress={this.showPicker} style={HomeStyle.profileView}>
              {/* <View > */}
              <Image style={HomeStyle.pic} source={require('../../Assets/dp.png')} />
              {/* </View> */}
            </TouchableOpacity>
            <Text style={HomeStyle.userNameStyle}>Huzaifa Ahmed</Text>
            <Text style={HomeStyle.noOfFriends}>20 Friends</Text>
          </View>
        </LinearGradient>

        <View style={HomeStyle.firstTwo}>

          <TouchableOpacity onPress={() => navigate('Friends')} style={HomeStyle.first}>
            <Icon style={HomeStyle.iconSetting} name='users' size={30} color='#566f8f' />
            <Text style={HomeStyle.iconTextSetting}>Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Chats')} style={HomeStyle.second}>
            <Icon style={HomeStyle.iconSetting} name='comments' size={30} color='#566f8f' />
            <Text style={HomeStyle.iconTextSetting}>Chats</Text>
          </TouchableOpacity>

        </View>

        <View style={HomeStyle.secondTwo}>

          <TouchableOpacity onPress={() => navigate('NewsFeed')} style={HomeStyle.first}>
            <Icon style={HomeStyle.iconSetting} name='rss-square' size={30} color='#566f8f' />
            <Text style={HomeStyle.iconTextSetting}>News Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyle.second}>
            <Icon style={HomeStyle.iconSetting} name='edit' size={30} color='#566f8f' />
            <Text style={HomeStyle.iconTextSetting}>Write Post</Text>
          </TouchableOpacity>

        </View>

        <View style={HomeStyle.thirdtwo}>

          <TouchableOpacity onPress={() => navigate('Settings')} style={HomeStyle.first}>
            <Icon style={HomeStyle.iconSetting} name='cog' size={30} color='#566f8f' />
            <Text style={HomeStyle.iconTextSetting}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Login')} style={HomeStyle.second}>
            <Icon style={HomeStyle.iconSetting} name='power-off' size={30} color='#566f8f' />
            <Text style={HomeStyle.iconTextSetting}>Log Out</Text>
          </TouchableOpacity>

        </View>
      </View >
    );
  }
}
