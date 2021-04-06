import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthenticationForm from '../components/AuthenticationForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {

    const { state, signin, clearErrorMessage } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
            <AuthenticationForm 
                formHeader='Sign In for Tracker' 
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText='Sign In'
            /> 

            <NavLink routeName='Signup' text="Don't have an account? Sign up here." />
        </View>
    )
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 100
        
    },

});

export default SigninScreen;