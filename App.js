import { View, StatusBar, Text } from 'react-native'
import React from 'react'
import Router from './src/navigation/Router.jsx'
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store.jsx';

const App = () => {

   console.log("stotesssssssssssssssssssssss", store)

  enableScreens();

  return (
    <>
      <StatusBar backgroundColor='#9ee4d4' barStyle='dark-content' />
      <Provider store={store} >
      <Router />
      </Provider>
    </>
  )
}

export default App