import React,{ useState, useEffect} from 'react';
import { StyleSheet, Text, View , ImageBackground} from 'react-native';
import Forecast from './Forcast';
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'Main Area',
        description: 'Description Area',
        temp: 0
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=ce435306180fe56743afe296486cc15c`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>  
            <View style={bg.backdrop}>
                <Text style={fontcolor.backdrop}>Zip Code: {props.zipCode} </Text>
                <Text></Text>
                <Forecast {...forecastInfo} />
            </View>
        </ImageBackground>
    );
}
const bg = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: '100%',
        height: '35%',
        justifyContent: "center",
        alignItems: 'center',
    },
});
const fontcolor = StyleSheet.create({
    backdrop: {
        textAlign: "center",
        color: '#fff',
        fontSize: 20,
    },
});
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
});
   

   