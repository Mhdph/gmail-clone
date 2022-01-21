import React from "react";
import SideBarOption from "./SideBarOption";
import "../classes/sidebr.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import NoteIcon from "@mui/icons-material/Note";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { Avatar, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/counter/MailSlice";
function SideBar() {
  const dispatch = useDispatch(openSendMessage());
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose"
        onClick={() => dispatch}
      >
        Compose
      </Button>
      <SideBarOption
        Icon={InboxIcon}
        title="Inbox"
        number={16}
        selected={true}
      />
      <SideBarOption Icon={StarIcon} title="Starred" number={6} />
      <SideBarOption Icon={AccessTimeIcon} title="Snoozed" number={1} />
      <SideBarOption Icon={SendIcon} title="Sent" number={13} />
      <SideBarOption Icon={NoteIcon} title="Drafts" number={2} />
      <SideBarOption Icon={KeyboardArrowDownIcon} title="More" />
      <div className="sidebar__footer">
        <h3 className="sidebarMeet">Meet</h3>
        <SideBarOption Icon={VideocamIcon} title="New meeting" />
        <SideBarOption Icon={KeyboardIcon} title="Join a meeting" />
      </div>
      <h3 className="sidebarMeet">Hangouts</h3>
      <div className="hangouts">
        <div className="hangouts__left">
          <Avatar />
          <p>Arman</p>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
        <div className="hangouts__right">
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
      </div>
      <div className="footer-text sidebar__footer">
        <p>No recent chats</p>
        <span>start a new one</span>
      </div>

      <div className="sidebar_foot">
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <DuoIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default SideBar;
