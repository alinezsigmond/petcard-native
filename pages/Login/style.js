import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    input:{
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
    inputs:{
        marginTop: 30,
    },
    forgot:{
        marginTop: 10,
        fontSize: 17,
        fontFamily: 'Summit-Attack',
        color: '#2C748C',
        textAlign: 'center',
    },
    fixed:{
        height: '55.5%',
        justifyContent: 'flex-end'
    },
    bar: {
        width: '50%',
        height: 5,
        backgroundColor: '#92D4EF',
        marginLeft: '50%'
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