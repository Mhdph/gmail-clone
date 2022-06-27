import React from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import PhotoIcon from "@mui/icons-material/Photo";
import LockClockIcon from "@mui/icons-material/LockClock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/counter/MailSlice";
import { useForm } from "react-hook-form";

type SendMailProps = {
  to: string;
  subject: string;
  message: string;
};

function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: SendMailProps) => console.log(data);
  console.log(watch("example"));
  return (
    <div className="absolute bottom-0 right-12 w-[60%] h-[80%] max-w-[550px] max-h-[540px] rounded-t-lg flex flex-col border border-solid border-gray-100 ">
      <div className="rounded-t-lg p-3 flex justify-between items-center text-gray-800 bg-[#404040]">
        <h3 className="text-sm text-gray-800">New Message</h3>
        <CloseIcon
          className="cursor-pointer"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form className="flex flex-1 flex-col " onSubmit={handleSubmit(onSubmit)}>
        <input
          className="h-8 p-2.5 border-b border-solid border-red-100 outline-none"
          type="text"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <span>This field is required</span>}
        <input
          className="h-8 p-2.5 border-b border-solid border-red-100 outline-none"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && <span>This field is required</span>}
        <input
          className="flex-1"
          placeholder="Message"
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && <span>This field is required</span>}

        <div className="flex items-center justify-center ">
          <div className="flex items-center pl-1">
            <Button
              color="primary"
              className="bg-[#4079ed] capitalize m-4"
              type="submit"
              variant="contained"
            >
              Send
            </Button>

            <IconButton>
              <TextFormatIcon />
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <IconButton>
              <InsertLinkIcon />
            </IconButton>
            <IconButton>
              <InsertEmoticonIcon />
            </IconButton>
            <IconButton>
              <AddToDriveIcon />
            </IconButton>
            <IconButton>
              <PhotoIcon />
            </IconButton>
            <IconButton>
              <LockClockIcon />
            </IconButton>
            <IconButton>
              <CreateIcon />
            </IconButton>
          </div>
          <div className="flex pr-2.5">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
