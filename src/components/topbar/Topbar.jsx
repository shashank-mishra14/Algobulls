import "./topbar.css";
import {Search, Person, Chat, Notifications} from "@material-ui/icons";

export const Topbar = () => {
  return (
    <div className="topbarContainer">
    <div className="topbarLeft">
        <span className="logo">Algobulls</span>
    </div>
    <div className="topbarCenter">
        <div className="searchbar">
            <Search/>
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
                <Person/>
                <span className="topbarIconBadge">3</span>
            </div>
            <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">5</span>
            </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
    </div>
    </div>
  )
}
