import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'reducers/auth.reducer';
import { translate } from 'i18n'
import { Images } from 'themes'

export default function Login() {
  const [fieldState, setFieldState] = useState({})
  const dispatch = useDispatch()
  const onLogin = () => dispatch(login('cee'))


  const onChangeInput = (type) => value => {
    setFieldState(prev => ({ ...prev, [type]: value }))
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>{translate('logo')}</Text>
        <Image source={Images.line} style={styles.line} />
        <Text style={styles.txtSignIn}>{translate('signIn')}</Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={{ ...styles.titleInput, marginTop: 60 }}>{translate('emailAddressLogin')}</Text>
        <TextInput
          value={fieldState.email}
          onChangeText={onChangeInput('email')}
          style={styles.input}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.titleInput}>{translate('password')}</Text>
        <TextInput
          value={fieldState.email}
          onChangeText={onChangeInput('password')}
          style={styles.input}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>{translate('iForgotPassword')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSignIn} onPress={onLogin}>
        <Text style={styles.txtBtnLogin}>{translate('signIn')}</Text>
      </TouchableOpacity>
    </View >
  )
}

