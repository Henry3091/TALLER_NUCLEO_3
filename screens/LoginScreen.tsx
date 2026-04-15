import {Button, StyleSheet, Text,TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Config';


export default function LoginScreen({navigation}:any) {

    const [correo, setcorreo]=useState("")
    const [contrasenia, setcontrasenia]=useState("")

function login(){

    signInWithEmailAndPassword(auth, correo, contrasenia)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigation.navigate("Drawer")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });

}
  return (
    <View>
      <Text>LoginScreen</Text>
          <TextInput
          placeholder='Ingresar correo'
          onChangeText={setcorreo}
          />


          <TextInput
          placeholder='Ingresar contraseña'
          onChangeText={setcontrasenia}
          />

          <Button title='login' onPress={login} />
          <Button title='ir a registro' onPress={()=> navigation.navigate("Registro")}/>


    </View>
  )
}

const styles = StyleSheet.create({})