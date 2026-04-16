import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../firebase/Config';
import { get, onValue, ref } from 'firebase/database';


export default function InformacionScreen() {

    const [usuario, setusuario] = useState({ avatar: "", edad: 0 })

    function leerUsuario() {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                //console.log(uid);
                getusuario(uid)

            } else {

            }
        });
    }

    function getusuario(uid: String) {
        const starCountRef = ref(db, 'usuarios/' + uid);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            //console.log(data);
            setusuario(data)
            console.log(usuario);


        });
    }

    function cerrarSesion() {
        signOut(auth).then(() => {
            
        }).catch((error) => {
            
        });
    }

    useEffect(() => {
        leerUsuario()
    }, [])


    return (
        <View>
            <Text>InformacionScreen</Text>
            <Text>NOMBRE: {usuario.avatar} </Text>
            <Text>EDAD: {usuario.edad} </Text>

            <Button title='cerrar' onPress={cerrarSesion} />
        </View>
    )
}

const styles = StyleSheet.create({})