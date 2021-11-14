import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native'
import Logo from '../assets/logo.png'

{/* My Components */}
import {Button} from '../components/Button'
import { Input } from '../components/Input';


export function Login (){
    return(
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo}/>
            <View style={styles.forms}>
                <Text style={styles.title}>Log in to your Account</Text>
                <Text style={styles.subTitle}>Email Address</Text>
                <Input  propsIcon={'user'} propsPlaceHolder={'Email address'}/>
                <Text style={styles.subTitle}>Password</Text>
                <Input propsIcon={'lock'} propsPlaceHolder={'Password'}/>
                <Button propsTextButton={'Log In'}/>
                <View style={styles.border}>
                    <Text style={styles.singIn}>
                        New To Heroku? Sign Up
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#534292',
        paddingVertical:70,
        paddingHorizontal:40,
    },
    logo:{
        width:150,
        height:150,
        alignSelf:'center',
        marginVertical:15
    },
    forms:{
        backgroundColor:'white',
        borderRadius:5, 
        width:'100%',
        height:500
    },
    title:{
        color:'#664986',
        fontSize:25,
        textAlign:'center',
        paddingVertical:25
    },
    subTitle:{
        fontSize:15,
        paddingLeft:18,
        marginVertical:15,
        color:'#664986'
    },
    border:{
        borderTopWidth:0.4, 
        borderColor:'#555', 
        marginTop:35
    },
    singIn:{
        marginTop:25,
        textAlign:'center',
        alignItems:'center',
        fontSize:25,
        color:'grey'
    }
})