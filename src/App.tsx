import React, { useEffect } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import { Chat } from "@mui/icons-material";
import GroupChat from "./components/GroupChat/GroupChat";
import Login from "./components/login/Login";
import { useAppDispatch, useAppSelector } from "./app/Hooks";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <GroupChat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
