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
        marginBottom: 20
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
    picker: {
        backgroundColor: '#FFF',
        color: '#3C6382',
        borderWidth: 1,
        borderColor: '#92D4EF',
        margin: 10,
        width: '85%',
        alignSelf: 'center'
    },
    input: {
        backgroundColor: '#FFF',
        color: '#3C6382',
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#92D4EF',
        paddingLeft: 15,
        margin: 10,
        width: '85%',
        alignSelf: 'center'
    },
    footer: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#3C6382',
        alignSelf: 'flex-end',
    },
    arrow:{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 20
    }
})