import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Camera } from "expo-camera";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { CardPicture } from "./CardPicture";
import { CameraIcon } from "./CameraIcon";
import { InputCreatePost } from "./InputCreatePost";
import { ICONS_MAP, getIcon } from "./Icons/Icons";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../redux/auth/auth.selector";
import { createPosts } from "../redux/posts/posts.operations";

export const CreatePostForm = ({ navigation }) => {
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [locationTitle, setlocationTitle] = useState("");
  const [locationCoords, setLocationCoords] = useState(null);
  const { login, userId } = useSelector(selectUser);

  const dispatch = useDispatch();

  const [permissionCamera, requestPermissionCamera] =
    Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const isPicture = Boolean(picture);

  const isDisabled = picture === "" || title === "" || locationTitle === "";

  useEffect(() => {
    requestPermissionCamera();
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLocationCoords({ latitude, longitude });
    })();
  }, []);

  if (!permissionCamera) {
    return <View />;
  }

  if (!permissionCamera.granted) {
    return (
      <View
        style={{
          ...styles.container,
          height: Dimensions.get("window").height - 97,
          paddingTop: Dimensions.get("window").height / 2 - 147,
        }}
      >
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
          style={styles.btnSubmit}
        >
          <Text style={styles.btnText}>Надати дозвіл</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleClear = () => {
    setPicture(""), setlocationTitle(""), setTitle("");
  };

  const handleSubmit = async () => {
    await dispatch(
      createPosts({
        picture,
        title,
        location: locationTitle,
        coords: locationCoords,
        login,
        userId,
      })
    ).unwrap();

    navigation.navigate("Posts");
    handleClear();
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPicture(uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.uploadPictureContainer}>
          <View style={styles.pictureContainer}>
            {isPicture ? (
              <CardPicture picture={picture} />
            ) : (
              <Camera style={styles.camera} ref={setCameraRef}></Camera>
            )}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.cameraBtn}
              onPress={() => {
                if (picture) {
                  setPicture("");
                  return;
                }
                takePhoto();
              }}
            >
              <CameraIcon isPicture={picture} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (picture) {
                setPicture("");
              }
            }}
          >
            <Text style={styles.text}>
              {picture ? "Редагувати фото" : "Завантажити фото"}
            </Text>
          </TouchableOpacity>
        </View>

        <InputCreatePost
          name={title}
          setName={setTitle}
          location={locationTitle}
          setLocation={setlocationTitle}
        />

        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              ...styles.btnSubmit,
              backgroundColor: isDisabled ? "#F6F6F6" : "#FF6C00",
            }}
            onPress={handleSubmit}

            disabled={isDisabled}
          >
            <Text
              style={{
                ...styles.btnText,
                color: isDisabled ? "#BDBDBD" : "#FFFFFF",
              }}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.trashContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleClear}
          style={styles.trashBtn}
        >
          {getIcon(ICONS_MAP.trash)}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: Dimensions.get("window").height - 97,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    gap: 16,
  },
  btnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  btnSubmit: {
    width: "100%",
    padding: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },
  uploadPictureContainer: {
    display: "flex",
    gap: 8,
  },
  pictureContainer: {
    position: "relative",
    width: "100%",
    height: Math.floor((Dimensions.get("window").width - 32) / 1.43),
    borderRadius: 8,
    overflow: "hidden",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  cameraBtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  trashContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 8,
  },
  trashBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});
