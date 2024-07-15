import React, { useEffect } from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { auth, db } from "../../firebase";
import { useAppSelector } from "../../app/Hooks";
import { Photo } from "@mui/icons-material";
import { collection, query } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
const Sidebar = () => {
  const user = useAppSelector((state) => state.user);

  const q = query(collection(db, "channels"));
  useEffect(() => {
    onscroll;
  }, []);
  return (
    <div className="Sidebar">
      {/*sidebar Light*/}
      <div className="SidebarLeft">
        <div className="servericon">
          <img src="./submarine.png" alt="" />
        </div>
        <div className="servericon">
          <img src="./submarine.png" alt="" />
        </div>
      </div>
      {/*sidebar Right*/}
      <div className="SidebarRight">
        <div className="SidebarTop">
          <h3>discord</h3>
          <ExpandMoreIcon />
        </div>
        {/*sidebar channel*/}
        <div className="SidebarChannels">
          <div className="SidebarChannelsHeader">
            <div className="SidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミング研究</h4>
            </div>
            <AddIcon className="SidebarAddChannel" />
          </div>
          <div className="SidebarChannelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
          <div className="SidebarFooter">
            <div className="SidebarAccount">
              <img src={user.photo} alt="" onClick={() => auth.signOut()} />
              <div className="accountName">
                <h4>{user.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>
            <div className="SidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
