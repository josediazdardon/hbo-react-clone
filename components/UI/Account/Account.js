const Account = (props) => {
  return (
    <div className="account account--active">
      <div className="account__details">
        <div className="account__title">My List</div>
        <div className="account__watch-list">
          <div className="account__watch-video">
            <img src="https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg" />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play" />
                </div>
                <div className="account__watch-circle">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
   <div className="account__menu">
    <ul className="account__main">
        <li>
            <a href="/" className="active">My List</a>
        </li>
    </ul>
    <div className="side-nav__divider" />
    <ul className="account__main">
        <li>
            <a href="/">My Account</a>
        </li>
        <li>
            <a href="/">Sign Out</a>
        </li>
    </ul>
   </div>
    </div>
  );
};
export default Account;
