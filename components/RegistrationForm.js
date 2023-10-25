import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import InputPassword from "./InputPassword";

export default function RegistrationForm() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
