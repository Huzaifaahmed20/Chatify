import React, { Component } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity, Modal } from 'react-native';
import { NewsFeedStyle } from './NewsFeesStyle';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import { CustomMenu } from '../../Themes/Themes';

export default class NewsFeedScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: ['Share', 'Share Now', 'Share on Friend`s Timeline'],
            newsFeeds: [
                {
                    name: 'Huzaifa Ahmed',
                    avatar: require('../../Assets/dp.png'),
                    post: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                },
                {
                    name: 'Huzaifa Ahmed',
                    avatar: require('../../Assets/dp.png'),
                    post: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                },
                {
                    name: 'Huzaifa Ahmed',
                    avatar: require('../../Assets/dp.png'),
                    post: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                },
                {
                    name: 'Huzaifa Ahmed',
                    avatar: require('../../Assets/dp.png'),
                    post: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                },
                {
                    name: 'Huzaifa Ahmed',
                    avatar: require('../../Assets/dp.png'),
                    post: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                },
                {
                    name: 'Huzaifa Ahmed',
                    avatar: require('../../Assets/dp.png'),
                    post: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                },
            ]
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    hidden={true}
                />
                <ScrollView>
                    {
                        this.state.newsFeeds.map((val, ind) => {
                            return (
                                <View key={ind} style={NewsFeedStyle.cardMain}>
                                    <View style={NewsFeedStyle.userInfo}>
                                        <View style={NewsFeedStyle.profileView}>
                                            <Image style={NewsFeedStyle.pic} source={val.avatar} />
                                        </View>
                                        <TouchableOpacity>
                                            <Text style={NewsFeedStyle.name}>{val.name}</Text>
                                        </TouchableOpacity>
                                        <CustomMenu menuItems={['Share', 'Share Now', 'Share on Friend`s Timeline']} iconSize={20} iconName='ellipsis-h' />
                                        {/* <TouchableOpacity>
                                            <Icon size={20} style={NewsFeedStyle.menuIconStyle} name='ellipsis-h' />
                                        </TouchableOpacity> */}
                                    </View>
                                    <View style={NewsFeedStyle.postInfo}>
                                        <Text style={NewsFeedStyle.postText}>{val.post}</Text>
                                    </View>
                                    <View style={NewsFeedStyle.buttonsCont}>
                                        <TouchableOpacity>
                                            <Text>Like</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text>Comment</Text>
                                        </TouchableOpacity>
                                        <CustomMenu menuItems={this.state.menuItems} textToBeShown='Share' />
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}
