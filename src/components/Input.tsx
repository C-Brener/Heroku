import React from 'react'
import {View, TextInput, StyleSheet, Text} from 'react-native'
import { Entypo } from '@expo/vector-icons';


export function Input({propsIcon, propsPlaceHolder, propPassword = false}){
    return(
    <View style={styles.button}>
        <Entypo name={propsIcon} size={24} color="#664986" />
        <TextInput style={styles.input} placeholder={propsPlaceHolder} placeholderTextColor='#555' secureTextEntry={propPassword}/>
    </View>
    );
}
const styles = StyleSheet.create({
    title:{
        paddingVertical:10,
        fontSize:14,
        textAlign:'left'
    },
    button:{
        padding:14,  
        flexDirection:'row',
        borderWidth:2,
        borderColor:'#cbcbd2',
        borderRadius:5,
        width:'90%',
        alignSelf:'center'
    },
    input:{
        borderLeftWidth:0.3,
        borderColor:'#cbcbd2',
        marginLeft: 15,
        paddingHorizontal:10
    }
})