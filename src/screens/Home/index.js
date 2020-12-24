import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'reducers/auth.reducer';

export default function Home() {
  const dispatch = useDispatch()
  const onLogout = () => dispatch(reset())
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={onLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}
