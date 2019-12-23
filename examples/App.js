/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Countdown from '@miidx/rn-count-down';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
            <Countdown
              label="Time:"
              endTime="2019-12-19T17:32+07:00"
              onTimeIsUp={() => { console.log('Time is up!'); }}
            />
      </SafeAreaView>
    </>
  );
};

export default App;
