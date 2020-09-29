import React,{ useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Forecast(props) {
    return (
    <View>
        <Text style={mainfont.backdrop}>{props.main}</Text>
        <Text></Text>
        <Text style={descriptfont.backdrop}>{props.description}</Text>
        <Text></Text>
        <Text style={celciusfont.backdrop}>{props.temp} °C</Text>
    </View>
    );
}
const mainfont = StyleSheet.create({
    backdrop: {
        color: '#fff',
        fontSize: 35,
        textAlign: 'center',
    },
});
const descriptfont = StyleSheet.create({
    backdrop: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
    },
});
const celciusfont = StyleSheet.create({
    backdrop: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
    },
});