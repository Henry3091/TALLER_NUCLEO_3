import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-gesture-handler'



export default function Tarjeta({ datos }: any) {

    const [ocultar, setocultar] = useState(false)
    const [positivo, setpositivo] = useState(false)
    //console.log(datos.titulo); 


    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => setocultar(true)}
        >
            <Text>Pelicula: {datos.titulo} </Text>
            <Image
                source={{ uri: datos.imagen }}
                style={styles.img}
            />

            <Modal visible={ocultar}>
                <Text>Pelicula: {datos.titulo} </Text>
                <Image
                    source={{ uri: datos.imagen }}
                    style={styles.img}
                />
                <Text>Comentarios{"\n\n\n\n"} </Text>

                <view style={{flexDirection:'row'}}>
                    <Text>Positivos</Text>
                    <Switch 
                    value={positivo} 
                    onChange={()=> setpositivo(!positivo)}/>
                    <Text>Negativos</Text>
                </view>



                <Button title='cerrar' onPress={() => setocultar(false)} />

            </Modal>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        backgroundColor: "#86c2c0"

    },
    img: {
        width: 250,
        height: 100,
        resizeMode: 'contain'
    }
})