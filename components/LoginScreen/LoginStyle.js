import { StyleSheet } from 'react-native'

export const LoginStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    logoStyle: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 60,
    },
    logoTextStyle: {
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Nexa Regular'
    },
    inputCont: {
        marginTop: 30
    },
    inputStyle: {
        color: '#fff',
        // paddingLeft: 20,
        width: '80%',
        marginVertical: 10,
    },
    emailCon: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    passCon: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    emailIcon: {
        marginTop: 25
    },
    lockIcon: {
        marginTop: 25
    },
    logInBtn: {
        marginTop: 30,
        alignSelf: 'center',
        paddingVertical: 15,
        borderRadius: 5,
        width: '80%'
    },
    btnTextStyle: {
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Nexa Bold'
    },
    forgetPass: {
        marginVertical: 20,
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Nexa Light'
    }
})