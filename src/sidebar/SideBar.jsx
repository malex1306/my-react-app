import React from 'react'
import "./sidebar.css"

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={`${process.env.PUBLIC_URL}/Tascha.JPG`} alt="Tascha" />
            <p>Test Text</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">BOOKS</li>
            <li className="sidebarListItem">SHORTSTORYS</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-tiktok"></i>
        </div>

        </div>
    </div>
  )
}
