import {
    Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import MainContainer from "../../components/MainContainer";
import RegistrationForm from "../../components/RegistrationForm";

export default function RegistrationScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <MainContainer>
        <KeyboardAvoidingView style={{...styles.form}}>
          <RegistrationForm />
        </KeyboardAvoidingView>
      </MainContainer>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
    form: {
        width: Dimensions.get('window').width,
        height: 'auto',
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 78,
        paddingTop: 32,
        gap: 32
    }
})