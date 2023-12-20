import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";

export function Routes ( ) {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <AuthStack.Screen options={{headerShown: false}} name="Register" component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
}
