import "./topbar.css";
import {Search} from "@material-ui/icons";

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
    <div className="topbarRight"></div>
    </div>
  )
}
