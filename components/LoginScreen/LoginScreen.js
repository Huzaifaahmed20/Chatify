import React, { Component } from 'react';
import { View, Image, TextInput, StatusBar, TouchableOpacity, Text } from 'react-native';
import { LoginStyle } from './LoginStyle';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient';
import { Madoka } from 'react-native-textinput-effects';


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <LinearGradient style={LoginStyle.mainContainer} colors={['#566f8f', '#202D45']}>
                <StatusBar
                    hidden={true}
                />
                <View>
                    <KeyboardAwareScrollView>
                        <StatusBar
                            barStyle="dark-content"
                            backgroundColor="#566f8f"
                        />
                        <Image style={LoginStyle.logoStyle} source={require('../../Assets/logo.png')} />
                        <Text style={LoginStyle.logoTextStyle}>CHATIFY</Text>
                        <View style={LoginStyle.inputCont}>
                            <View style={LoginStyle.emailCon}>
                                <Madoka
                                    label={'Email'}
                                    borderColor={'#ffffff'}
                                    labelStyle={{ color: '#ccc', fontFamily: 'Nexa Regular', fontSize: 10 }}
                                    inputStyle={{ color: '#ffffff', fontFamily: 'Nexa Regular' }}
                                    inputStyle={{ color: '#ffffff', fontFamily: 'Nexa Regular' }}
                                    keyboardType='email-address'
                                    style={LoginStyle.inputStyle}
                                />
                                {/* <Icon style={LoginStyle.emailIcon} name="envelope" size={20} color="#fff" /> */}
                                {/* <TextInput keyboardType='email-address' placeholderTextColor='#88929F' underlineColorAndroid='#ffffff' style={LoginStyle.inputStyle} /> */}
                            </View>
                            <View style={LoginStyle.passCon}>
                                <Madoka
                                    label={'Password'}
                                    borderColor={'#ffffff'}
                                    labelStyle={{ color: '#ccc', fontFamily: 'Nexa Regular' }}
                                    inputStyle={{ color: '#ffffff', fontFamily: 'Nexa Regular' }}
                                    inputStyle={{ color: '#ffffff', fontFamily: 'Nexa Regular' }}
                                    secureTextEntry={true}
                                    style={LoginStyle.inputStyle}
                                />
                                {/* <Icon style={LoginStyle.lockIcon} name="lock" size={25} color="#fff" />
                                <TextInput secureTextEntry={true} placeholderTextColor='#88929F' underlineColorAndroid='#ffffff' style={LoginStyle.inputStyle} /> */}
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
                            <LinearGradient style={LoginStyle.logInBtn} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#3DBDB1', '#06B5CF']}>
                                <Text style={LoginStyle.btnTextStyle}>LOG IN</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={LoginStyle.forgetPass}>Forget Password?</Text>
                        </TouchableOpacity>
                    </KeyboardAwareScrollView>
                </View>
            </LinearGradient>
        );
    }
}
