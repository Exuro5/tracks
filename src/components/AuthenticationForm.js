import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AuthenticationForm = ({ formHeader, errorMessage, onSubmit, submitButtonText }) => {

    //Destructure state and signup from AuthContext
    //const { state, signup } = useContext(AuthContext)
    //sets 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
         
        <View style={styles.container} >
            <Spacer><Text h3>{formHeader}</Text></Spacer>
            
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
            {errorMessage ? <Text style={styles.errorMessage} >{errorMessage}</Text> : null}
            <Spacer><Button 
                title={submitButtonText} 
                onPress={() => 
                    
                        onSubmit({ email, password })
                    
                    } /></Spacer>
            
        </View>
        
    )
};


const styles = StyleSheet.create({
    container: {
        
    },
    errorMessage: { 
        color: '#c9382e', 
        marginLeft: 15, 
        marginBottom: 15, 
        fontSize: 16 
    },
})

export default AuthenticationForm;