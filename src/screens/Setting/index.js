import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { reset, setLanguage } from 'reducers/auth.reducer';
import { translate } from 'i18n'


export default function Setting() {
  const language = useSelector(store => store.auth.language);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{translate('hello')}</Text>
    </View>
  )
}
