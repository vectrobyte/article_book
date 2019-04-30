import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import React from 'react';
import Style from '../styles';

const Login = ({ navigation }: any) => {
  return (
    <View style={[styles.container, Style.padding(20, 50)]}>

      <Text style={[styles.title, Style.margin(0, 0, 30, 0)]}>Login</Text>

      <View style={styles.formControl}>
        <Text style={styles.label}>Email address</Text>
        <TextInput style={[styles.textBox, Style.padding(0)]} />
      </View>

      <View style={styles.formControl}>
        <Text>Password</Text>
        <TextInput style={[styles.textBox, Style.padding(0)]} />
      </View>

      <View style={styles.formControl}>
        <Button title={'Login'} onPress={() => {navigation.navigate('SignUp');}} />
      </View>
      <Text>
        Create a new account
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#d6d7da',
    borderRadius: 4,
    borderWidth: 0.5,
    color: '#000000',
  },
  formControl: {
    marginBottom: 10
  },
  label: {
    marginBottom: 5
  },
  textBox: {
    borderColor: 'black',
    borderWidth: 1,
  },
  title: {
    fontSize: 30,

  },
});

export default Login;
