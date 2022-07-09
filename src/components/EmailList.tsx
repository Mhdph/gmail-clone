import React, { useEffect, useState } from "react";
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
import { db } from "../firebase";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
function EmailList() {
  const [emails, setEmails] = useState<any[]>([]);
  useEffect(() => {
    const emailConnectionRef = collection(db, "emails");

    const q = query(emailConnectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) => {
      if (!snapshot.metadata.hasPendingWrites) {
        let emailsArr: any[] = [];
        snapshot.docs.forEach((doc) => {
          const emailDoc = {
            ...doc.data(),
            id: doc.id,
          };
          emailsArr.push(emailDoc);
        });
        setEmails(emailsArr);
      }
    });
    return unsub;
  }, []);

  return (
    <div className="flex-1 overflow-scroll">
      <div className="sticky top-0 flex pr-2.5 justify-between bg-white z-50 border border-solid border-white">
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
      <div className="sticky top-0 flex bg-white z-50 border-b border-solid border-white">
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

      <div className="email-list-rows">
        {emails.map((email) => {
          const date = new Date(email?.timestamp.seconds * 1000);
          return (
            <EmailRow
              subject={email.subject}
              description={email.message}
              time={`${
                date.getMonth() + 1
              }/${date.getDate()}/${date.getFullYear()}`}
              key={email.id}
              id={email.id}
              title={email.email}
            />
          );
        })}
      </div>
    </div>
  );
}

export default EmailList;
