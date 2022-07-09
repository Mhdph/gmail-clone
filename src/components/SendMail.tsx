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
import { closeSendMessage } from "../features/MailSlice";
import { useForm } from "react-hook-form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageType>();

  interface MessageType {
    message: string;
    subject: string;
    email: string;
  }

  const onSubmit = async (data: MessageType) => {
    try {
      const docRef = await addDoc(collection(db, "emails"), {
        email: data.email,
        subject: data.subject,
        message: data.message,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error: any) {
      console.log(" Adding new docs fail: ", error);
      if (error && error?.message) {
        alert(error?.message);
      }
    }

    closeSendMessage();
  };

  return (
    <div className="absolute bottom-0 right-12 w-[40%] h-[70%] max-w-[550px] max-h-[540px] rounded-t-lg flex flex-col border border-solid border-gray-100 ">
      <div className="rounded-t-lg p-3 flex justify-between items-center text-gray-200 bg-[#404040]">
        <h3 className="text-sm text-white">New Message</h3>
        <CloseIcon
          className="cursor-pointer"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form className="flex flex-1 flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="h-8 p-4 border-b border-solid border-gray-200 outline-none"
          type="text"
          id="email"
          style={{ borderColor: errors.email ? "red" : "" }}
          placeholder={errors.email ? "" : "To:"}
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && <span>This field is required</span>}
        <input
          className="h-8 p-4 border-b border-solid border-gray-200 active:outline-none  outline-none"
          placeholder={errors.subject ? "" : "Subject:"}
          style={{ borderColor: errors.subject ? "red" : "" }}
          {...register("subject", { required: true })}
        />
        {errors.subject && <span>This field is required</span>}
        <textarea
          placeholder={errors.message ? "" : "Message:"}
          className="ml-2 flex-1 border-b border-solid border-gray-200 outline-none"
          {...register("message", { required: true })}
          id="message"
          cols={30}
          rows={10}
        />
        {errors.message && <span>This field is required</span>}

        <div className="flex py-2 items-center justify-center ">
          <div className="flex items-center pl-1">
            <Button
              id="submit-form"
              color="primary"
              className="bg-[#4079ed] capitalize m-4"
              type="submit"
              variant="contained"
              onClick={() => dispatch(closeSendMessage())}
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
