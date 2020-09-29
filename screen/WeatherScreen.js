import React from 'react';
import {StyleSheet} from 'react-native';
import Weather from '../component/Weather';
import {View} from 'react-native';
export default function WeatherScreen({route}) {
    return (
        <View>
            <Weather zipCode={route.params.zipCode} />
        </View>
    );
}
const mainfont = StyleSheet.create({
    backdrop: {
        color: 'rgba(0, 0, 0, 1.0)',
        fontSize: 35,
        textAlign: 'center',
    },
});  