import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera";
import { useEffect, useState } from "react";
import * as Location from "expo";

export const CreatePostForm = () => {
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [locationTitle, setlocationTitle] = useState("");
  const [locationCoords, setLocationCoord] = useState(null);

  const [permissionCamera, requestPermissionCamera] =
    Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const isPicture = Boolean(picture);

  const isDisabled = picture === "" || title === "" || locationTitle === "";

  useEffect(() => {
    requestPermissionCamera();
    // (async ()=> {
    //     const {status}= await Location.requestForegroundPermissionsAsync();
    //     if (status !=='granted') {
    //         return;
    //     }

    //     const {
    //         coords: {latitude, longitude},
    //     }= await Location.
    // })
  }, []);

  if (!permissionCamera) {
    return <View />;
  }

  if (permissionCamera.granted) {
    return (
      <View>
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            lineHeight: 30,
            color: "#212121",
            textAlign: "center",
          }}
        >
          Нама потрібний ваш дозвіл до доступу до камери
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={requestPermissionCamera}
        ><Text>Надати дозвіл</Text></TouchableOpacity>
      </View>
    );
  }

  const handleClear = ()=> {
    setPicture(''),
    setlocationTitle(''),
    setTitle('')

  }

  const takePhoto =async()=>{
    if(cameraRef) {
        const {uri} = await cameraRef.takePictureAsync();
        setPicture(uri)
    }
  }

  return <Text> CreatePostsScreen</Text>;
};

const styles = StyleSheet.create({
  btnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFFFFF'
  }
})
