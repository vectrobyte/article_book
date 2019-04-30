import {Alert, Text, View, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Style from '../styles';

const Login = ({ navigation }: any) => {

  const initialFormState = {email: '', password: ''};

  const [user, setUser] = useState(initialFormState);

  const login = () => {
    // validation
    if (!user.email || !user.password) {
      return Alert.alert('', 'Please fill up the form properly');
    }
    // navigate to dashboard
    navigation.navigate('Dashboard');
    // reset form data
    setUser(initialFormState);
  };

  return (
    <View style={[Style.container, Style.padding(20, 50)]}>

      <Text style={[Style.title, Style.margin(0, 0, 30, 0)]}>Login</Text>

      <View style={Style.formControl}>
        <Text style={Style.label}>Email address</Text>
        <TextInput
          style={Style.textBox}
          value={user.email}
          onChangeText={(email) => setUser({email: email, password: user.password})}
        />
      </View>

      <View style={Style.formControl}>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={Style.textBox}
          value={user.password}
          onChangeText={(password) => setUser({email: user.email, password: password})}
        />
      </View>

      <View style={Style.formControl}>
        <Button color={'#0e754e'}
          title={'Login'}
          onPress={() => login()}
        />
      </View>
      <Text
        style={[Style.link]}
        onPress={() => navigation.navigate('ForgotPassword')}>
        Forgot Password?
      </Text>
      <Text
        style={Style.link}
        onPress={() => navigation.navigate('SignUp')}>
        Create a new account
      </Text>
    </View>
  );
};

export default Login;
