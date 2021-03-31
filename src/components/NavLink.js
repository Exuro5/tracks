import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { navigate } from '../navigationRef';


const NavLink = ({ routeName, text }) => {
    
return (
        <TouchableOpacity onPress={() => navigate(routeName)} >
                <Text style={styles.navLink}>
                    {text}
                </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    navLink: {
        alignSelf: 'center',
        color: '#1689cc',
        marginTop: 10
    }
});

export default NavLink;