import React from "react";
import { Checkbox, IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/MailSlice";

type EmailRowProps = {
  description: string;
  title: string;
  time: string;
  subject: string;
  id: number;
};

const EmailRow: React.FC<EmailRowProps> = ({
  title,
  subject,
  description,
  time,
  id,
}) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const openMail = (): void => {
    dispatch(
      selectMail({
        title,
        subject,
        description,
        time,
        id,
      })
    );
    history("/mail");
  };

  return (
    <div
      onClick={openMail}
      className="flex items-center h-12 border-b solid bg-white cursor-pointer z-50 hover:border-t hover:border-solid hover:border-gray-100"
    >
      <div className="flex">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
      </div>
      <h3 className="flex-[0.15] text-sm">{title}</h3>
      <div className="flex flex-[0.8] items-center text-base">
        <h4 className="w-[700px] overflow-hidden text-ellipsis px-1 whitespace-nowrap">
          {subject}

          <span className="font-normal text-gray-500"> - {description}</span>
        </h4>
      </div>
      <div className="pr-4 text-sm font-bold">{time}</div>
    </div>
  );
};
export default EmailRow;
