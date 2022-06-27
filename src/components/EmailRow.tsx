import React from "react";
import { Checkbox, IconButton } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useNavigate } from "react-router-dom";

type EmailRowProps = {
  description: string;
  title: string;
  time: string;
  subject: string;
};

const EmailRow: React.FC<EmailRowProps> = ({
  title,
  subject,
  description,
  time,
}) => {
  const history = useNavigate();
  return (
    <div
      onClick={() => history("/mail")}
      className="flex items-center h-12 border-b solid bg-white cursor-pointer z-50 hover:border-t hover:border-solid hover:border-gray-100"
    >
      <div className="flex">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
      </div>
      <h3 className="flex-[0.15] text-sm">{title}</h3>
      <div className="flex flex-[0.8] items-center text-xs">
        <h4 className="w-[700px] overflow-hidden text-ellipsis px-1 whitespace-nowrap">
          {subject}

          <span className="font-normal text-gray-600"> - {description}</span>
        </h4>
      </div>
      <div className="pr-4 text-[9px] font-bold">{time}</div>
    </div>
  );
};
export default EmailRow;
