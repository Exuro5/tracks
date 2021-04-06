import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigationFocus } from 'react-navigation'; //withNavigation focus has new prop(isFocused) and tells app if the user is currently on this page. Must wrap export to use it.
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';


const TrackCreateScreen = ({ isFocused }) => {

    const { state, addLocation } = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, state.recording)
    }, [state.recording]);

    //Calls useLocation hook
    const [err] = useLocation(isFocused, callback); 

    

    return (
        <View style={styles.container} >
            <Text style={styles.header}>TrackCreateScreen</Text>
            <Map />
            { err ? <Text h1>Please enable location</Text> : null}
            <TrackForm />
        </View>
    )
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
    }
});



export default withNavigationFocus(TrackCreateScreen);