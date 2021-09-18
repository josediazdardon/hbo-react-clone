import Link from 'next/link'
const Account = (props) => {
  return (
    <div className="account account--active">
      <div className="account__details">
        <div className="account__title">My List</div>
        <div className="account__watch-list">
          <div className="account__watch-video">
            <image src="https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg" />
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
            <Link href="/" className="active">My List</Link>
        </li>
    </ul>
    <div className="side-nav__divider" />
    <ul className="account__main">
        <li>
            <Link href="/">My Account</Link>
        </li>
        <li>
            <Link href="/">Sign Out</Link>
        </li>
    </ul>
   </div>
    </div>
  );
};
export default Account;
