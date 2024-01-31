import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes } from "../router";
import { getCurrentlySignedIn } from "../redux/auth/auth.operations";
import { selectIsLoggenIn } from "../redux/auth/auth.selector";

export const Main = () => {
  const isLoggedIn = useSelector(selectIsLoggenIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentlySignedIn());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Routes isAuth={isLoggedIn} />
    </NavigationContainer>
  );
};
