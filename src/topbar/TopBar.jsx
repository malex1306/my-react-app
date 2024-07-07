import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-tiktok"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img 
                className="topImg"
                src={`${process.env.PUBLIC_URL}/Tascha.JPG`}    
                alt="Tascha" 
            />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  );
}
