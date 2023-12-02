import "./sidebar.css";
import {RssFeedIcon, ChatsIcon, VideosIcon, GroupsIcon, BookmarksIcon, QuestionsIcon, JobsIcon, EventsIcon, CoursesIcon} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatsIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <VideosIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Vidoes</span>
          </li>
          <li className="sidebarListItem">
            <GroupsIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarksIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <QuestionsIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <JobsIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventsIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <CoursesIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Moye Moye</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Moye Moye</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Moye Moye</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Moye Moye</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Moye Moye</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar