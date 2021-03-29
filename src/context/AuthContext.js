import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';


//Defines different action functions
const authReducer = (state, action) => {
    switch (action.type) {
        case 'signup':
            return { token: action.payload, errorMessage: '' }
        case 'add_error':
            return {...state, errorMessage: action.payload}
        default:
            return state;
    }
};

//action function is called with dispatch and return a function to be executed inside component.
//this is to allow access to dispatch in ./createDataContext.
const signup = (dispatch) => async ({ email, password }) => {
        //We need to access API/mongodb to signup with user chosen email/password.
        try {
            const response = await trackerApi.post('/signup', { email, password });

            await AsyncStorage.setItem('token', response.data.token)
            
            dispatch({ type: 'signup', payload: response.data.token });
            
            //Navigates to TrackList using navigationRef.js
            navigate('TrackList')

        } catch (err) {
            dispatch({ type: 'add_error', payload: err.message })
        }
       
    };


const signin = (dispatch) => {
    return ({ email, password }) => {
        //try to sign in
        //Handle success by updating state
        //Handle error message
    };
};

const signout = (dispatch) => {
    return () => {
        //sign out by changing state and isSignedIn to 'false'
    }
}

//exports provider and context to use throughout the application
export const { Provider, Context} = createDataContext(
    authReducer, //first argument refers to reducer
    { signin, signout, signup }, //exports action functions to rest of application
    { token: null, errorMessage: ''} //default value
)