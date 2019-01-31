import { createAppContainer, createStackNavigator } from 'react-navigation'
import LoginScreen from './components/LoginScreen/LoginScreen';
import HomeScreen from './components/Home/HomeScreen';
import FriendsScreen from './components/Friends/FriendsScreen'
import NewsFeedScreen from './components/News Feed/NewsFeedScreen';
import ChatScreen from './components/Chats/ChatScreen';
import SettingsScreen from './components/Settings/SettingsScreen';

const DashboardStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Friends: {
        screen: FriendsScreen
    },
    Chats: {
        screen: ChatScreen
    },
    NewsFeed: {
        screen: NewsFeedScreen
    },
    Settings: {
        screen: SettingsScreen
    }

}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        // initialRouteName: 'NewsFeed'
    });

const Auth = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    Dashboard: {
        screen: DashboardStack,
    }
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        // initialRouteName: 'Dashboard'
    })


// const StackNavigator = createStackNavigator({

// })


export default createAppContainer(Auth);