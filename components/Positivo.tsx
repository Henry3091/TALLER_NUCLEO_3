import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';

export default function Positivo(props: any) {
    console.log(props.comentarios);
    return (
        <View>
            <FlatList
                data={props.comentarios}
                renderItem={({ item }) =>
                    <Text>* {item.opinion} </Text>

                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})