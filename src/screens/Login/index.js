import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'reducers/auth.reducer';
import { translate } from 'i18n'
import { Images, Metrics } from 'themes'
import Input from 'components/FormInput'
import { useForm, Controller } from "react-hook-form";
import { REQUIRED } from "utils/validation";

export default function Login() {
  const { control, handleSubmit, errors } = useForm();

  const [fieldState, setFieldState] = useState({})
  const dispatch = useDispatch()
  const onLogin = () => dispatch(login('cee'))

  const onSubmit = data => {
    console.tron.log(data);
    dispatch(login('cee'))
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>{translate('logo')}</Text>
        <Image source={Images.line} style={styles.line} />
        <Text style={styles.txtSignIn}>{translate('signIn')}</Text>
      </View>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            inputWrapperStyle={{ marginTop: 60 }}
            title='emailAddressLogin'
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            errorValue={errors.email}
          />
        )}
        name="email"
        rules={{
          ...REQUIRED,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            inputWrapperStyle={{ marginTop: 10 }}
            title='password'
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            errorValue={errors.password}
          />
        )}
        name="password"
        rules={{
          ...REQUIRED,
        }}
        defaultValue=""
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>{translate('iForgotPassword')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnSignIn}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.txtBtnLogin}>{translate('signIn')}</Text>
      </TouchableOpacity>
    </View >
  )
}



