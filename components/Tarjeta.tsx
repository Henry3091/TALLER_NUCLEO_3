import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Positivo from './Positivo';



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

                <View style={{ flexDirection: 'row' }}>
                    <Text>Positivos</Text>
                    <Switch
                        value={positivo}
                        onValueChange={(value) => setpositivo(!positivo)}
                    />
                    <Text>Negativos</Text>
                </View>


                {
                    positivo == true
                        ? <Positivo comentarios = {datos.opiniones.opiniones_positivas.detalles} />
                        : <FlatList
                            data={datos.opiniones.opiniones_negativas.detalles}
                            renderItem={({ item }) => 
                                <Text>{item.opinion} </Text>
                    }
                        />

                }



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