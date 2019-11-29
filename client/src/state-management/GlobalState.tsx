import React, { createContext, useContext, useReducer } from "react";
import { State, Action } from "../interfaces";
import initialState from "../state-management/InitialState";

export const StateContext = createContext(initialState);

export const StateProvider = (props: {
  reducer: (state: State, action: Action) => State;
  initialState: State;
  children: any;
}) => {
  const [state, dispatch] = useReducer(props.reducer, props.initialState);
  return (
    <StateContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  );
};
export const useStateValue = () => useContext(StateContext);
