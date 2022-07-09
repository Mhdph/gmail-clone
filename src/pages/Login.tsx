import { Button } from "@mui/material";
import React from "react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
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
          sx={{ fontWeight: 400 }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};
export default Login;
