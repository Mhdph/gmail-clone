import React from "react";
import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { useDispatch, useSelector } from "react-redux";
import { logout, slectUser } from "../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const user = useSelector(slectUser);
  const dispatch = useDispatch();

  const logOut = async (): Promise<any> => {
    try {
      dispatch(logout());
      await signOut(auth);
    } catch (err) {
      alert(`Sign out error: ${err}`);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between border-b border-solid border-gray-100">
        <div className="flex items-center">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            className="ml-1 h-12 object-contain"
            src="https://i.ibb.co/wLmWwv1/logo.png"
            alt=""
          />
        </div>
        <div className="mt-2.5 flex flex-[0.7] items-center bg-slate-50 py-4  rounded">
          <SearchIcon className="text-gray-200" />
          <input
            className="text-gray-900 border-none w-full p-1 outline-none text-sm bg-transparent"
            placeholder="Search mail"
            type="text"
          />
          <AddRoadIcon className="text-gray-400 " />
        </div>
        <div className="flex pr-5">
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <Avatar
            className="cursor-pointer"
            onClick={logOut}
            src={user?.photoURL}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
