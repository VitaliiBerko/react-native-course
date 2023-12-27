import { Image, StyleSheet, View } from "react-native";

const iconsMap = {
  add: require("./images/add.png"),
  addWhite: require("./images/add-white.png"),
  arrowLeft: require("./images/arrow-left.png"),
  camera: require("./images/camera.png"),
  cameraWhite: require("./images/camera_white.png"),
  grid: require("./images/grid.png"),
  logOut: require("./images/log-out.png"),
  mapPin: require("./images/map-pin.png"),
  messageCircleOrange: require("./images/message-circle-orange.png"),
  messageCircle: require("./images/message-circle.png"),
  thumbsUp: require("./images/thumbs-up.png"),
  trash: require("./images/trash.png"),
  user: require("./images/user.png"),
};

export const ICONS_MAP = {
  add: "add",
  addWhite: "addWhite",
  arrowLeft: "arrowLeft",
  camera: "camera",
  cameraWhite: "cameraWhite",
  grid: "grid",
  logOut: "logOut",
  mapPin: "mapPin",
  messageCircleOrange: "messageCircleOrange",
  messageCircle: "messageCircle",
  thumbsUp: "thumbsUp",
  trash: "trash",
  user: "user",
};

export const getIcon =(name)=>{
    const defaultIcon = ICONS_MAP.user;
    return (
        <View style ={styles.iconContainer}>
            <Image style={styles.icon} source={iconsMap[name] ?? iconsMap[defaultIcon]}/>

          
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 24,
        height: 24
    },
    icon: {
        width: '100%',
        height:'100%'
    }
})