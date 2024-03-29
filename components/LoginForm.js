import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import InputPassword from "./InputPassword";
import Input from "./Input";
import { signInUser } from "../redux/auth/auth.operations";
import { Avatar } from "./Avatar";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      await dispatch(signInUser({ email, password })).unwrap();
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <>
    
      <Text style={styles.title}>Увійти</Text>
      <View style={styles.container}>
        <Input
          key={"email"}
          value={email}
          setValue={setEmail}
          keyboardType="email-address"
          placeholder="Адреса електронної пошти"
        />
        <InputPassword password={password} setPassword={setPassword} />
      </View>
      <View style={{ ...styles.container, marginVertical: 11 }}>
        <TouchableOpacity
          style={styles.btnSubmit}
          activeOpacity={0.8}
          onPress={handleSubmit}
        >
          <Text style={styles.btnTitle}>Увійти</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Register")}
        >
          <Text>Немає акаунту? Зареєструватися</Text>
        </TouchableOpacity>
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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  btnSubmit: {
    width: "100%",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  btnTitle: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
  },
});
