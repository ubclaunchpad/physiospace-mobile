import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const OutlineButton = props => {
  const {content, method} = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={method}
      activeOpacity={0.8}>
      <Text style={styles.text}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  text: {
    color: 'white',
    fontSize: 23,
    fontWeight: '500',
  },
});

export default OutlineButton;
