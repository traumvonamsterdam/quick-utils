import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(null);

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={{state, dispatch}}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateValue = (init_value?) => useContext(StateContext);
