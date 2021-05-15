import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },
    input: {
        height: 50,
        marginHorizontal: 25,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: "#92D4EF",
        backgroundColor: '#fff',
        color: '#3C6382',
        fontFamily: 'Arial',
        paddingHorizontal: 15,
        fontSize: 15
    },
    basic:{
        marginTop: 15
    },
    personal:{
        marginTop: 15,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'rgba(146, 212, 239, 0.3)'
    },
    info:{
        fontFamily: 'Summit-Attack',
        fontSize: 23,
        color: '#3C6382',
        textAlign: 'center',
        marginBottom: 15
    },
    bar: {
        width: '50%',
        height: 5,
        backgroundColor: '#92D4EF'
    },
    footer: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#3C6382',
        alignSelf: 'flex-end',
    },
})