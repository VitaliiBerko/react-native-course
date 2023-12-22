import { Dimensions, ScrollView, StyleSheet, View, Text } from "react-native"
import MainContainer from "../../components/MainContainer"

export const ProfileScreen = ()=> {
    return (
        <MainContainer>
            <ScrollView style={styles.scrollContainer}>
                <View style= {styles.container}>
                    <Text>ProfileScreen</Text>
                </View>
            </ScrollView>
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: "transparent"
    },
    container: {
        display: 'flex',
        gap: 32,
        backgroundColor: "#FFFFFF",
        marginTop: 147,
        paddingHorizontal: 16,
        paddingVertical: 32,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        minHeight: Dimensions.get('window').height-211,

    }
})