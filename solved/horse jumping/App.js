import React from "react"
import { createAppContainer } from 'react-navigation';
import RootNavigator from "./navigations/switch"
import store from "./store"
import { Provider } from "react-redux"

const Navigator = createAppContainer(RootNavigator);

export default () => {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
}