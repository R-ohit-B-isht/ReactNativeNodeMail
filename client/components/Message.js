import React from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';
import { Entypo as Icon } from '@expo/vector-icons';

export default function MessageInput({ icon, error,touched, ...otherProps })  {
  const validationColor = !touched ? '#223e4b' : error ? '#FF5A5F' : '#223e4b';
  return (
    <View
      style={{

        flexDirection: 'column',
        alignItems: 'top',
        justifyContent: 'center',
        height: 150,
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
        width:245,

      }}
    >
      <View style={{ padding: 4 }}>
        <Icon name={icon} color={validationColor} size={16} />
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid='transparent'
          placeholderTextColor='rgba(34, 62, 75, 0.7)'
          {...otherProps}
        />
      </View>
    </View>
  );
}