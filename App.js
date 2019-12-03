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
  StyleSheet,
  ScrollView,
  View,
  Image
  // StatusBar,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import {createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import {createAppContainer } from 'react-navigation'
import {Text} from 'native-base';
import HomeScreen from './src/Component/Home'
import Component1 from './src/Component/Component1'
import Component2 from './src/Component/Component2'
const customDraw = (props) => (
  <SafeAreaView style={{flex:1, marginTop:10,}}>
    <View style={{height:150, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

      <Text>Nothing</Text>

    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const App = createAppContainer( createDrawerNavigator({
  Home: HomeScreen,
  Component1: Component1,
  Component2: Component2
},
{
contentComponent: customDraw
}
))


export default App;
