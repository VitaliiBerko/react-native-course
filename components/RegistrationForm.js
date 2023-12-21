import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import {useNavigation} from '@react-navigation/native'
import InputPassword from "./InputPassword";

export default function RegistrationForm() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()

  return (
    <>
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.container}>
        <Input
          key={"login"}
          value={login}
          setValue={setLogin}
          placeholder="Логін"
        />
        <Input
          key={"email"}
          value={email}
          setValue={setEmail}
          placeholder="Адреса електронної пошти"
          keyboardType="email-address"
        />
        <InputPassword password={password} setPassword={setPassword} />
      </View>
      {
        <View style={{...styles.container, marginVertical: 10}}>
          <TouchableOpacity activeOpacity={0.8} style={styles.btnSubmit}>
            <Text style={styles.btnText}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity  activeOpacity={0.8} onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.link}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
  container: {
    width: '100%',
  display: 'flex',
  flexDirection: "column",
  justifyContent: 'center',
  alignItems: 'center',
  gap: 16,

  },
  btnSubmit: {
    width: '100',
    backgroundColor: '#FF6C00',
    padding: 16,
    borderRadius: 50,
  
  },
  btnText: {
    color: '#FFFFFF',
  },
  link: {
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371'
  }

});
