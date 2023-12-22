import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import { PostScreen } from "./Screens/main/PostsScreen";
import { CreatePostsScreen } from "./Screens/main/CreatePostScreen";
import { ProfileScreen } from "./Screens/main/ProfileScreen";

export function Routes ( ) {
  const AuthStack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Posts">
      <Tab.Screen name="Posts" component={PostScreen}/>
      <Tab.Screen name="Create" component={CreatePostsScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>

    </Tab.Navigator>
  );
}


{/* <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <AuthStack.Screen options={{headerShown: false}} name="Register" component={RegistrationScreen} />
    </AuthStack.Navigator> */}