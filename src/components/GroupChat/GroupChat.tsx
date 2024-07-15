import React from "react";
import "./GroupChat.scss";
import ChatHeader from "./ChatHeader";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ChatMessage from "./ChatMessage";

const GroupChat = () => {
  return (
    <div className="GroupChat">
      {/*ChatHeader*/}
      <ChatHeader />
      {/*ChatMessage*/}
      <div className="ChatMessage"></div>
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      {/*ChatInput*/}
      <div className="ChatInput">
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder="メッセージを送信" />
          <button type="submit" className="ChatInputbutton">
            送信
          </button>
        </form>
        <div className="ChatInputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <SentimentVerySatisfiedIcon />
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
