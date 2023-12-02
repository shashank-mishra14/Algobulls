import "./topbar.css";
import {SearchIcon, PersonIcon, ChatIcon, NotificationsIcon} from "@mui/icons-material";

 const Topbar = () => {
  return (
    <div className="topbarContainer">
    <div className="topbarLeft">
        <span className="logo">Algobulls</span>
    </div>
    <div className="topbarCenter">
        <div className="searchbar">
            <SearchIcon className="searchIcon"/>
            <input placeholder="Search for anything" className="searchInput" />
        </div>
    </div>
    <div className="topbarRight">
        <div className="topbarLink">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>

        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <PersonIcon/>
                <span className="topbarIconBadge">3</span>
            </div>
            <div className="topbarIconItem">
                <ChatIcon/>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <NotificationsIcon/>
                <span className="topbarIconBadge">5</span>
            </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
    </div>
    </div>
  )
}

export default Topbar;