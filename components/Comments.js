import { StyleSheet, View, Text } from 'react-native'
import{ICONS_MAP, getIcon} from '../components/Icons/Icons'


export const Comments =(commentsCout=0)=>{
    const icon = commentsCout>0 ? ICONS_MAP.messageCircleOrange : ICONS_MAP.messageCircle  
    return(
        <View style={styles.container}>
            {getIcon(icon)}
            <Text style={styles.text}>{commentsCout}</Text>
        </View>
    )

}

const styles= StyleSheet.create({
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
        color: '#212121'
    }
})