import { StyleSheet } from 'react-native'

export const HomeStyle = StyleSheet.create({
    halfMainStyle: {
        width: '100%',
        height: '35%',
        backgroundColor: '#202D45'
    },
    profileView: {
        backgroundColor: '#ffffff',
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: '#88A8C5',
        alignSelf: 'center',
        marginTop: 30,
    },
    pic: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        // marginTop: 10,
    },
    userNameStyle: {
        marginTop: 10,
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Nexa Light'
    },
    noOfFriends: {
        marginTop: 5,
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Nexa Bold'
    },
    firstTwo: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -40
    },
    secondTwo: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:10
    },
    thirdtwo: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:10
    },
    first: {
        marginHorizontal: 10,
        width: 125,
        height: 125,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 20,
    },
    second: {
        marginHorizontal: 10,
        width: 125,
        height: 125,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 20,
    },
    iconSetting: {
        alignSelf: 'center',
        marginTop: 30
    },
    iconTextSetting: {
        marginTop: 10,
        textAlign: 'center',
        color: '#000000',
        fontFamily: 'Nexa Bold'
    }
})