import { Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';


export default function Button() {
    return (
      <TouchableOpacity style={styles.ButtonAdd}>
        <Text style={styles.TextButton}>Add +</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ButtonAdd: {
        backgroundColor: '#8842E3',
        borderRadius: 10,
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextButton: {
        fontSize: 20,
        color: 'white',
        textAlign: "center",
    }
});