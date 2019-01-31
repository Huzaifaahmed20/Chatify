import { StyleSheet } from 'react-native'


export const NewsFeedStyle = StyleSheet.create({
    cardMain: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignSelf: 'center',
        alignContent: 'center',
        marginTop: 30,
        height: 'auto',
        width: '90%',
        backgroundColor: '#F8F9FA',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
    },
    userInfo: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    profileView: {
        backgroundColor: '#ffffff',
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: '#88A8C5',
    },
    pic: {
        width: 50,
        height: 50,
        // marginTop: 10,
    },
    name: {
        fontFamily: 'Nexa Bold',
        textAlign: 'center',
        marginLeft: 10,
        marginTop: 10,
    },
    postInfo: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    postText: {
        fontFamily: 'Nexa Bold',
        textAlign: 'justify',
        marginLeft: 10,
        marginTop: 10,
    },
    buttonsCont: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    // menuIconStyle: {
    //     marginLeft: 70,
    //     marginTop: 10
    // }
})