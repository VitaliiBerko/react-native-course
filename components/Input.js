import { StyleSheet, TextInput, View } from "react-native";

export default function Input({value, setValue, placeholder = '', keyboardType='default'}) {
return (
    <View style={styles.container}>
        <TextInput style={styles.input}/>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    input: {

    }
})