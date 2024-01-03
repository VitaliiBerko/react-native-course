import { ScrollView, Text } from "react-native";

import { CreatePostForm } from "../../components/CreatePostForm";

export const CreatePostsScreen = ({navigation}) => {
  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      <CreatePostForm navigation={navigation} />
    </ScrollView>
  );
};
