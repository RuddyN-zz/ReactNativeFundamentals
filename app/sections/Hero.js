import React from 'react';
import { StyleSheet, Image } from 'react-native';


export class Hero extends React.Component {
    render() {
        return (
            <Image
                style={styles.heroStyle}
                source={require('./img/laptop.jpeg')}
            />
        );
    }
}

const styles = StyleSheet.create({
    heroStyle: {
        width: undefined,
        height: undefined,
        flex: 8,
    }
});