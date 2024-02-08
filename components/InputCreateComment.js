import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserPosts } from "../redux/posts/posts.selectors";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { createComment } from "../redux/posts/posts.operations";
import { incrementComentsCount } from "../redux/posts/posts.slice";
import {ICONS_MAP, getIcon} from './Icons/Icons'

export const InputCreateComment = ({ postId }) => {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [comment, setComment] = useState("");
  const { login, avatar, userId } = useSelector(selectUserPosts);
  


  const dispatch = useDispatch();

  const inputFocusStyles = {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  };
  const handleSubmit = () => {
    dispatch(createComment({ postId, comment, login, avatar, userId }));
    dispatch(incrementComentsCount(postId));
    setComment("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={
            isInputFocus
              ? { ...styles.input, paddingLeft: 28, ...inputFocusStyles }
              : { ...styles.input, paddingLeft: 28 }
          }
          placeholder="Коментувати"
          value={comment}
          placeholderTextColor="#bdbdbd"
          onChange={(text) => setComment(text)}
          onFocus={() => setIsInputFocus(true)}
          onBlur={() => setIsInputFocus(false)}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => handleSubmit()}
          style={styles.submitBtn}
        >
          <View style={styles.iconContainer}>{getIcon(ICONS_MAP.arrowSend)}</View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
  },
  inputContainer: {
    position: "relative",
    width: "100%",
    height: 50,
  },
  input: {
    fontFamily: "Roboto-Medium",
    borderWidth: 1,
    color: "#212121",
    borderColor: "#E8E8E8",
    borderRadius: 100,
    padding: 16,
    paddingRight: 50,
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#F6F6F6",
  },
  submitBtn: {
    position: "absolute",
    right: 8,
    top: 8,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "FF6C00",
  },
  iconContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
