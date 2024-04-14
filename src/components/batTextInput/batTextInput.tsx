import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './batTextInputStyles';

interface batTextInputProps{
    pass:string
}

export function BatTextInput(props: batTextInputProps) {
    return (

        <TextInput
            style={styles.inputer}
            placeholder='pass'
            value={props.pass}
           
        >

        </TextInput>

    );
}
export default BatTextInput