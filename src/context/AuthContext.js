import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';


//Defines different action functions
const authReducer = (state, action) => {
    switch (action.type) {
        case 'signin':
            return { token: action.payload, errorMessage: '' };
        case 'signout':
            return { token: null, errorMessage: '' };
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
        dispatch({ type: 'signin', payload: token});
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    };
};


const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
};

//action function is called with dispatch and return a function to be executed inside component.
//this is to allow access to dispatch in ./createDataContext.
const signup = (dispatch) => async ({ email, password }) => {
        //We need to access API/mongodb to signup with user chosen email/password.
        try {
            const response = await trackerApi.post('/signup', { email, password });

            await AsyncStorage.setItem('token', response.data.token)
            
            dispatch({ type: 'signin', payload: response.data.token });
            
            //Navigates to TrackList using navigationRef.js
            navigate('TrackList')

        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign in.' })
        }
       
    };


const signin = (dispatch) => async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signin', { email, password });
            await AsyncStorage.setItem('token', response.data.token)

            dispatch({ type: 'signin', payload: response.data.token })

            navigate('TrackList')

        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign in.' })
        }
        
    };


const signout = (dispatch) => async () => {
        //sign out by changing state and isSignedIn to 'false'
        
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout' });
        navigate('loginFlow')
       
    };


//exports provider and context to use throughout the application
export const { Provider, Context} = createDataContext(
    authReducer, //first argument refers to reducer
    { signin, signup, signout, clearErrorMessage, tryLocalSignin }, //exports action functions to rest of application
    { token: null, errorMessage: ''} //default value
)