import {Text, View, TextInput, Button} from 'react-native';
import React, {Component} from 'react';

const Login = () => {
  return (
    <View>
      <Text>Login</Text>

      <View>
        <Text>Mobile</Text>
        <TextInput
          placeholder="Number one two three"
        />
      </View>

      <View>
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
        />
      </View>

      <Button title={'Login'} onPress={() => {}} />
    </View>
  );
};

export default Login;
