import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {

    const { tryLocalSignin } = useContext(AuthContext)

    useEffect(() => {
        tryLocalSignin()
    }, [] );

    

    return null

};

ResolveAuthScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({

});

export default ResolveAuthScreen;