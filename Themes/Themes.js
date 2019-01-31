import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { ThemeStyle } from './ThemeStyle';
import Modal from "react-native-modal";


export class CustomMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: null,
            isModalVisible: false
        };
    }
    _toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    setMenuRef = ref => {
        this.menu = ref;
    };
    shareNow() {
        console.log('shareNow')
    }
    share() {
        this._toggleModal()
        console.log('share')
    }
    friend() {
        console.log('friend')
    }
    hideMenu(ind) {
        const { menuItems } = this.props
        if (menuItems[ind] === 'Share Now') {
            this.shareNow()
        } else if (menuItems[ind] === 'Share') {
            this.share()
        } else {
            this.friend()
        }
        this.menu.hide();
    };

    showMenu = () => {
        this.menu.show();
    };

    renderMenuItem = () => {
        var menu = [];
        var menuItems = this.props.menuItems

        for (var i = 0; i < menuItems.length; i++) {
            menu.push(
                <MenuItem key={i} onPress={this.hideMenu.bind(this, i)}>{menuItems[i]}</MenuItem>
            )
        }
        return menu
    }
    render() {
        const { iconSize, iconName, icon, textToBeShown } = this.props
        return (
            <View>
                <Modal animationInTiming={1000} animationOut='bounceOut' animationIn='bounceIn' onBackButtonPress={this._toggleModal} isVisible={this.state.isModalVisible}>
                    <View style={ThemeStyle.modalStyle}>
                        <TouchableOpacity onPress={this._toggleModal}>
                            <Icon style={ThemeStyle.cancelIconStyle} name='times' size={30} color='#000000' />
                        </TouchableOpacity>
                       
                    </View>
                </Modal>
                <Menu
                    ref={this.setMenuRef}
                    button={<TouchableOpacity onPress={this.showMenu}>
                        {
                            icon ? <Icon size={iconSize} style={ThemeStyle.menuIconStyle} name={iconName} /> :
                                <Text>{textToBeShown}</Text>
                        }
                        {/* <Icon size={iconSize} style={ThemeStyle.menuIconStyle} name={iconName} /> */}
                    </TouchableOpacity>}>
                    {this.renderMenuItem()}
                </Menu>
            </View>
        );
    }
}
