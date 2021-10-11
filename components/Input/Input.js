/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import styles from './Input-styles.js';
import { View, TextInput, Text } from 'react-native';
// eslint-disable-next-line react-native/no-inline-styles


function Input() {
    const [text, setText] = useState('');
    return (
        <View>
            <TextInput style={styles.inputText} defaultValue={text} onChangeText={e => setText(e)} />
            <Text>Entered Text is : {text} </Text>
        </View>
    );
}
export default Input;
