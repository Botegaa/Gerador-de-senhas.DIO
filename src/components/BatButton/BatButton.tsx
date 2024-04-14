import React, { useState } from 'react';
import { Button, View, Text, Pressable } from 'react-native';

import { styles } from './batButtonStyles';
import BatTextInput from '../batTextInput/batTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

   
    
    export function BatButton() {
        const [pass, setPass] = useState('')

        function handleGenerateButton() {
            let generateToken = generatePass()
            setPass(generateToken)
        }

        function handleCopyButton(){
            Clipboard.setStringAsync(pass)
        }
    return (
        <>
            <BatTextInput pass={pass}/>
            <Pressable
            onPress={ handleGenerateButton }
            style={styles.button}
            >
                <Text style={styles.text}>🥸Genarete🥸</Text>
            </Pressable>
            <Pressable
            style={styles.button}
            onPress={handleCopyButton}
            >
                <Text style={styles.text}>🥸Copy🥸</Text>
            </Pressable>
        </>
    );
   

}
