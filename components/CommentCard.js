import { StyleSheet, View, Text } from "react-native";
import dateFormat from "dateformat";

export const CommentCard = ({ comment, index = 0 }) => {
  const { avatar, comment: commentText, createdAt } = comment;

  const isEvenNumber = Boolean(index % 2);

  return (
    <View
      style={{
        ...styles.container,
        flexDirection: isEvenNumber ? "row-reverse" : "row",
      }}
    >
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
      </View>
      <View
        style={{
          ...styles.commentContainer,
          borderTopLeftRadius: isEvenNumber ? 6 : 0,
          borderTopRightRadius: isEvenNumber ? 0 : 6,
        }}
      >
        <Text style={styles.comment}>{commentText}</Text>
        <View
          style={{
            ...styles.dataContainer,
            alignItems: isEvenNumber ? "flex-start" : "flex-end",
          }}
        >
          <Text style={styles.date}>
            {dateFormat(createdAt, "dd mmmm, yyyy | HH:MM")}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 16,
  },
  avatarContainer: {
    backgroundColor: "#F6F6F6",
    width: 28,
    height: 28,
    borderRadius: 14,
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  commentContainer: {
    padding: 16,
    flexShrink: 1,
    display: "flex",
    width: "100%",
    gap: 8,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
  },
  comment: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  dataContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
  date: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
  },
});
