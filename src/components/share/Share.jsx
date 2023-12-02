import "./share.css";
import {PermMediaIcon, LabelIcon, RoomIcon, EmojiEmotionsIcon} from "@mui/icons-material";
const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                <input placeholder="What you thinkin" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon className="shareIcon"/>
                        <span className="shareOptionText" htmlColor="tomato">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <LabelIcon className="shareIcon"/>
                        <span className="shareOptionText" htmlColor="blue">Tag</span>
                    </div>
                    <div className="shareOption">
                        <RoomIcon className="shareIcon"/>
                        <span className="shareOptionText" htmlColor="green">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon className="shareIcon"/>
                        <span className="shareOptionText" htmlColor="goldenrod">Emotions</span>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share