import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';



const AccountScreen = () => {

    const { signout } = useContext(AuthContext);

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>Account Screen</Text>
                
                
                
            </View>
            <Button style={styles.signoutButton} onPress={signout} title="Sign Out" />
        </>
    )
};


AccountScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 2,
        marginTop: 30
    },
    header: {
        marginTop: 15,
        marginRight: 15,
        fontSize: 30,
        alignSelf: 'flex-end'

    },
    signoutButton: {
        //alignSelf: 
        paddingBottom: 20
    }
});

export default AccountScreen;