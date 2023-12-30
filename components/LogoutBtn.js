import { TouchableOpacity } from "react-native"
import { ICONS_MAP, getIcon } from "./Icons/Icons"

export const LogoutBtn =()=>{
    return (
        <TouchableOpacity style={{padding:8}} activeOpacity={0.8} onPress={()=>{}}>
            {getIcon(ICONS_MAP.logOut)}
        </TouchableOpacity>
    )
}