import { Dimensions, ScrollView, StyleSheet, View, Text } from "react-native";
import MainContainer from "../../components/MainContainer";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPostsStatus,
  selectUserPosts,
} from "../../redux/posts/posts.selectors";
import { selectUser } from "../../redux/auth/auth.selector";
import { useEffect } from "react";
import { getUserPosts } from "../../redux/posts/posts.operations";
import { LogoutBtn } from "../../components/LogoutBtn";
import { Avatar } from "../../components/Avatar";
import { STATUS } from "../../constants/status";
import { PostCard } from "../../components/PostCard";

export const ProfileScreen = ({ navigation }) => {
  const { avatar, login, userId } = useSelector(selectUser);
  const userPosts = useSelector(selectUserPosts);
  const status = useSelector(selectPostsStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPosts(userId));
  }, [userId, navigation]);

  return (
    <MainContainer>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.logoutContainer}>
            <LogoutBtn />
          </View>
          <Avatar avatar={avatar} />
          <Text style={styles.title}>{login}</Text>
          {status !== STATUS.loading &&
            userPosts.map((post) => (
              <PostCard key={post.id} {...post} navigation={navigation} />
            ))}
        </View>
      </ScrollView>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "transparent",
  },
  container: {
    display: "flex",
    gap: 32,
    backgroundColor: "#FFFFFF",
    marginTop: 147,
    paddingHorizontal: 16,
    paddingVertical: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    minHeight: Dimensions.get("window").height - 211,
  },
  logoutContainer: {
    position: "absolute",
    top: 14,
    right: 8,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
});
