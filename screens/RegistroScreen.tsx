import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase/Config'
import { ref, set } from 'firebase/database'

export default function RegistroScreen({navigation}: any) {

const [correo, setcorreo] = useState("")
const [nick, setnick] = useState("")
const [edad, setedad] = useState(0)
const [contrasenia, setcontrasenia] = useState("")

function registro(){
    createUserWithEmailAndPassword(auth, correo, contrasenia)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    guardarUsuario(user.uid)
    
    navigation.navigate("Login")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}

function guardarUsuario(uid : String) {
  
  set(ref(db, 'usuarios/' + uid), {
    correo: correo,
    avatar: nick,
    edad:edad
  });
}

    return (
        <View>
            <Text>RegistroScreen</Text>

            <TextInput
                placeholder='Ingresa correo'
                onChangeText={setcorreo}
            />

            <TextInput
                placeholder='Ingresa nick'
                onChangeText={setnick}
            />

            <TextInput
                placeholder='Ingresa edad'
                onChangeText={(texto)=>setedad(+texto)}
                keyboardType='numeric'
            />

            <TextInput
                placeholder='Ingresa contraseña'
                onChangeText={setcontrasenia}
                secureTextEntry
            />

            <Button title='registrar' onPress={registro}/>

        </View>
    )
}

const styles = StyleSheet.create({})