import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import { PostScreen } from "./Screens/main/PostsScreen";
import { CreatePostsScreen } from "./Screens/main/CreatePostScreen";
import { ProfileScreen } from "./Screens/main/ProfileScreen";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { ICONS_MAP, getIcon } from "./components/Icons/Icons";
import { LogoutBtn } from "./components/LogoutBtn";
import { CommentsScreen } from "./Screens/main/CommentsScreen";
import { MapScreen } from "./Screens/main/MapScreen";

export function Routes({ isAuth }) {
  const AuthStack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const headerRightBtn = () => {
    return (
      <View
        style={{
          position: "absolute",
          right: 8,
          bottom: 6,
        }}
      >
        <LogoutBtn />
      </View>
    );
  };

  const headerLeftBtn = (navigation) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: "absolute",
          bottom: 16,
          paddingHorizontal: 16,
        }}
      >
        {getIcon(ICONS_MAP.arrowLeft)}
      </TouchableOpacity>
    );
  };

  return isAuth ? (
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
      <Tab.Screen
        name="Posts"
        component={PostScreen}
        options={({ navigation }) => {
          return {
            headerTitle: "Публікації",
            tabBarIcon: () => {
              return getIcon(ICONS_MAP.grid);
            },
            headerRight: () => headerRightBtn(),
          };
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreatePostsScreen}
        listeners={({ navigation }) => {
          return {
            tabPress: (evt) => {
              navigation.jumpTo(false ? "Profile" : "Create");
              evt.preventDefault();
            },
          };
        }}
        options={({ navigation }) => {
          return {
            headerTitle: "Створити публікацію",
            tabBarVisibile: false,
            tabBarIcon: () => {
              return getIcon(ICONS_MAP.addWhite);
            },
            // tabBarStyle: {
            //   display: 'none'
            // },
            tabBarItemStyle: {
              maxWidth: 70,
              height: 40,
              backgroundColor: "#FF6C00",
              borderRadius: 20,
            },
            headerLeft: () => headerLeftBtn(navigation),
          };
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        listeners={({ navigation }) => {
          return {
            tabPress: (evt) => {
              navigation.jumpTo("Profile");
              evt.preventDefault();
            },
          };
        }}
        options={{
          tabBarIcon: () => {
            return getIcon(ICONS_MAP.user);
          },
        }}
      />
      <Tab.Screen
        name="Comments"
        component={CommentsScreen}
        options={({ navigation }) => {
          return {
            headerTitle: "Коментарі",
            tabBarStyle: {
              display: "none",
            },
            tabBarItemStyle: {
              display: "none",
            },
            headerLeft: () => headerLeftBtn(navigation),
          };
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={({ navigation }) => {
          return {
            headerTitle: "Карта",
            tabBarStyle: {
              display: "none",
            },
            tabBarItemStyle: {
              display: "none",
            },
            headerLeft: () => headerLeftBtn(navigation),
          };
        }}
      />
    </Tab.Navigator>
  ) : (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegistrationScreen}
      />
    </AuthStack.Navigator>
  );
}
