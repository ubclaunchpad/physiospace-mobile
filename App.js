/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NativeRouter, Route, Switch} from 'react-router-native';
import Home from './src/screens/Home/Home.js';

const App: () => React$Node = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/exercise/:workoutType" component={Exercise} />
        <Route path="/workout/:workoutType" component={Workout} /> */}
      </Switch>
    </NativeRouter>
  );
};

export default App;
