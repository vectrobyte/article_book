import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const Preloader = () => {
    return (
        <View style={styles.preloader}>
            <Text>'Loading...'</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    preloader: {
        margin: '0 auto',
        width: '100%',
        position: 'absolute',
        height: '100vh',
        left: 0,
        top: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    circular: {
        animation: 'rotate 2s linear infinite',
        height: '50px',
        transformOrigin: 'center center',
        width: '50px',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
    }
});

export default Preloader;
