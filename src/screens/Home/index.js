import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import { reset, setLanguage } from 'reducers/auth.reducer';
import { translate } from 'i18n'


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
    <View style={styles.container}>
      <Text>{translate('hello')}</Text>
      <TouchableOpacity onPress={onLogout}>
        <Text>Logout</Text>
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
