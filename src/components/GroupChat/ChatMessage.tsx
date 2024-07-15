import React from "react";
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";

const ChatMessage = () => {
  return (
    <div className="Message">
      <Avatar />
      <div className="MessageInfo">
        <h4>
          Yuki Nishikawa
          <span className="MessageTimeStump"></span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  );
};

export default ChatMessage;
