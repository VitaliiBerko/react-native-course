import { StyleSheet, View, Text } from "react-native"
import { ICONS_MAP, getIcon } from "./Icons/Icons"


export const Likes =({likesCount =0})=>{
    const icon = likesCount>0 ? ICONS_MAP.thumbsUp : null

    return (
        <View style={styles.container}>
            {getIcon(icon)}
            <Text style={styles.text}>{likesCount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6
    },
    text: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        color: "#212121"
    }
})