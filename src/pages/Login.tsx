import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth, googleProvider } from "../firebase";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const dispatch = useDispatch();

  const signIn = async (): Promise<any> => {
    try {
      const user = await signInWithPopup(auth, googleProvider);
      dispatch(
        login({
          email: user.user?.email,
          name: user.user?.displayName,
          photoUrl: user.user?.photoURL,
        })
      );
    } catch (err) {
      alert(`Login error: ${err}`);
    }
  };

  return (
    <div className="grid h-screen place-items-center bg-[#f2f2f2] ">
      <div className="flex gap-7 flex-col">
        <img
          className="h-[100px] object-contain"
          src="https://i.ibb.co/c6fXdMg/gmail-Logo.png"
          alt="logo"
        />
        <Button
          variant="contained"
          color="primary"
          data-testid="loginBtn"
          onClick={signIn}
          sx={{ fontWeight: 400 }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};
export default Login;
