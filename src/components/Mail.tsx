import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import LabelIcon from "@mui/icons-material/Label";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PrintIcon from "@mui/icons-material/Print";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../features/MailSlice";
function Mail() {
  const selectedMail = useSelector(selectOpenMail);

  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div className="flex-1 bg-gray-200 ">
      <div className="flex justify-between bg-white">
        <div className="flex">
          <IconButton onClick={handleClick}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <ArchiveIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <AccessTimeFilledIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <DriveFileMoveIcon />
          </IconButton>
          <IconButton>
            <LabelIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mailtools__right">
          <IconButton>
            <OpenInNewIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
        </div>
      </div>
      <div className="flex flex-col m-7 bg-white p-5 h-screen shadow ">
        <div className="flex items-center border-b border-solid border-gray-300 p-5 relative">
          <h2 className="m-5">{selectedMail?.subject}</h2>
          <LabelImportantIcon className="text-[#e8ab02] pr-2" />
          <p>{selectedMail?.title}</p>
          <p className="absolute top-6 right-0 text-xs text-gray-600">
            {selectedMail?.time}
          </p>
        </div>
        <div className="mail__meassage">
          <p className="p-2.5 mr-5 break-words">{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
