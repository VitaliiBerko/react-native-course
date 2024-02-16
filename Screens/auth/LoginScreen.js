import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import MainContainer from "../../components/MainContainer";
import LoginForm from "../../components/LoginForm";

export default function LoginScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <MainContainer>
        <KeyboardAvoidingView
          style={styles.form}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
           <LoginForm/> 
        </KeyboardAvoidingView>
      </MainContainer>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  form: {
    // width: Dimensions.get("window").width,
    width: 'auto',
    height: "auto",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 68,
    padding: 16,
    gap: 32,
  },
});
