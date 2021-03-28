import createDataContext from './createDataContext';


//Defines different action functions
const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

//action function is called with dispatch and return a function to be executed inside component.
//this is to allow access to dispatch in ./createDataContext.
const signup = (dispatch) => {
    //think about what infomation needs to be accessed/fed in.
    return ({ email, password }) => {
        //We need to access API/mongodb to signup with user chosen email/password.

        //After sign up is complete a value should be returned and isSignedIn should be set to 'true' by updateing state.

        //If sign up fails we should show error message
    };
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
    { isSignedIn: false} //default value
)