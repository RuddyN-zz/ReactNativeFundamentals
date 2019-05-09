import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header.js'
import { Hero } from '../sections/Hero';

export class Home extends React.Component {
    render() {
        return (
            <View>
                <Header message='Press to login' />
                <Hero />
                <Text>These other lines are here</Text>
                <Text>So you can see the text in the App</Text>

            </View>
        )
    }
}