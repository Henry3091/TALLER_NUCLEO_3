import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { ref, set } from 'firebase/database'
import { auth, db } from '../firebase/Config'
import { onAuthStateChanged } from 'firebase/auth'

export default function GuardarScreen() {

    const [titulo, settitulo] = useState("")
    const [descripcion, setdescripcion] = useState("")
    const [fecha, setfecha] = useState("")

    const [id, setid] = useState("")

    function guaradarUsuario() {
        set(ref(db, 'usuarios/' + id), {
            notas:{
                titulo: titulo,
                descripcion: descripcion,
                fecha: fecha
            }
        });
        settitulo("")
        setdescripcion("")
        setfecha("")
    }

function leerUID(){
    onAuthStateChanged(auth, (user) => {
  if (user) {
        const uid = user.uid;
   setid(uid)
  } else {
    // User is signed out
    // ...
  }
});
} 

useEffect(() => {
  leerUID()
}, [])



    return (
        <View>
            <Text>GuardarScreen</Text>

            <TextInput
                placeholder='Ingresa titulo'
                onChangeText={settitulo}
                value={titulo}
            />

            <TextInput
                placeholder='Ingresa descripcion'
                onChangeText={setdescripcion}
                value={descripcion}
            />

            <TextInput
                placeholder='Ingresa fecha'
                onChangeText={setfecha}
                value={fecha}
            />

            <Button title='guardar' onPress={guaradarUsuario} />



        </View>
    )
}

const styles = StyleSheet.create({})