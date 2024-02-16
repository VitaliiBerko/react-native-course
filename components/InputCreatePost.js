import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ICONS_MAP, getIcon } from "./Icons/Icons";

export const InputCreatePost = ({ name, setName, location, setLocation }) => {
  const [isNameFocus, setIsNameFocus] = useState(false);
  const [isLocationFocus, setIsLocationFocus] = useState(false);

  const inputFocusStyles = {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={
            isNameFocus
              ? {
                  ...styles.input,
                  fontFamily: "Roboto-Medium",
                  ...inputFocusStyles,
                }
              : { ...styles.input, fontFamily: "Roboto-Medium" }
          }
          placeholder="Назва"
          value={name}
          placeholderTextColor="#BDBDBD"
          onChangeText={(text) => setName(text)}
          onFocus={() => setIsNameFocus(true)}
          onBlur={() => setIsNameFocus(false)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={
            isLocationFocus
              ? { ...styles.input, paddingLeft: 28, ...inputFocusStyles }
              : {...styles.input, paddingLeft: 28}
          }
          placeholder="Місцевість"
          value={location}
          placeholderTextColor="#bdbdbd"
          onChangeText={(text)=>setLocation(text)}
          onFocus={()=>setIsLocationFocus(true)}
          onBlur={()=>setIsLocationFocus(false)}

        />
      </View>
      <View style={styles.iconContainer}>{getIcon(ICONS_MAP.mapPin)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
  },
  inputContainer: {
    width: "100%",
  },

  input: {
    fontFamily: "Roboto-Regular",
    borderBottomWidth: 1,
    color: "#212121",
    borderColor: "#E8E8E8",
    paddingVertical: 16,
    fontSize: 16,
    lineHeight: 19,
  },
  iconContainer: {
    position: "absolute",
    top: 18,
    left: 0,
  },
});
