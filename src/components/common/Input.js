import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = props => {
  const { labelStyle, inputStyle, containerStyle } = styles;
  const {
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    keyboardType,
  } = props;

  return (
    <View style={{ ...containerStyle, ...props.style }}>
      <Text style={{ ...labelStyle, ...props.labelStyle }}>{label}</Text>
      <TextInput
        underlineColorAndroid="rgba(0,0,0,0)"
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={{ ...inputStyle, ...props.inputStyle }}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 5,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 2,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export { Input };
