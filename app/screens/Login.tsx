import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Style from '../styles';

const Login = ({ navigation }: any) => {

  const initialFormState = {email: '', password: ''};

  const [user, setUser] = useState(initialFormState);

  const login = () => {
    // validation
    if (!user.email || !user.password) return;
    // navigate to dashboard
    navigation.navigate('Dashboard');
  };

  return (
    <View style={[styles.container, Style.padding(20, 50)]}>

      <Text style={[styles.title, Style.margin(0, 0, 30, 0)]}>Login</Text>

      <View style={styles.formControl}>
        <Text style={styles.label}>Email address</Text>
        <TextInput
          style={styles.textBox}
          value={user.email}
          onChangeText={(email) => setUser({email: email, password: user.password})}
        />
      </View>

      <View style={styles.formControl}>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.textBox}
          value={user.password}
          onChangeText={(password) => setUser({email: user.email, password: password})}
        />
      </View>

      <View style={styles.formControl}>
        <Button
          color={'#0e754e'}
          title={'Login'}
          onPress={() => login()}
        />
      </View>
      <Text>
        Create a new account
      </Text>
      <View>
        <Text>Email: {user.email}</Text>
        <Text>Password: {user.password}</Text>
      </View>
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
    padding: 0,
    paddingLeft: 10
  },
  title: {
    fontSize: 30,
  },
});

export default Login;
