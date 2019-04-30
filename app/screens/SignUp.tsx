import {Alert, Text, View, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Style from '../styles';

const SignUp = ({ navigation }: any) => {

  const initialFormState = {name: '', email: '', password: ''};

  const [user, setUser] = useState(initialFormState);

  const signUp = () => {
    // validation
    if (!user.name || !user.email || !user.password) {
      return Alert.alert('', 'Please fill up the form properly');
    }
    // navigate to dashboard
    navigation.navigate('Dashboard');
    // reset form data
    setUser(initialFormState);
  };

  return (
    <View style={[Style.container, Style.padding(20, 50)]}>

      <Text style={[Style.title, Style.margin(0, 0, 30, 0)]}>Sign Up</Text>

      <View style={Style.formControl}>
        <Text style={Style.label}>Full Name</Text>
        <TextInput
          style={Style.textBox}
          value={user.name}
          onChangeText={(name) => setUser({name: name, email: user.email, password: user.password})}
        />
      </View>

      <View style={Style.formControl}>
        <Text style={Style.label}>Email address</Text>
        <TextInput
          style={Style.textBox}
          value={user.email}
          onChangeText={(email) => setUser({name: user.name, email: email, password: user.password})}
        />
      </View>

      <View style={Style.formControl}>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={Style.textBox}
          value={user.password}
          onChangeText={(password) => setUser({name: user.name, email: user.email, password: password})}
        />
      </View>

      <View style={Style.formControl}>
        <Button color={'#0e754e'}
          title={'Sign Up'}
          onPress={() => signUp()}
        />
      </View>
      <Text
        style={Style.link}
        onPress={() => navigation.navigate('Login')}>
        Already have an account?
      </Text>
    </View>
  );
};

export default SignUp;
