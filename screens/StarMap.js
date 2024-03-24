import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Platform, StatusBar, SafeAreaView, ImageBackgrounda, ImageBackground} from 'react-native';
import {WebView} from 'react-native-webview';

export default class StarMapScreen extends Component {
    constructor() {
        super()
        this.state = {
        longitude: '',
        latitude: ''
        }
    }
    render() {
        const {longitude, latitude} = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return (
            <View style={{ flex: 1, backgroundColor: "#1a0023"}}>
                <SafeAreaView style={StyleSheet.droidSafeArea} />
                <View style={{ flex: 0.3, marginTop: 20, alignItems: 'center'}}>
                    <Text style={StyleSheet.titleText}> Star Map</Text>
                    <TextInput
                    style={StyleSheet.inputStyle}
                    placeholder="Enter your longitude"
                    placeholderTextColor="white"
                    onChangeText={(text)=> {
                        this.setState({
                            longitude: text
                        })
                    }}
                    />
                    <TextInput
                    style={StyleSheet.inputStyle}
                    placeholder="Enter your latitude"
                    placeholderTextColor="white"
                    onChangeText={(text) => {
                        this.setState({
                            latitude: text
                        })
                    }}
                    />
                </View>
            </View>
        )
    }
}