import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase/Config'
import { onAuthStateChanged } from 'firebase/auth'
import { ref, onValue } from 'firebase/database'
import { FlatList } from 'react-native-gesture-handler'

export default function NotasScreen() {

    const [id, setid] = useState("")
    const [notas, setnotas] = useState([])

    function leer() {

        const starCountRef = ref(db, 'usuarios/' + id + '/nota/')

        onValue(starCountRef, (snapshot) => {

            const data = snapshot.val()

            console.log(data)

            let notasTemporales: any = Object.keys(data).map(ide => ({
                ide,
                ...data[ide]
            }))

            setnotas(notasTemporales)

        })

    }

    function leerUID() {

        onAuthStateChanged(auth, (user) => {

            if (user) {
                const uid = user.uid
                setid(uid)
            }

        })

    }

    useEffect(() => {
        leerUID()
        leer()
    }, [])

    return (
        <View>
            <Text>NotasScreen</Text>
            <FlatList
                data={notas}
                renderItem={({ item }: any) =>
                    <Text>{item.descripcion}</Text>

                }
            />

        </View>
    )
}

const styles = StyleSheet.create({})