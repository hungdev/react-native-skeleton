import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { translate } from 'i18n'
import { Metrics, Fonts, Colors } from 'themes'

export default function FormInput(props) {
  const { title, value, onChangeText, onBlur, errorValue, inputWrapperStyle, titleStyle, inputStyle } = props
  return (
    <View style={[styles.wrapper, inputWrapperStyle]}>
      <Text style={{ ...styles.titleInput, ...titleStyle }}>{translate(title)}</Text>
      <TextInput
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        style={{ ...styles.input, ...inputStyle }}
      />
      {errorValue && <Text style={styles.errorText}>{errorValue?.message}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    alignSelf: 'center'
  },
  titleInput: {
    alignSelf: 'flex-start',
    marginBottom: Metrics.smallMargin,
    fontSize: Fonts.size.medium
  },
  input: {
    borderWidth: 1,
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 3,
    height: 40
  },
  errorText: {
    color: 'red',
    marginTop: Metrics.baseMargin
  }
})