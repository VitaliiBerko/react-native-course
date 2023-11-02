import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Input({
  value,
  setValue,
  placeholder = "",
  keyboardType = "default",
}) {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const inputFocusStyles = {
    borderColor: "#FF6C00",
    backgroundColor: "#ffff",
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={
          isInputFocus ? { ...styles.input, ...inputFocusStyles } : styles.input
        }
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        keyboardType={keyboardType}
        onChangeText={setValue}
        onFocus={()=>setIsInputFocus(true)}
        onBlur={()=>setIsInputFocus(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    color: "#212121E8",
    padding: 16,
    
  },
});
