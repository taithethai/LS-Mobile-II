import React from 'react';
import { ScrollView, StyleSheet, Text, AsyncStorage, View } from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@expo/ex-navigation';
import SignUp from '../components/SignUp';

export default class SignupScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Sign Up',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <SignUp navigate={this.props.navigator} />
        <Text>Hello!</Text>
      </View>
    );
  }
}

        // <ScrollView
        //   style={styles.container}
        //   contentContainerStyle={styles.contentContainer}>
          
        // </ScrollView>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});