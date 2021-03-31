
//Use this only when is necessary as it can be janky.

import { NavigationActions } from 'react-navigation'


let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
};


//'routeName' is name of screen/route defined in app.js
//'params' is used to pass infomation to the screen we're trying to navigate to. 
export const navigate = (routeName, params) => {

    //navigator from react navigation has internal API that functions
    //similarly to useContext
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};