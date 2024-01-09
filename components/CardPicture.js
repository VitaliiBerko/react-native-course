import { Dimensions, Image, StyleSheet, View } from "react-native";

export const CardPicture = ({ picture }) => {
  return (
    <View style={styles.imageContainer}>
      {picture && <Image style={styles.image} source={{ uri: picture }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: Math.floor((Dimensions.get("window").width - 32) / 1.43),
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
});
