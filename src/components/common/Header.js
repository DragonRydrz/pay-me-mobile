import React from 'react';
import { Text, View } from 'react-native';

const Header = props => {
  const { textStyle, containerStyle } = styles;
  return (
    <View style={{ ...containerStyle, ...props.style }}>
      <Text style={{ ...textStyle, ...props.textStyle }}>
        {props.headerText || 'HEADER'}
      </Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 25,
  },
};

export { Header };
