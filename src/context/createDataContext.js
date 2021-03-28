import React, { useReducer } from 'react';

export default (reducer, actions, defaultValue) => {
    //
    const Context = React.createContext();

    const Provider = ({ children }) => {
        //When using useReducer setup a variable with [state, dispatch]. 
        //use 2 values when you call useReducer(reducer, default state) 
        //these are props declared above.
        const [state, dispatch] = useReducer(reducer, defaultValue);


        //Next we need to loop over actions object declared in props, when you call
        //dispatch when an action object it automatically send it to the reducer.
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }


        // '...variableName' includes everything that currently exists in that variable.
        return (
            <Context.Provider value={{ state, ...boundActions}} >
                {children}
            </Context.Provider>
        );
    };

    return { Context, Provider }
};