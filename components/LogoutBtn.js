import { TouchableOpacity } from "react-native";
import { ICONS_MAP, getIcon } from "./Icons/Icons";
import { useDispatch } from "react-redux";
import { signOutUser } from "../redux/auth/auth.operations";

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={{ padding: 8 }}
      activeOpacity={0.8}
      onPress={() => dispatch(signOutUser())}
    >
      {getIcon(ICONS_MAP.logOut)}
    </TouchableOpacity>
  );
};
