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
    <div onClick={() => history("/mail")} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          {""}
          <span className="emailRow__description"> - {description}</span>
        </h4>
      </div>
      <div className="emailRow__time">{time}</div>
    </div>
  );
};
export default EmailRow;
