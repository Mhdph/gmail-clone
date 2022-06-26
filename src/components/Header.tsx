import React from "react";
import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <img
            src="https://logo-download.com/wp-content/data/images/svg/Gmail-logo.svg"
            alt=""
          />
        </div>
        <div className="header__middle">
          <SearchIcon />
          <input placeholder="Search mail" type="text" />
          <AddRoadIcon className="header__inputCaret" />
        </div>
        <div className="header__right">
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <Avatar />
        </div>
      </div>
    </div>
  );
};
export default Header;
