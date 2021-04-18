import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    header:{
        width: '100%',
        height: 230,
        backgroundColor: '#3C6382',
    },
    logo:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 24,
    },
    text: {
        marginTop: 15,
        fontSize: 30,
        fontFamily: 'Quanto',
        color: '#fff',
        textAlign: 'center',
        width: '70%',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignSelf: 'flex-start',
    },
    text2: {
        fontSize: 30,
        fontFamily: 'Quanto',
        color: '#fff',
        textAlign: 'center',
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignSelf: 'flex-start',
        marginTop: -8,
    },
    options:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 32,
    },
    cadastrar:{
        color: '#fff',
        fontFamily: 'Summit-Attack',
        fontSize: 20
    },
    login: {
        color: '#fff',
        fontFamily: 'Summit-Attack',
        fontSize: 20
    },
    bar: {
        width: '50%',
        height: 5,
        backgroundColor: '#92D4EF',
        position: 'absolute',
        bottom: 0
    }
})