import createDataContext from './createDataContext';


//Defines different action functions
const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

//exports provider and context to use throughout the application
export const { Provider, Context} = createDataContext(
    authReducer, //first argument refers to reducer
    {}, //exports action functions to rest of application
    { isSignedIn: false} //default value
)