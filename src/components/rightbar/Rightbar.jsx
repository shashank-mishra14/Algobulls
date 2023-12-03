import "./rightbar.css"

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b> Ashley</b> and <b>3 others</b> have their bdays today
            </span>
        </div>
      </div>
    </div>
  )
}
export default Rightbar
