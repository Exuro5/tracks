import React, { useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';




const SignupScreen = ({ navigation }) => {
    //Destructure state and signup from AuthContext
    const { state, signup } = useContext(AuthContext)
    //sets 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
         
        <View style={styles.container}>
            <Spacer><Text h3>Sign Up for Tracker</Text></Spacer>
            
            <Input 
                label="Email" 
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer/>
            <Input 
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {state.errorMessage ? <Text style={styles.errorMessage} >{state.errorMessage}</Text> : null}
            <Spacer><Button title="Sign Up" onPress={() => signup({ email, password })} /></Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}><Text style={styles.navLink}>Already have an account? Sign in here.</Text></TouchableOpacity>
        </View>
        
    )
};


//Use below to change the stack navigator
SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100

    },
    errorMessage: { 
        color: 'red', 
        marginLeft: 15, 
        marginBottom: 15, 
        fontSize: 16 
    },
    navLink: {
        alignSelf: 'center',
        color: '#1689cc',
        marginTop: 10
    }

});

export default SignupScreen; 