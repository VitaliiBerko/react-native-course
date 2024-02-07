import { useState } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { selectUserPosts } from "../redux/posts/posts.selectors"
import { StyleSheet, View, TextInput } from "react-native"

export const InputCreateComment=({postId})=>{
    const [isInputFocus, setIsInputFocus]= useState(false)
    const[comment, setComment]= useState('')
    const {login, avatar, userId}= useSelector(selectUserPosts)

    const dispatch = useDispatch()

    const inputFocusStyles ={
        borderColor: '#FF6C00',
        backgroundColor: '#FFFFFF'
    }

    return (
        <View style={styles.container}>
            <View style ={styles.inputContainer}>
               <TextInput/>

            </View>

        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 16
    },
    inputContainer: {
        position: 'relative',
        width: '100%',
        height: 50
    },
    input: {
        fontFamily: 'Roboto-Medium',
        borderWidth: 1,
        color: '#212121',
        borderColor: '#E8E8E8',
        borderRadius: 100,
        padding: 16,
        paddingRight: 50,
        fontSize: 16,
        lineHeight: 19,
        backgroundColor: '#F6F6F6'
    }
})