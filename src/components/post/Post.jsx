import React from 'react'
import {MoreVertIcon} from '@mui/icons-material'
const Post = () => {
  return (
    <div className='post'>
      <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
          <img src="/assets/pesron/1.jpeg" alt="" className="postProfileImg" />
          <div className="postUsername">King</div>
          <div className="postDate">5 mins ago</div>
        </div>
        <div className="postTopRight">
          <MoreVertIcon/>
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">Hey its my first post</span>
        <img src="/assets/post/1.jpeg" alt="" className="postImg" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img src="/assets/like.png" alt="" className="likeIcon" />
          <img src="/assets/heart.png" alt="" className="likeIcon" />
          <span className="postLikeCounter">32 people like it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">9 comments</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Post