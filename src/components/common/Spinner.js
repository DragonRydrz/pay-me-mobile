import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = props => {
  return (
    <View style={{ ...styles.spinnerStyles, ...props.style }}>
      <ActivityIndicator size={props.size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export { Spinner };
