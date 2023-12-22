import { ScrollView, StyleSheet, View } from "react-native";

export const Home = () => {
  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
});
