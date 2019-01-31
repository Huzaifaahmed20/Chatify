import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import { FriendStyle } from './FriendStyle'

export default class FriendsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <StatusBar
          hidden={true}
        />
        <Sae
          style={FriendStyle.searchBarStyle}
          label={'Search ... '}
          iconClass={Icon}
          iconName={'search'}
          iconColor={'#202D45'}
        />
      </View>
    );
  }
}
