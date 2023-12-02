import "./share.css";
import {} from "@mui/icons-material";
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
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share