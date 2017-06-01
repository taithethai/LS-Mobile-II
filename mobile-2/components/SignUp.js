import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';
import axios from 'axios';
import { NativeRouter, Route, Link } from 'react-router-native';
import Layout from '../constants/Layout';
import links from '../screens/LinksScreen';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.signUp = this.signUp.bind(this);
  }


  signUp() {
    const promise = axios.post('https://mobile-server-ii.herokuapp.com/users', {
      email: this.state.email,
      password: this.state.password,
    });
    promise.then((response) => {
      if (response.data.code === 11000) {
        return this.setState({
          error: 'Email already taken',
        });
      }
      AsyncStorage.setItem('token', response.data.token).then(() => {
        this.props.navigate('links');
      });
    });
    promise.catch((error) => {
      console.log(error);
    });
  }
  render() {
    const updateEmail = value => this.setState({email: value});
    const updatePass = value => this.setState({password: value});
    return (
      <View>
        <Text>{this.state.error && this.state.error.length ? this.state.error : null}</Text>
        <Text>Email</Text>
        <TextInput 
          placeholder="email"
          onChangeText={updateEmail}
          style={{marginBottom: 10}, styles.textInput}
          value={this.state.email}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="password"
          keyboardAppearance="dark"
          onChangeText={updatePass}
          style={styles.textInput}
          secureTextEntry
        />
        <Button
          title="Submit"
          onPress={this.signUp}
        />
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: Layout.window.width - 20,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 2,
    fontSize: 15,
    padding: 5,
  },
});

export default SignUp;