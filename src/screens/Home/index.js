import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { reset, setLanguage } from 'reducers/auth.reducer';
import { translate } from '../../i18n/index'
import RNRestart from 'react-native-restart';


export default function Home() {
  const dispatch = useDispatch()
  const language = useSelector(store => store.auth.language);

  const onLogout = () => dispatch(reset())
  const changeVNLanguage = () => {
    dispatch(setLanguage('vi'))
  }
  const changeENLanguage = () => {
    dispatch(setLanguage('en'))
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={onLogout}>
        <Text>{translate('hello')}</Text>
        {/* <Text>hello</Text> */}
      </TouchableOpacity>
      <TouchableOpacity onPress={changeVNLanguage}>
        <Text>Change Language to VN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={changeENLanguage}>
        <Text>Change Language to EN</Text>
      </TouchableOpacity>
    </View>
  )
}
