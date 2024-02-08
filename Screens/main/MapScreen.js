import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const defaultRegion = {
  latitude: 50.450032890732345,
  longitude: 30.524127829637656,
  latitudeDelta: 5.0,
  longitudeDelta: 5.0,
};

export const MapScreen = ({ route }) => {
  const { tittle = "" } = route.params;
  const {
    latitude,
    longitude,
    latitudeDelta = 0.05,
    longitudeDelta = 0.05,
  } = route.params?.coords ?? defaultRegion;

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={defaultRegion}
        region={{latitude, longitude, latitudeDelta, longitudeDelta}}
      >
        <Marker coordinate={{latitude,longitude}} title={tittle}/>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
