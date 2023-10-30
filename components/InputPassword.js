import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function InputPassword({ password, setPassword }) {
  const [isPasswordSecured, setIsPasswordSecured] = useState(true);
  const [isFocus, setIsFocus] = useState(false);

  const inputFocusStyle = {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={
          isFocus
            ? { ...styles.input, ...inputFocusStyle, paddingRight: 100 }
            : { ...styles.input, paddingRight: 100 }
        }
        placeholder="Пароль"
        placeholderTextColor="#BDBDBD"
        value={password}
        secureTextEntry={isPasswordSecured}
        onChangeText={setPassword}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <TouchableOpacity style={styles.buttonShowPass} activeOpacity={0.8} onPress={()=>{setIsPasswordSecured(!isPasswordSecured)}}>
        <Text style={styles.showPassText}>{isPasswordSecured ? "Показати" : "Сховати"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    fontFamily: "Roboto-Regular",
    borderWidth: 1,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
    fontSize: 16,
    padding: 16,
    lineHeight: 19
  },
  buttonShowPass: {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 16,
    height: '100%',
    backgroundColor: 'transparent'
  },
  showPassText: {
fontFamily: 'Roboto-Regular',
fontSize: 16,
lineHeight: 19,
color: "#1B4371",
textAlign: 'center'


  }
});
