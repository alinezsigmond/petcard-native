import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDF1FA',

    },
    header: {
        backgroundColor: '#3C6382',
        height: 185,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressable: {  
        alignSelf: 'flex-start',
        marginTop: -35,
        marginLeft: 10,
        padding: 10,
    },
    voltar: {
        transform: [
            {scaleX: -1}
        ],
    },
    titulo: {
        fontFamily: 'Quanto',
        color: 'white',
        fontSize: 36,
        marginTop: 10
    },
    subtitulo: {
        fontFamily: 'Summit-Attack',
        color: 'white',
        fontSize: 17,
        marginTop: 10,
        flexWrap: 'wrap',
        textAlign: 'center'
    },
})