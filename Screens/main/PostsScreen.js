import { ScrollView, StyleSheet, View,Text } from "react-native"

export const PostScreen =()=>{
    return (
        <ScrollView style={{backgroundColor: "#FFFFFF"}}>
            <View style={styles.container}>
                <Text>PostScreen</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        height: "100%",
        paddingHorizontal: 16,
        paddingVertical: 32,

    }
})