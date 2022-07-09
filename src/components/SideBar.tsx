import React from "react";
import SideBarOption from "./SideBarOption";
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
import { openSendMessage } from "../features/MailSlice";

function SideBar() {
  const dispatch = useDispatch();
  return (
    <div className="flex-[0.3] min-w-[300px] pr-5">
      <div
        onClick={() => dispatch(openSendMessage())}
        className="my-4 flex cursor-pointer items-center lg:w-[40%] ml-2.5 capitalize h-10 text-gray-500 p-4 rounded-3xl shadow-md"
      >
        <AddIcon fontSize="large" />
        <button>Compose</button>
      </div>
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
      <div className="border-y-[0.1px] border-gray-200 border-solid">
        <h3 className="text-[#292a2d] p-2.5 text-base">Meet</h3>
        <SideBarOption Icon={VideocamIcon} title="New meeting" />
        <SideBarOption Icon={KeyboardIcon} title="Join a meeting" />
      </div>
      <h3 className="text-[#292a2d] p-2.5 text-base">Hangouts</h3>
      <div className="flex items-center justify-between pb-1">
        <div className="flex items-center pl-4">
          <Avatar />
          <p className="pl-2.5">Mahdi</p>
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
        <div className="flex pr-5">
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-5 border-[0.1px] border-[#e7e7e7] border-solid">
        <p>No recent chats</p>
        <span className="text-[#1155cc] ">start a new one</span>
      </div>

      <div className="flex justify-center">
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
