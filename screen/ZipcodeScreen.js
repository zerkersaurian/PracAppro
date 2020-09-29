import React from 'react';
import {FlatList, StyleSheet, Text, View , ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableHighlight} from 'react-native-gesture-handler';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
        <View>
            <ImageBackground source={require('../bg3.png')} style={buttonstyle.backdrop}>
                    <Text style={fontstyle.backdrop}>{place}</Text>
                    <Text style={fontbgstyle.backdrop}>{code}</Text>
                    
            </ImageBackground>
            <Text style={borderstyle.backdrop}></Text>
        </View>
    </TouchableHighlight>
)
   
export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../bg2.jpg')} style={bg.backdrop}>
            <FlatList
                data={availableZipItems}
                keyExtractor={item => item.code}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
            
        </ImageBackground>
        
    );
}
const bg = StyleSheet.create({
    backdrop:{
        width: '100%',
        height: '100%',
    }
});  
const buttonstyle = StyleSheet.create({
    backdrop:{
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        height: 120,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    }
});  
const fontstyle = StyleSheet.create({
    backdrop: {
        color: 'rgba(255,255, 255, 1.0)',
        fontSize: 40,
    },
});  
const borderstyle = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(150,150,150,0.8)',
        fontSize: 5,
        width: '100%',
    },
}); 
const fontbgstyle = StyleSheet.create({
    backdrop: {
        position: "absolute",
        color: 'rgba(255, 255, 255, 1.0)',
        fontSize: 100,
        opacity: 0.15
    },
});  