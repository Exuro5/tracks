import React, { useState, useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = ({ onSubmit }) => {

    const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext);
    //const [trackName, setTrackName] = useState('');

    console.log(locations.length);

    

    return (
        <>
            <Spacer>
                <Input 
                    value={name}
                    placeholder="Enter Name"
                    label="Track"
                    onChangeText={changeName}
                    />
            
                {recording
                    ?  <Button 
                    title="Stop"
                    onPress={stopRecording}
                    />
                    : <Button 
                    title="Start Recording"
                    onPress={startRecording}
                    />
                }
                
            </Spacer>
        </>
    )
}

export default TrackForm;