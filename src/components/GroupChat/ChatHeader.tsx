import React from "react";
import "./ChatHeader.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";
import "@unocss/reset/eric-meyer.css";

const ChatHeader = () => {
  return (
    <div className="ChatHeader">
      <div className="ChatHeaderLeft">
        <h3>
          <span className="ChatHeaderHash">#</span>
          various heading
        </h3>
      </div>
      <div className="ChatHeaderRight">
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleAltIcon />
        <div className="ChatHeaderSearch">
          <input type="text" placeholder="検索" />
          <SearchIcon />
        </div>
      </div>
      <SendIcon />
      <HelpIcon />
    </div>
  );
};

export default ChatHeader;
