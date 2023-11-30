import { TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import Button from '../ButtonAdd/index';

export default function Input() {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log(text);
    }, [text]);

    return (
        <View>

        <TextInput 
            style={styles.TextInput} 
            placeholder='Title da task' 
            placeholderTextColor={'white'} 
            value={text} 
            onChangeText={setText}>
        </TextInput>
        <Button/>
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        width: 300,
        height: 50,
        borderStyle: 'solid',
        borderColor: '#8842E3',
        borderRadius: 12,
        marginBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#8842E3', 
    }
});