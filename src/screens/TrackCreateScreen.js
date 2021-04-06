import '../_mockLocation';

import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';


const TrackCreateScreen = () => {

    const { addLocation } = useContext(LocationContext);
    const [err, setErr] = useState(null);

    
    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          } 
          await watchPositionAsync({
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval: 10
          }, (location) => {
            addLocation(location)
          })

        } catch (e) {
          setErr(e);
        }
      };
    

    useEffect(() => {
        startWatching();
    }, []);

    return (
        <View style={styles.container} >
            <Text style={styles.header}>TrackCreateScreen</Text>
            <Map />
            { err ? <Text h1>Please enable location</Text> : null}
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

export default TrackCreateScreen;