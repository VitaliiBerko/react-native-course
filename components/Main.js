import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes } from "../router";

export const Main = () => {
  // const isLoggedIn = useSelector();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch();
  // }, []);
  return (
    <NavigationContainer>
      <Routes
      //  isAuth={isLoggedIn}
       />
    </NavigationContainer>
  );
};
