import { useDispatch, useSelector } from "react-redux";
import {
  selectComments,
  selectPostsStatus,
} from "../../redux/posts/posts.selectors";
import { useEffect } from "react";
import { getComments } from "../../redux/posts/posts.operations";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { CardPicture } from "../../components/CardPicture";
import { STATUS } from "../../constants/status";
import { CommentCard } from "../../components/CommentCard";

export const CommentsScreen = ({ route }) => {
  const { postId, picture } = route.params;

  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const status = useSelector(selectPostsStatus);

  useEffect(() => {
    (async () => {
      await dispatch(getComments(postId).unwrap());
    })();
  }, [postId]);

  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      <View style={styles.container}>
        <View style={styles.commentContainer}>
          <CardPicture />
          {status !== STATUS.loading &&
            comments.map((comment, index) => (
              <CommentCard key={comment.id} index={index} comment={comment} />
            ))}
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get("window").height - 184,
    flex: 1,
    padding: 16,
    paddingTop: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 32,
  },
  commentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },
});
