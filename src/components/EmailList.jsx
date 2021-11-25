import React from "react";
import "../classes/emailList.css";
import { Checkbox, IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PeopleIcon from "@mui/icons-material/People";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Section from "./Section";
import EmailRow from "./EmailRow";
function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList_settingLeft">
          <Checkbox />
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList_settingRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
      </div>
      <div className="email-section">
        <Section
          Icon={InboxIcon}
          title="Primary"
          color="red"
          selected
        ></Section>
        <Section Icon={PeopleIcon} title="Social" color="blue"></Section>
        <Section
          Icon={LocalOfferIcon}
          title="Promotions"
          color="green"
        ></Section>
      </div>
      <div className="emailList__list">
        <EmailRow
          title="DeviantArt "
          subject="Learn to Draw with Netflix Director & Creator Jorge R. Gutiérrez!
          Inbox
          "
          description="This new tutorial from Jorge R. Gutiérrez (mexopolis) will teach you how to draw a character from his new Netflix limited series, Maya and the Three! Use the tutorial to illustrate your own version of Zatz, and submit it to DeviantArt to earn a new profile badge!"
          time="10am"
        />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Discord"
          subject="Verify Discord Login from New Location
          Inbox
          "
          description="It looks like someone tried to log into your Discord account from a new location. If this is you, follow the link below to authorize logging in from this location on your account. If this isn't you, we suggest changing your password as soon as possible."
          time="10am"
        />
      </div>
    </div>
  );
}

export default EmailList;
