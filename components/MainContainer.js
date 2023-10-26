import { Dimensions, Image, ImageBackground, StyleSheet, View } from "react-native";

// import backgroundImage from "../assets/images/background.jpg";

// const BGR_IMG = Image.resolveAssetSource(backgroundImage).uri;



export default function MainContainer({ children, ...props }) {
  return (
    <View {...props} style={styles.container}>
      <ImageBackground style={styles.image} source={require('../assets/images/background.jpg')}>
        {children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});
