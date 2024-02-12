import { StyleSheet, View, Text } from "react-native";
import { ICONS_MAP, getIcon } from "./Icons/Icons";

export const Location = ({ Location = "Ukraine" }) => {
  return (
    <View style={styles.container}>
      {getIcon(ICONS_MAP.mapPin)}
      <Text style={styles.text}> {location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#212121",
  },
});
