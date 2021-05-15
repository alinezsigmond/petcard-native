import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(146, 213, 239, 0.300)',
        alignContent: 'center',
    },
    imgStyle:{
        width: '85%',
        height: '85%',
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 25,
    },
    content:{
        width: '100%',
        height: '70%',
    },
    titulo:{
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 41,
        fontFamily: 'Quanto',
        color: '#3C6382',
        textAlign: 'center',
        marginTop: -55,
        marginBottom: 45
    },
    botao:{
        marginTop: 25
    },
    buttonStyle:{
        width: 148,
        height:48,
        backgroundColor: '#2C748C',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 4,
      },
    textButton:{
        color: '#fff',
        fontSize: 24,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontFamily: 'Summit-Attack'
      }
});