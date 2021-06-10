import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#DDF1FA',
        flex: 1,
    },
    top: {
        backgroundColor: '#3C6382',
        height: 85,
    },
    info: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 180,
        marginLeft: 70,
        marginTop: -40
    },
    avatar: {
        marginLeft: 20,
        marginTop: 20,
    },
    nome: {
        fontFamily: 'Summit-Attack',
        color: 'white',
        fontSize: 17.5
    },
    cidade: {
        fontFamily: 'Summit-Attack',
        color: 'white',
        fontSize: 16
    },
    text: {
        fontFamily: 'Summit-Attack',
        fontSize: 16,
        color: '#3C6382'
    },
})