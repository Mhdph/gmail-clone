import React from "react";
import "../classes/SendMail.css";

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
import { useForm } from "react-hook-form";

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <span>This field is required</span>}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && <span>This field is required</span>}
        <input
          className="sendMail__message"
          placeholder="Message"
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && <span>This field is required</span>}

        <div className="sendMail__options">
          <div className="sendMail__options__left">
            <Button
              color="primary"
              className="sendMail__send"
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
          <div className="sendMail__options__right">
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
