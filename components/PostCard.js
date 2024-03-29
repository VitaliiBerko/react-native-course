import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { CardPicture } from "./CardPicture";
import { Comments, Likes, Location } from "./Comments";

export const PostCard = ({
  navigation,
  picture,
  tittle,
  commentsCout,
  likesCount,
  location,
  coords,
  id: postId,
}) => {
  return (
    <View style={styles.cardContainer}>
      <CardPicture picture={picture}></CardPicture>
      <Text style={styles.tittle}>{tittle}</Text>
      <View style={styles.container}>
        <View style={{ ...styles.container, gap: 24 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Comments", { postId, picture })}
          >
            <Comments commentsCout={commentsCout} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Likes likesCount={likesCount} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Map", { coords, tittle })}
          >
            <Location location={location} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    gap: 8,
  },
  tittle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 2,
  },
});
