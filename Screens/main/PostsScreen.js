import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../redux/posts/posts.selectors";
import { useEffect } from "react";
import { getPosts } from "../../redux/posts/posts.operations";
import { UserCard } from "../../components/UserCard";
import { PostCard } from "../../components/PostCard";

export const PostScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);


  useEffect(() => {
    dispatch(getPosts());
  }, [navigation]);

  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      <View style={styles.container}>
        <UserCard />
        {posts.map((post) => (
          
          <PostCard key={post.id} {...post} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
    height: "100%",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
});
