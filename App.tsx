/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import Body from './components/Body';
import Header from './components/header.component'
import { store } from './store';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <Provider store ={store} >
      <SafeAreaView >
        <Header actionType='' />
        <Body />
        <View style={styles.footer}>
        <Text style={{textTransform : 'uppercase', fontSize: 20,}}>SwitCHes</Text>
          <TouchableOpacity style={{position:'absolute' , right:10}}>
              <Text style={{textDecorationLine:'underlined' , color : '#E8ABD0'}}> Abort </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  


  footer :{
    width: '100%',
    height : '10%',
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor : '#F8F8F8'
  }
});

export default App;
