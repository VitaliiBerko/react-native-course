import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import { PostScreen } from "./Screens/main/PostsScreen";
import { CreatePostsScreen } from "./Screens/main/CreatePostScreen";
import { ProfileScreen } from "./Screens/main/ProfileScreen";
import { Dimensions } from "react-native";
import { ICONS_MAP, getIcon } from "./components/Icons/Icons";

export function Routes() {
  const AuthStack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "#b3b3b3",
          height: 64,
          paddingTop: 8,
          paddingBottom: 16,
          paddingHorizontal: Math.floor(Dimensions.get("window").width / 7.5),
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 17,
          lineHeight: 22,
          letterSpacing: -0.408,
          color: "#212121",
        },
        headerStyle: { borderBottomWidth: 1, borderBottomColor: "#b3b3b3" },
      }}
    >
      <Tab.Screen name="Posts" component={PostScreen} options={({navigation})=>{
        return {
          headerTitle: "Публікації",
          tabBarIcon: ()=>{return getIcon(ICONS_MAP.grid)},
          headerRight: ()=> {}
        }
        
      }}/>
      <Tab.Screen name="Create" component={CreatePostsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

{
  /* <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <AuthStack.Screen options={{headerShown: false}} name="Register" component={RegistrationScreen} />
    </AuthStack.Navigator> */
}
