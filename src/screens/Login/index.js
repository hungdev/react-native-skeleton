import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../reducers/auth.reducer';


export default function Login() {
  const dispatch = useDispatch()
  const onLogin = () => dispatch(login('cee'))
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={onLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

