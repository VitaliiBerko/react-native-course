import { Dimensions, Image, StyleSheet, View } from "react-native";

import addPicture from "../assets/images/add.png";
import removePicture from "../assets/images/remove.png";
const ADD_PICTURE = Image.resolveAssetSource(addPicture).uri;
const REMOVE_PICTURE = Image.resolveAssetSource(removePicture).uri;
export const Avatar = ({ avatar }) => {
  return (
    <View style={styles.imageContainer}>
      {avatar && <Image style={styles.image} source={{ uri: avatar }} />}
      {avatar ? (
        <Image style={styles.icon} source={{ uri: REMOVE_PICTURE }} />
      ) : (
        <Image style={styles.icon} source={{ uri: ADD_PICTURE }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: -92,
    marginHorizontal: (Dimensions.get("window").width - 152) / 2,
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 16,
  },
  icon: {
    position: "absolute",
    right: -12,
    bottom: 14,
    width: 25,
    heigh: 25,
  },
});
