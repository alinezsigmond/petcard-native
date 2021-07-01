import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        flex: 1,
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
        marginTop: 15,
        marginBottom: 29.1,
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
        marginTop: 132
    },
    arrow:{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 20
    }
})