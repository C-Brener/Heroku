import React from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'

interface SkillsButton {
    propsTextButton:string;
}

export function Button({propsTextButton}: SkillsButton){
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>{propsTextButton}</Text>
        </TouchableOpacity>
    );
}

const styles= StyleSheet.create({
    button:{
        padding:15,
        width:'90%',
        alignSelf:'center',
        backgroundColor:'#664986',
        marginTop:25,
        borderRadius:5
    },
    textButton:{
        fontSize:25,
        color:'#fff',
        textAlign:'center'
    }
})