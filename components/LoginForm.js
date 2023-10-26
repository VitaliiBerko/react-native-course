import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InputPassword from "./InputPassword";
import Input from "./Input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  return (
    <>
      <Text style ={styles.title}>Увійти</Text>
      <View style={styles.container}>
        <Input
          key={"email"}
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
          placeholder = 'Адреса електронної пошти'
        />
        <InputPassword/>
      </View>
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
  });
  

